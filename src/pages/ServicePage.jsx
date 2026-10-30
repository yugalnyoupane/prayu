import { ArrowRight } from "../components/Icons";
import Process from "../components/Process";
import { servicePages } from "../data/pages";

/* One template for every SEO landing page in src/data/pages.js. */
export default function ServicePage({ page }) {
  const related = servicePages.filter((p) => p.path !== page.path);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a> <span aria-hidden="true">/</span> <span aria-current="page">{page.navLabel}</span>
          </nav>
          <span className="eyebrow">{page.eyebrow}</span>
          <h1>{page.h1}</h1>
          <p className="lede">{page.lede}</p>
          <div className="hero-actions">
            <a className="btn btn-dark" href="#contact">Talk to us <ArrowRight /></a>
            <a className="btn btn-outline" href="/#clients">See our clients</a>
          </div>
        </div>
      </section>

      {page.sections.map((s) => (
        <section className="section page-section" key={s.h2}>
          <div className="wrap">
            <h2>{s.h2}</h2>
            {s.text && <p className="page-text">{s.text}</p>}
            {s.link && <a className="link-arrow" href={s.link.href}>{s.link.label} <ArrowRight /></a>}
            {s.items && (
              <ul className="page-grid">
                {s.items.map(([t, d]) => (
                  <li key={t}><h3>{t}</h3><p>{d}</p></li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      <Process />

      <section className="section page-section" id="faq">
        <div className="wrap">
          <h2>Frequently asked questions</h2>
          <div className="faq">
            {page.faq.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>Other services</h2>
          <ul className="related">
            {related.map((p) => (
              <li key={p.path}><a className="link-arrow" href={p.path}>{p.navLabel} <ArrowRight /></a></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
