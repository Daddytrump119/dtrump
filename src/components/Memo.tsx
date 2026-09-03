import { useEffect, useState } from "react";
import { memos } from "../data/site";
import { asset } from "../lib/asset";

export function Memo() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % memos.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [active]);

  const memo = memos[active];

  return (
    <section className="section" id="files">
      <div className="wrap">
        <article className="memo">
          <header>
            <p className="stamp fat">{memo.classification}</p>
            <h2>Memorandum</h2>
            <ul>
              <li>
                <span>FROM</span> THE DONKEY FILES
              </li>
              <li>
                <span>TO</span> THE PUBLIC
              </li>
              <li>
                <span>RE</span> {memo.re}
              </li>
            </ul>
          </header>

          <figure className="memo-photo">
            <img src={asset(memo.image)} alt={memo.caption} />
            <figcaption>{memo.caption}</figcaption>
          </figure>

          {memo.body.map((para) => (
            <p key={para}>{para}</p>
          ))}
          <footer>— The Donkey Files. Satire. Not financial advice.</footer>

          <div className="memo-dots" role="tablist" aria-label="Memorandum files">
            {memos.map((item, index) => (
              <button
                key={item.re}
                type="button"
                role="tab"
                aria-selected={index === active}
                className={index === active ? "is-on" : undefined}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
