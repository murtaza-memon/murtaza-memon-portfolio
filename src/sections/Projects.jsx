import { projectChips } from "../data/site.js";
import SectionHead from "../components/SectionHead.jsx";

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <SectionHead
          tag="Projects"
          title="Projects Coming Soon"
          desc="I'm currently developing practical web projects and preparing my portfolio. New work will be showcased here soon."
        />
        <div className="projects-grid coming-grid">
          <div className="project-card coming-card reveal">
            <div className="project-thumb">
              <i className="fas fa-rocket" aria-hidden="true" />
            </div>
            <div className="project-info">
              <span className="project-tag">Coming Soon</span>
              <div className="project-chips">
                {projectChips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
