import * as Icons from "./Icons";
import { clients } from "../data/site";

/* Load every logo in src/assets/clients so they are bundled and hashed by Vite. */
const logoFiles = import.meta.glob("../assets/clients/*", { eager: true, import: "default" });
const logoUrl = (file) => logoFiles[`../assets/clients/${file}`];

export default function TrustedBy() {
  return (
    <section className="section trusted" id="clients">
      <div className="wrap">
        <div className="trusted-head reveal">
          <span className="eyebrow">Trusted by</span>
          <h2>Trusted by 100+ clients worldwide</h2>
          <p>Businesses across the United States, Canada and Nepal run on websites and systems built by Prayu.</p>
        </div>

        <div className="logo-grid reveal">
          {clients.map((c) => {
            if (c.logo) {
              return (
                <a key={c.name} className="logo-tile" href={c.url} target="_blank" rel="noopener noreferrer" title={c.name}>
                  <img className={c.invert ? "on-dark" : undefined} src={logoUrl(c.logo)} alt={c.name} loading="lazy" />
                  <span className="dom">{c.domain}</span>
                </a>
              );
            }
            const Icon = Icons[c.icon] || Icons.Building;
            return (
              <div key={c.name} className="logo-tile" title={c.name}>
                <div className="wordmark">
                  <div className="seal"><Icon /></div>
                  <b>{c.name}</b>
                </div>
                <span className="dom">{c.domain}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
