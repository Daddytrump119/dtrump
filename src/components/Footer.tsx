import { site } from "../data/site";
import { asset, homeHash } from "../lib/asset";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <div className="footer-brand">
          <img src={asset("/images/token-ride.gif")} alt="" width={48} height={48} />
          <div>
            <strong>
              {site.ticker}
            </strong>
            <span>Official coin of the leak</span>
          </div>
        </div>
        <div className="footer-links">
          <a href={site.socials.x} target="_blank" rel="noreferrer">
            X
          </a>
          <a href={site.socials.telegram} target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a href={homeHash("/#token")}>Token</a>
        </div>
      </div>

      <div className="disclaimer wrap">
        <p>
          {site.ticker} is not affiliated with any government or official body. Not financial
          advice. Crypto carries significant risk. Always do your own research.
        </p>

        <h3>Independence &amp; Non-Affiliation Disclaimer</h3>
        <p>
          This project is an independent initiative and is not affiliated with, authorized by,
          endorsed by, sponsored by, or otherwise associated with Donald J. Trump, Robinhood
          Markets, Inc., Robinhood Chain, any other public figure, political candidate, campaign,
          political organization, governmental entity, exchange, or any of their respective
          affiliates or representatives.
        </p>
        <p>
          Any references to Donald J. Trump, Jeffrey Epstein, or other public figures are made
          solely for contextual, informational, editorial, satirical, or descriptive purposes, as
          applicable.
        </p>
        <p>
          This project does not adopt, represent, or imply a pro-Trump or anti-Trump position, nor
          should any content associated with the project be construed as an endorsement of,
          opposition to, or advocacy for or against Donald J. Trump, any political candidate,
          political party, public figure, organization, or political viewpoint.
        </p>
        <p>
          Any names, likenesses, trademarks, slogans, or other identifying references belonging to
          third parties remain the property of their respective owners. Their appearance or mention
          does not imply any affiliation, endorsement, sponsorship, approval, or association with
          this project.
        </p>
        <p>
          {site.name} ({site.ticker}) is a meme token on {site.chain}. Nothing on this site is news
          reporting, legal advice, or an offer to sell securities. You can lose everything. Only
          trust the contract address posted on this website.
        </p>
      </div>
    </footer>
  );
}
