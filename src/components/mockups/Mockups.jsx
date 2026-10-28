/* HTML/CSS product mockups used as visuals in cards. Decorative only. */
import { useId } from "react";

export function MiniSite({ brand, logo, title, text, cta, variant, compact = false, children }) {
  return (
    <div className={`mini-site${variant ? ` ${variant}` : ""}`}>
      <div className="mini-nav">
        {logo ? <img src={logo} alt="" /> : <b>{brand}</b>}
        {!compact && (<><i /><i /><i /></>)}
      </div>
      <div className="mini-hero">
        <strong>{title}</strong>
        {text && <em>{text}</em>}
        {cta && <span>{cta}</span>}
      </div>
      {children}
    </div>
  );
}

export function Devices() {
  return (
    <div className="devices" aria-hidden="true">
      <div className="laptop">
        <div className="screen">
          <MiniSite brand="SUMMIT" title="Luxury stays in the Himalayas" text="Book rooms, tours and experiences in one place." cta="Book now">
            <div className="mini-strip"><i /><i /><i /></div>
          </MiniSite>
        </div>
        <div className="base" />
      </div>
      <div className="phone">
        <MiniSite brand="SUMMIT" title="Luxury stays" cta="Book" compact />
      </div>
    </div>
  );
}

export function DashboardLight() {
  const gid = useId().replace(/:/g, "");
  return (
    <div className="dash" aria-hidden="true">
      <div className="dash-side">
        <b>PRAYU</b>
        {["Dashboard", "Projects", "Finance", "Inventory", "HR & Payroll", "CRM", "Reports", "Settings"].map((item, i) => (
          <span key={item} className={i === 0 ? "on" : undefined}>{item}</span>
        ))}
      </div>
      <div className="dash-main">
        <div className="kpis">
          <div className="kpi"><small>Revenue</small><b>$482K</b><em>▲ 12%</em></div>
          <div className="kpi"><small>Projects</small><b>24</b><em>▲ 3 new</em></div>
          <div className="kpi"><small>Employees</small><b>86</b><em>▲ 7%</em></div>
        </div>
        <div className="panel">
          <small>Monthly billing</small>
          <svg viewBox="0 0 300 70" preserveAspectRatio="none">
            <defs>
              <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#4b3fd8" stopOpacity=".22" />
                <stop offset="1" stopColor="#4b3fd8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 24H300M0 47H300" stroke="#eceae4" />
            <path d="M0 56 L43 46 L86 52 L129 32 L172 38 L215 20 L258 24 L300 8 L300 70 L0 70Z" fill={`url(#${gid})`} />
            <path d="M0 56 L43 46 L86 52 L129 32 L172 38 L215 20 L258 24 L300 8" fill="none" stroke="#4b3fd8" strokeWidth="2" />
          </svg>
        </div>
        <div className="panel activity">
          <small>Recent activity</small>
          <div><i style={{ background: "#17a06b" }} />Invoice #2083 paid<span>2h</span></div>
          <div><i style={{ background: "#4b3fd8" }} />Project updated, Phase 2<span>4h</span></div>
          <div><i style={{ background: "#e2a447" }} />Stock received, 50 units<span>6h</span></div>
        </div>
      </div>
    </div>
  );
}

const BARS = [
  { h: 62 }, { h: 40, dim: true }, { h: 78 }, { h: 92 }, { h: 50, dim: true }, { h: 70 }, { h: 44 }, { h: 86 },
];

const UPCOMING = [
  { title: "Site inspection", when: "Mon, 10:00", bg: "rgba(122,111,240,.25)", fg: "#b7b0ff" },
  { title: "Equipment service", when: "Wed, 14:00", bg: "rgba(226,164,71,.2)", fg: "#e2a447" },
  { title: "Team meeting", when: "Fri, 09:30", bg: "rgba(224,72,90,.2)", fg: "#ff8a98" },
];

export function DashboardDark() {
  return (
    <div className="dash dark" aria-hidden="true">
      <div className="dash-side">
        <b>PRAYU</b>
        {["Dashboard", "Projects", "Finance", "Inventory", "HR & Payroll", "CRM", "Equipment", "Reports", "Settings"].map((item, i) => (
          <span key={item} className={i === 0 ? "on" : undefined}>{item}</span>
        ))}
      </div>
      <div className="dash-main">
        <div className="kpis">
          <div className="kpi"><small>Total projects</small><b>12</b><em>▲ 2 new</em></div>
          <div className="kpi"><small>Active equipment</small><b>28</b><em>▲ 3</em></div>
          <div className="kpi"><small>Pending orders</small><b>5</b><em className="down">▼ 2</em></div>
        </div>
        <div className="split">
          <div className="panel">
            <small>Project progress</small>
            <div className="legend">
              <span><i style={{ background: "#7a6ff0" }} />On track</span>
              <span><i style={{ background: "rgba(255,255,255,.25)" }} />Planned</span>
            </div>
            <div className="bars">
              {BARS.map((b, i) => <i key={i} className={b.dim ? "dim" : undefined} style={{ height: `${b.h}%` }} />)}
            </div>
          </div>
          <div className="panel upcoming">
            <small>Upcoming</small>
            {UPCOMING.map((u) => (
              <div key={u.title}>
                <i style={{ background: u.bg, color: u.fg }}>●</i>
                <span>{u.title}<small>{u.when}</small></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Excavator() {
  return (
    <svg className="excavator" viewBox="0 0 200 120" aria-hidden="true">
      <g fill="#f2b632" stroke="#2a1d14" strokeWidth="2">
        <rect x="70" y="52" width="70" height="34" rx="4" />
        <rect x="112" y="34" width="30" height="24" rx="3" fill="#ffd36a" />
        <path d="M70 60 L30 22 L8 40 L18 50 L34 38 L64 70Z" />
        <path d="M8 40 L0 62 L22 62 L18 50Z" fill="#c98f1c" />
      </g>
      <rect x="60" y="86" width="96" height="20" rx="10" fill="#2a1d14" />
      <g fill="#5a4a3c">
        <circle cx="72" cy="96" r="6" /><circle cx="96" cy="96" r="6" /><circle cx="120" cy="96" r="6" /><circle cx="144" cy="96" r="6" />
      </g>
      <rect x="118" y="38" width="18" height="12" fill="#bfe3f2" opacity=".8" />
    </svg>
  );
}

export function BrowserStack() {
  return (
    <div className="stack" aria-hidden="true">
      <div className="browser b1">
        <div className="bar"><i /><i /><i /><span>yourbusiness.com</span></div>
        <div className="page">
          <MiniSite brand="BUILDCO" title="Building better spaces" text="Residential and commercial construction you can count on." cta="Free estimate">
            <div className="mini-strip"><i /><i /><i /></div>
          </MiniSite>
        </div>
      </div>
      <div className="browser b2">
        <div className="bar"><i /><i /><i /><span>yourbusiness.com/services</span></div>
        <div className="page">
          <MiniSite brand="BUILDCO" title="Quality construction for a stronger tomorrow" cta="Learn more" />
        </div>
      </div>
    </div>
  );
}
