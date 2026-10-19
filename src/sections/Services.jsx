import { services } from "../data/site.js";
import SectionHead from "../components/SectionHead.jsx";

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <SectionHead
          tag="Services"
          title="My Services"
          desc="A focused set of development services — from custom web apps to WordPress builds and ongoing site maintenance."
        />
        <div className="services-grid">
          {services.map((service) => (
            <article className="featured-card reveal" key={service.title}>
              <div className="featured-icon">
                <i className={service.icon} aria-hidden="true" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
