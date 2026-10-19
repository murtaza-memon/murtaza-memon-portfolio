import { hero, site } from "../data/site.js";
import ProfilePhoto from "../components/ProfilePhoto.jsx";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-content reveal">
          <span className="hero-greeting">{hero.greeting}</span>
          <h1 className="hero-title">
            {hero.titleLine1}
            <br />
            {hero.titleLine2}
          </h1>
          <p className="hero-desc">{hero.description}</p>
          <div className="hero-actions">
            <a href={hero.primary.href} className="btn btn-primary">
              {hero.primary.label}
            </a>
            <a href={hero.secondary.href} className="btn btn-ghost">
              {hero.secondary.label}
            </a>
          </div>
        </div>
        <div className="hero-visual reveal">
          <div className="hero-img-wrap">
            <ProfilePhoto
              src={site.heroPhoto}
              alt={`${site.name} wearing a blue blazer`}
              eager
            />
          </div>
          <span className="sr-only">{site.role}</span>
        </div>
      </div>
    </section>
  );
}
