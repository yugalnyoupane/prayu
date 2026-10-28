import { ArrowRight } from "./Icons";

/* Eyebrow + heading on the left; either a paragraph or a text link on the right. */
export default function SectionHead({ eyebrow, title, text, link, style }) {
  return (
    <div className="sec-head reveal" style={style}>
      <div>
        <span className="eyebrow mute">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {text && <p>{text}</p>}
      {link && (
        <div className="right">
          <a className="link-arrow" href={link.href}>{link.label} <ArrowRight /></a>
        </div>
      )}
    </div>
  );
}
