import { useEffect, useState } from "react";
import { navLinks } from "../data/site";
import { ArrowRight } from "./Icons";
import prayuLogo from "../assets/prayu-logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}${open ? " nav-open" : ""}`}>
      <div className="wrap">
        <a className="brand" href="#top" aria-label="Prayu Digital home" onClick={close}>
          <img src={prayuLogo} alt="Prayu" width="122" height="61" />
        </a>

        <nav className="main-nav" id="main-nav" aria-label="Main">
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href} onClick={close}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="header-cta">
          <a className="btn btn-dark" href="#contact">Let's Talk <ArrowRight /></a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="main-nav"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
