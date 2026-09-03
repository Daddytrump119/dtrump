import { channels, site } from "../data/site";

export function Channels() {
  return (
    <section className="section navy" id="channels">
      <div className="wrap">
        <div className="section-head invert">
          <p className="eyebrow gold">Stay close</p>
          <h2>Join the barn</h2>
        </div>
        <div className="channel-grid">
          {channels.map((item) => (
            <a key={item.name} href={item.href} target="_blank" rel="noreferrer">
              <small>{item.tag}</small>
              <strong>{item.name}</strong>
            </a>
          ))}
        </div>
        <div className="center-cta">
          <a className="btn btn-red btn-lg" href={site.buyUrl}>
            Buy {site.ticker}
          </a>
        </div>
      </div>
    </section>
  );
}
