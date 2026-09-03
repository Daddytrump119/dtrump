import { useState } from "react";
import { site } from "../data/site";
import { asset, homeHash } from "../lib/asset";

export function Hero() {
  const [copied, setCopied] = useState(false);

  async function copyCa() {
    await navigator.clipboard.writeText(site.contractAddress);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline poster={asset("/images/hero-poster.png")}>
        <source src={asset("/videos/hero.mp4")} type="video/mp4" />
      </video>
      <div className="hero-shade" />

      <div className="hero-overlay">
        <p className="eyebrow">
          <img src={asset("/icons/robinhood.svg")} alt="" width={16} height={16} />
          Robinhood Chain memecoin
        </p>
        <h1>
          Donkey
          <span>Trump</span>
        </h1>
        <p className="hero-ticker">
          {site.ticker} <em>dark secrets on {site.chain}</em>
        </p>
        <p className="lede">{site.tagline}</p>

        <div className="ca-box">
          <span>Contract</span>
          <code>{site.contractAddress}</code>
          <button type="button" onClick={() => void copyCa()}>
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <div className="hero-ctas">
          <a className="btn btn-red btn-lg" href={homeHash(site.buyUrl)}>
            Buy {site.ticker}
          </a>
          <a className="btn btn-ghost btn-lg" href="#leaks">
            Read the files
          </a>
        </div>
      </div>
    </section>
  );
}
