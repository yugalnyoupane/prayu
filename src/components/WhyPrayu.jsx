import * as Icons from "./Icons";
import { whyPrayu } from "../data/site";

export default function WhyPrayu() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap why">
        <div className="reveal">
          <span className="eyebrow mute">Why Prayu</span>
          <h2>Technology should fit the business, not the other way around.</h2>
        </div>
        <div className="why-items">
          {whyPrayu.map((w) => {
            const Icon = Icons[w.icon];
            return (
              <div className="reveal" key={w.title}>
                <span className="ic"><Icon /></span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
