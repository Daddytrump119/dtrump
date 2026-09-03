import { buySteps } from "../data/site";
import { asset } from "../lib/asset";

export function HowToBuy() {
  return (
    <section className="section paper" id="buy">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Four steps</p>
          <h2>How to buy</h2>
        </div>
        <div className="steps">
          {buySteps.map((step) => (
            <article key={step.n}>
              <img src={asset(step.image)} alt="" />
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
