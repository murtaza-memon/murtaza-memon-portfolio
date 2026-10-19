import { about, site } from "../data/site.js";
import SectionHead from "../components/SectionHead.jsx";
import ProfilePhoto from "../components/ProfilePhoto.jsx";

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionHead tag="About" title="About Me" />
        <div className="about-grid">
          <div className="about-photo reveal">
            <ProfilePhoto
              src={site.aboutPhoto}
              alt={`${site.name} in a black shirt`}
            />
          </div>
          <div className="about-text reveal">
            {about.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
          <div className="about-cards">
            {about.cards.map((card) => (
              <div className="info-card reveal" key={card.title}>
                <div className="info-ico">
                  <i className={card.icon} aria-hidden="true" />
                </div>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
