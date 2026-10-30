import * as Icons from "./Icons";
import { erpModules } from "../data/site";
import { DashboardDark } from "./mockups/Mockups";

export default function CustomSoftware() {
  return (
    <section className="section" id="software" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="dark-band reveal">
          <div>
            <span className="eyebrow">Software that fits your business</span>
            <h2>Stop adapting your business to software. <span>Build software around your business.</span></h2>
            <p>From a single internal tool to a complete ERP platform, we design and build software around your workflows.</p>
            <a className="btn btn-accent" href="/custom-software-development-nepal/">Build Your System <Icons.ArrowRight /></a>
          </div>
          <div className="modules-wrap">
            <DashboardDark />
            <div className="modules">
              {erpModules.map((m) => {
                const Icon = Icons[m.icon];
                return <span key={m.label}><Icon />{m.label}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
