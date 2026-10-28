import SectionHead from "./SectionHead";
import { featuredWork } from "../data/site";
import { MiniSite, DashboardLight, Excavator } from "./mockups/Mockups";
import ramexLogo from "../assets/clients/ramexexcavating.com.webp";
import peakLogo from "../assets/clients/thepeakcabin.com.webp";

/* Preview shown at the top of each work card, keyed by project id. */
const previews = {
  ramex: (
    <MiniSite variant="site-excavation" logo={ramexLogo} title="Ramex Excavating" text="Operations Management System" cta="Get a Quote">
      <Excavator />
    </MiniSite>
  ),
  "peak-cabin": (
    <MiniSite variant="dusk" logo={peakLogo} title="A luxury mountain escape" text="Snoqualmie Pass, Washington" cta="Book Your Stay" />
  ),
  erp: <DashboardLight />,
};

export default function FeaturedWork() {
  return (
    <section className="section" id="work" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <SectionHead eyebrow="Featured work" title="Things we've built." link={{ href: "#clients", label: "View all work" }} />
        <div className="work-grid">
          {featuredWork.map((w) => {
            const external = w.url.startsWith("http");
            return (
              <a
                key={w.id}
                className="work-card reveal"
                href={w.url}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <div className="work-shot" aria-hidden="true">{previews[w.id]}</div>
                <div className="work-body">
                  <span className="eyebrow">{w.category}</span>
                  <h3>{w.title}</h3>
                  <span className="sub">{w.subtitle}</span>
                  <p>{w.description}</p>
                  <div className="tags">{w.tags.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
