import { education } from "../data/site.js";
import SectionHead from "../components/SectionHead.jsx";

export default function Education() {
  return (
    <section id="education" className="certs section">
      <div className="container">
        <SectionHead tag="Education" title="Education" />
        <div className="certs-grid education-grid">
          <article className="cert-card reveal">
            <i className="fas fa-graduation-cap" aria-hidden="true" />
            <h3>{education.degree}</h3>
            <span className="cert-org">{education.institution}</span>
            <span className="cert-date">{education.location}</span>
            {education.date && <span className="cert-date">{education.date}</span>}
            <p className="cert-note">{education.note}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
