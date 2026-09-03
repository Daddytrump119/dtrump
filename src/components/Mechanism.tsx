import { mechanism } from "../data/site";

export function Mechanism() {
  return (
    <section className="section navy" id="onchain">
      <div className="wrap">
        <div className="section-head invert">
          <p className="eyebrow gold">Why Robinhood Chain</p>
          <h2>Onchain</h2>
          <p className="section-copy">
            The biggest Trump files of the last decade — now media on Robinhood Chain. Public.
            Cheap. Still there tomorrow.
          </p>
        </div>
        <div className="mechanism">
          {mechanism.map((step) => (
            <article key={step.n}>
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
