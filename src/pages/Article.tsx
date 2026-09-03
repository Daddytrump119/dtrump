import { Link, Navigate, useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { articles } from "../data/articles";
import { leaks, site } from "../data/site";
import { asset, homeHash } from "../lib/asset";

export function Article() {
  const { slug } = useParams();
  const leak = leaks.find((item) => item.slug === slug);
  const article = slug ? articles[slug] : undefined;
  const others = leaks.filter((item) => item.slug !== slug).slice(0, 4);

  if (!leak || !article) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="article-page">
      <Header />
      <article className="article">
        <p className="eyebrow">
          {leak.kicker} · SECRET · {leak.stamp}
        </p>
        <h1>{leak.title}</h1>
        <p className="article-meta">
          {article.date} · {article.read} · The Donkey Files
        </p>
        <p className="article-dek">{leak.dek}</p>

        <figure className="article-hero">
          <img src={asset(article.cover)} alt="" />
          <figcaption>Vault cover — {leak.title}</figcaption>
        </figure>

        <blockquote>{article.quote}</blockquote>

        <div className="article-lede">
          {article.lede.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>

        {article.timeline && (
          <section className="article-section">
            <h2>The record, in order</h2>
            <ol className="article-timeline">
              {article.timeline.map((row) => (
                <li key={row.date + row.event}>
                  <strong>{row.date}</strong>
                  <span>{row.event}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {article.sections.map((section) => (
          <section className="article-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paras.map((para, index) => (
              <div key={para}>
                <p>{para}</p>
                {section.figure && index === 0 ? (
                  <figure className="article-inline">
                    <img src={asset(section.figure.src)} alt={section.figure.caption} />
                    <figcaption>{section.figure.caption}</figcaption>
                  </figure>
                ) : null}
              </div>
            ))}
            {section.pull ? <blockquote className="article-pull">{section.pull}</blockquote> : null}
          </section>
        ))}

        <section className="article-section">
          <h2>Evidence locker</h2>
          <p>
            Court photos, public-record buildings, and vault stills filed with this secret. Nothing
            here is a verdict. It is the stack the news already ran — kept where a weekend story
            cannot bury it.
          </p>
          <div className="evidence-grid article-evidence">
            {article.evidence.map((shot) => (
              <figure key={shot.src + shot.caption}>
                <img src={asset(shot.src)} alt={shot.caption} />
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <div className="article-cta">
          <a className="btn btn-ghost" href={homeHash("/#leaks")}>
            Back to the vault
          </a>
          <a className="btn btn-red" href={homeHash("/#buy")}>
            Buy {site.ticker}
          </a>
        </div>

        <section className="article-section">
          <h2>More files in the vault</h2>
          <div className="related">
            {others.map((item) => (
              <Link key={item.slug} to={`/secrets/${item.slug}`}>
                <img src={asset(item.image)} alt="" />
                <b>{item.kicker}</b>
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
}
