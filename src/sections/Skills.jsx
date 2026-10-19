import { skillGroups } from "../data/site.js";
import SectionHead from "../components/SectionHead.jsx";

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <SectionHead
          tag="Skills"
          title="Technologies I Work With"
          desc="My web development skills and technologies have been developed through learning and practical work at ITech Larkana Academy."
        />
        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div className="skills-group reveal" key={group.name}>
              <h3 className="skills-sub">
                <i className={group.icon} aria-hidden="true" /> {group.name}
              </h3>
              <div className="skills-grid">
                {group.items.map((skill) => (
                  <div className="skill" key={skill.name}>
                    <i className={skill.icon} aria-hidden="true" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
