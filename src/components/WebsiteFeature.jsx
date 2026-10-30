import { ArrowRight } from "./Icons";
import digitalFrontDoor from "../assets/digital-front-door.webp";

export default function WebsiteFeature() {
  return (
    <section className="section" id="websites">
      <div className="wrap">
        <div className="feature reveal">
          <div className="copy">
            <span className="eyebrow mute">Your digital front door</span>
            <h2>A website should do more than look good.</h2>
            <p>It should explain what you do, build trust, and make it easy for the right customer to take the next step.</p>
            <a className="link-arrow" href="/web-design-nepal/">Explore Web Design <ArrowRight /></a>
          </div>
          <img
            className="feature-image"
            src={digitalFrontDoor}
            width="1152"
            height="768"
            loading="lazy"
            alt="Responsive Himalayan View hotel website shown on desktop and mobile screens"
          />
        </div>
      </div>
    </section>
  );
}
