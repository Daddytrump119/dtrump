"""Generate the Donkey Trump hero clip via MiniMax Hailuo I2V."""

from __future__ import annotations

import base64
import json
import os
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

API_BASE = "https://api.minimax.io"
MODEL = "MiniMax-Hailuo-2.3"
DEFAULT_PROMPT = (
    "[Static shot] then [Push in]. Aardman Shaun the Sheep stop-motion claymation. "
    "A clay Donald Trump with a recognizable orange face and blonde combover is on "
    "his hands and knees on a rising green clay stock chart. A Donkey Trump character "
    "with a donkey face, long ears, Trump blonde hair, navy suit and red tie rides on "
    "his back with a small bounce. Cute round cartoon clay dynamite with sparking fuses "
    "falls slowly through a cream-blue sky in slow motion. On the right, a man seen only "
    "from the back — unmistakable Trump hair and navy suit — presses a chunky red "
    "detonator remote. Soft studio light, plasticine fingerprints, gentle stop-motion, "
    "no text, no logos."
)
PROMPT = os.environ.get("VIDEO_PROMPT", DEFAULT_PROMPT)


def request_json(url: str, api_key: str, payload: dict | None = None) -> dict:
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }
    data = None if payload is None else json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers=headers, method="GET" if payload is None else "POST")
    try:
        with urllib.request.urlopen(req, timeout=180) as res:
            return json.loads(res.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        body = exc.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"HTTP {exc.code} from {url}: {body}") from exc


def main() -> int:
    api_key = os.environ.get("MINIMAX_API_KEY", "").strip()
    if not api_key:
        print("MINIMAX_API_KEY is missing", file=sys.stderr)
        return 1

    root = Path(__file__).resolve().parents[1]
    frame = Path(os.environ.get("HERO_FRAME", "")).expanduser()
    if not frame.is_file():
        frame = Path(r"C:\Users\Kage\.cursor\projects\c-projects-token\assets\hero-first-frame.png")
    if not frame.is_file():
        print(f"First frame not found: {frame}", file=sys.stderr)
        return 1

    out_dir = root / "public" / "videos"
    out_dir.mkdir(parents=True, exist_ok=True)
    out_name = os.environ.get("OUT_FILE", "")
    out_file = Path(out_name).expanduser() if out_name else out_dir / "hero.mp4"
    if not out_file.is_absolute():
        out_file = root / out_file

    image_b64 = base64.b64encode(frame.read_bytes()).decode("ascii")
    create = request_json(
        f"{API_BASE}/v1/video_generation",
        api_key,
        {
            "model": MODEL,
            "prompt": PROMPT,
            "first_frame_image": f"data:image/png;base64,{image_b64}",
            "duration": int(os.environ.get("VIDEO_DURATION", "6")),
            "resolution": os.environ.get("VIDEO_RESOLUTION", "1080P"),
            "prompt_optimizer": True,
        },
    )
    print(json.dumps(create, indent=2))
    if create.get("base_resp", {}).get("status_code") not in (0, None):
        return 1

    task_id = create.get("task_id")
    if not task_id:
        print("No task_id returned", file=sys.stderr)
        return 1

    file_id = None
    for attempt in range(60):
        time.sleep(8)
        query = request_json(f"{API_BASE}/v1/query/video_generation?task_id={task_id}", api_key)
        status = query.get("status")
        print(f"[{attempt + 1}] {status} {query.get('base_resp')}")
        if status == "Success":
            file_id = query.get("file_id")
            break
        if status == "Fail":
            print(json.dumps(query, indent=2), file=sys.stderr)
            return 1

    if not file_id:
        print("Timed out waiting for video", file=sys.stderr)
        return 1

    retrieved = request_json(f"{API_BASE}/v1/files/retrieve?file_id={file_id}", api_key)
    print(json.dumps(retrieved, indent=2))
    download_url = retrieved.get("file", {}).get("download_url")
    if not download_url:
        print("No download_url", file=sys.stderr)
        return 1
    if not download_url.startswith("http"):
        download_url = f"https://{download_url}"

    urllib.request.urlretrieve(download_url, out_file)
    print(f"Saved {out_file} ({out_file.stat().st_size} bytes)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
