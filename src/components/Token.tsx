import { useState } from "react";
import { site, stats } from "../data/site";
import { asset } from "../lib/asset";

export function Token() {
  const [copied, setCopied] = useState(false);

  async function copyCa() {
    await navigator.clipboard.writeText(site.contractAddress);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section className="section navy" id="token">
      <div className="wrap">
        <div className="section-head invert">
          <p className="eyebrow gold">The coin</p>
          <h2>{site.ticker}</h2>
          <p className="section-copy">
            1 billion supply. Zero tax. Liquidity locked. Same chain as the files. This is the
            donkey they can’t unsell.
          </p>
        </div>

        <div className="token-stage">
          <figure className="token-mark">
            <img src={asset("/images/token-ride.gif")} alt="" />
          </figure>

          <div className="token-panel">
            <p className="wordmark-type">{site.ticker}</p>
            <dl className="stat-grid">
              {stats.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
            <div className="ca-box dark">
              <span>Contract</span>
              <code>{site.contractAddress}</code>
              <button type="button" onClick={() => void copyCa()}>
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
