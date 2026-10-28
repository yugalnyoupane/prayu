import SectionHead from "./SectionHead";
import * as Icons from "./Icons";
import { industries } from "../data/site";

export default function Industries() {
  return (
    <section className="section" id="industries" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHead
          eyebrow="Industries"
          title="Built for the way different businesses work."
          link={{ href: "#contact", label: "View all industries" }}
        />
        <div className="ind-grid">
          {industries.map((item) => {
            const Icon = Icons[item.icon];
            return (
              <div className="ind reveal" key={item.title}>
                <span className="ic"><Icon /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
          <a className="ind other reveal" href="#contact" style={{ textDecoration: "none" }}>
            <span className="ic"><Icons.ArrowCircle /></span>
            <h3>Have a different business?</h3>
            <p>We build around your process.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
