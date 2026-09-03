import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { arcadeGames } from "../data/games";
import { asset } from "../lib/asset";

export function Games() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<{
    title: string;
    pack: string;
    href: string;
    progress: number;
  } | null>(null);

  async function openGame(game: (typeof arcadeGames)[number]) {
    setLoading({ title: game.title, pack: game.pack, href: game.href, progress: 4 });

    let done = 0;
    const tick = window.setInterval(() => {
      setLoading((current) =>
        current ? { ...current, progress: Math.min(94, current.progress + 3) } : current,
      );
    }, 80);

    await Promise.all(
      game.assets.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = asset(src);
          }).then(() => {
            done += 1;
            setLoading((current) =>
              current
                ? { ...current, progress: Math.max(current.progress, Math.round((done / game.assets.length) * 88)) }
                : current,
            );
          }),
      ),
    );

    window.clearInterval(tick);
    setLoading((current) => (current ? { ...current, progress: 100 } : current));
    window.setTimeout(() => navigate(game.href), 280);
  }

  return (
    <div className="play-page">
      <Header />
      <main className="play-main">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">The arcade</p>
            <h2>Play.</h2>
            <p className="section-copy">
              One clay track for now. More games drop with the files.
            </p>
          </div>

          <div className="game-grid">
            {arcadeGames.map((game) => (
              <button className="game-card" type="button" key={game.slug} onClick={() => void openGame(game)}>
                <img src={asset(game.cover)} alt="" />
                <span className="kicker">{game.tag}</span>
                <h3>{game.title}</h3>
                <p>{game.blurb}</p>
                <em>Play</em>
              </button>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {loading ? (
        <div className="pack-overlay" role="status" aria-live="polite">
          <div className="pack-sheet">
            <p className="eyebrow">Downloading</p>
            <h2>{loading.title}</h2>
            <p className="pack-file">{loading.pack}</p>
            <div className="pack-bar">
              <i style={{ width: `${loading.progress}%` }} />
            </div>
            <b>{loading.progress}%</b>
          </div>
        </div>
      ) : null}
    </div>
  );
}
