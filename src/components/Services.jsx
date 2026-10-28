import SectionHead from "./SectionHead";
import { ArrowRight } from "./Icons";
import { DashboardLight } from "./mockups/Mockups";
import webDesignPhoto from "../assets/web-design-photo.png";
import digitalMarketingPhoto from "../assets/digital-marketing-photo.png";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <SectionHead
          eyebrow="Our services"
          title="Everything your business needs to grow."
          text="From websites and custom software to digital marketing, we help your business grow and run efficiently."
        />
        <div className="svc-grid">
          <article className="svc-card reveal">
            <span className="num">01</span>
            <h3>Web Design &amp; Development</h3>
            <p>Modern, fast and SEO-friendly websites that turn visitors into customers.</p>
            <a className="link-arrow" href="#websites">Explore Websites <ArrowRight /></a>
            <div className="visual photo-visual">
              <img src={webDesignPhoto} alt="Website design for a Himalayan hotel shown on a laptop and phone" />
            </div>
          </article>
          <article className="svc-card reveal">
            <span className="num">02</span>
            <h3>Software &amp; ERP</h3>
            <p>Custom software and ERP systems designed around your workflows, not the other way around.</p>
            <a className="link-arrow" href="#software">Explore Software <ArrowRight /></a>
            <div className="visual"><DashboardLight /></div>
          </article>
          <article className="svc-card reveal">
            <span className="num">03</span>
            <h3>Digital Marketing</h3>
            <p>Reach the right people and grow your business with thoughtful digital marketing.</p>
            <a className="link-arrow" href="#contact">Grow Your Audience <ArrowRight /></a>
            <div className="visual photo-visual">
              <img src={digitalMarketingPhoto} alt="Digital brand and website displayed on a laptop and phone" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
