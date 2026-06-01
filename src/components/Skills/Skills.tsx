import { skillGroups } from "../../portfolio";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Skills.css";

interface SkillGroup {
  category: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const ref = useScrollReveal();
  if (!skillGroups || !skillGroups.length) return null;

  return (
    <section ref={ref} className="section skills reveal" id="skills">
      <h2 className="section__title">Skills</h2>

      <div className="skills__groups">
        {skillGroups.map((group: SkillGroup, i: number) => (
          <div key={i} className="skills__group">
            <h3 className="skills__group-title">{group.category}</h3>
            <ul className="skills__list">
              {group.skills.map((skill: string, j: number) => (
                <li key={j} className="skills__list-item btn btn--plain">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
