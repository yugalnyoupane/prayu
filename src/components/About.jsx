import { MapPin } from "./Icons";
import { contact } from "../data/site";

export default function About() {
  return (
    <section id="about">
      <div className="about about-full reveal">
        <div className="about-media" role="img" aria-label="Pagoda temple and Himalayan valley at dusk" />
        <div className="about-copy">
          <span className="eyebrow">About Prayu</span>
          <h2>We are Prayu.</h2>
          <p>
            A web design and software company based in Kathmandu, Nepal, building digital experiences and business systems for companies in
            Nepal and beyond. Founded by Yugal Nyoupane and Prabal Koirala.
          </p>
          <div className="about-tags"><span>Software</span><span>ERP</span><span>Web Design</span></div>
          <p className="about-loc"><MapPin />{contact.location}</p>
        </div>
      </div>
    </section>
  );
}
