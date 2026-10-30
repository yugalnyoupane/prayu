import { ArrowRight } from "./Icons";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media" role="img" aria-label="Pagoda temple in front of the Himalaya at dawn">
        <span className="caption">Built in Nepal<br />for what's next.</span>
      </div>
      <div className="wrap">
        <div className="hero-copy">
          <span className="eyebrow">Web design · Software · ERP · Kathmandu, Nepal</span>
          <h1>We build the <span className="accent">digital systems</span> for modern businesses.</h1>
          <p className="lede">
            Prayu Digital is a web design and software company in Kathmandu. From professional websites to
            custom software and ERP systems, we help businesses in Nepal and beyond work smarter, grow faster, and create lasting value.
          </p>
          <div className="hero-actions">
            <a className="btn btn-dark" href="#contact">Start a Project <ArrowRight /></a>
            <a className="btn btn-outline" href="#clients">Trusted By</a>
          </div>
        </div>
      </div>
    </section>
  );
}
