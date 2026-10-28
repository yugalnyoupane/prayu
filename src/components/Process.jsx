import SectionHead from "./SectionHead";
import { processSteps } from "../data/site";

export default function Process() {
  return (
    <section className="section" id="process" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHead eyebrow="Our process" title="From conversation to solution." style={{ marginBottom: 36 }} />
        <ol className="steps">
          {processSteps.map((s, i) => (
            <li className="step reveal" key={s.title}>
              <div className="top">
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
              </div>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
