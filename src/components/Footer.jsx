import { Mail, Phone, MapPin, LinkedIn, Facebook, Instagram } from "./Icons";
import { contact, navLinks, socials } from "../data/site";
import prayuLogo from "../assets/prayu-logo.png";

const socialLinks = [
  { key: "linkedin", label: "LinkedIn", Icon: LinkedIn },
  { key: "facebook", label: "Facebook", Icon: Facebook },
  { key: "instagram", label: "Instagram", Icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-row">
          <div>
            <a className="brand" href="#top" aria-label="Prayu Digital home">
              <img src={prayuLogo} alt="Prayu" width="122" height="61" />
            </a>
            <p>Digital systems for modern businesses.</p>
          </div>

          <nav className="foot-links" aria-label="Footer">
            {navLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>

          <ul className="foot-contact">
            <li><Mail /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li>
              <Phone />
              <span>
                {contact.phones.map((p, i) => (
                  <span key={p.tel}>
                    {i > 0 && " · "}
                    <a href={`tel:${p.tel}`}>{p.display}</a>
                  </span>
                ))}
              </span>
            </li>
            <li><MapPin /><span>{contact.location}</span></li>
          </ul>

          <div className="socials">
            {socialLinks.map(({ key, label, Icon }) => {
              const href = socials[key];
              const external = href && href !== "#";
              return (
                <a key={key} href={href} aria-label={label} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div className="legal">
          <span>&copy; {new Date().getFullYear()} Prayu Digital. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
