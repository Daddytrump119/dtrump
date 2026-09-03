import { breaking } from "../data/site";

export function Breaking() {
  const row = [...breaking, ...breaking];

  return (
    <div className="breaking" aria-hidden="true">
      <strong>LIVE</strong>
      <div className="breaking-mask">
        <div className="breaking-track">
          {row.map((line, i) => (
            <span key={`${line}-${i}`}>{line}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
