import { ArrowRight } from "./Icons";
import { contact } from "../data/site";

export default function CallToAction() {
  return (
    <section className="cta" id="contact">
      <div className="wrap">
        <div>
          <span className="eyebrow">Have an idea?</span>
          <h2>Let's build something your business actually needs.</h2>
        </div>
        <p>Whether you need a new website, custom software, or a complete ERP system, let's talk.</p>
        <a className="btn btn-white" href={`mailto:${contact.email}?subject=${encodeURIComponent("Project inquiry")}`}>
          Start a Project <ArrowRight />
        </a>
      </div>
    </section>
  );
}
