import { journey } from "../data/site.js";
import SectionHead from "../components/SectionHead.jsx";

export default function Journey() {
  return (
    <section id="journey" className="experience section">
      <div className="container">
        <SectionHead
          tag="Journey"
          title="Development Journey"
          desc="An honest look at how I build my skills — freelance work, personal projects, and continuous learning."
        />
        <div className="timeline">
          {journey.map((item) => (
            <div className="timeline-item reveal" key={item.title}>
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card">
                <div className="timeline-top">
                  <h3>{item.title}</h3>
                  <span className="timeline-date">{item.period}</span>
                </div>
                <span className="timeline-org">{item.org}</span>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
