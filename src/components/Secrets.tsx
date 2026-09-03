import { Link } from "react-router-dom";
import { leaks } from "../data/site";
import { asset } from "../lib/asset";

export function Secrets() {
  return (
    <section className="section paper" id="leaks">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">The vault</p>
          <h2>Dark secrets</h2>
          <p className="section-copy">
            Ten files that already shook the news. Open a card. Read the full drop.
          </p>
        </div>

        <div className="leak-grid">
          {leaks.map((leak) => (
            <Link className="leak-card" key={leak.slug} to={`/secrets/${leak.slug}`}>
              <figure>
                <img src={asset(leak.image)} alt="" />
                <em>SECRET</em>
                <b>{leak.stamp}</b>
              </figure>
              <p className="kicker">{leak.kicker}</p>
              <h3>{leak.title}</h3>
              <p>{leak.dek}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
