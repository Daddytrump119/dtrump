import { useState } from "react";
import { Link } from "react-router-dom";
import { nav, site } from "../data/site";
import { asset, homeHash } from "../lib/asset";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" to="/" onClick={() => setOpen(false)}>
        <img src={asset("/images/token-ride.gif")} alt="" width={44} height={44} />
        <span>
          {site.name}
          <small>{site.ticker}</small>
        </span>
      </Link>

      <nav className={open ? "nav is-open" : "nav"} aria-label="Primary">
        {nav.map((item) => (
          <a key={item.href} href={homeHash(item.href)} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="btn btn-gold" href={homeHash("/#token")}>
          {site.ticker}
        </a>
        <a className="btn btn-red" href={homeHash(site.buyUrl)}>
          Buy
        </a>
        <Link className="btn btn-play" to="/play" onClick={() => setOpen(false)}>
          Play
        </Link>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
