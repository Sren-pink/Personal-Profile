// src/components/home/Skills.jsx
import "./Skills.css";
import SkillRating from "../SkillRating";
import { skills, STAR_COLORS } from "../../datas/skillsData";

export default function Skills({ variant = "grid" }) {
  const rootClass = `skills-section ${variant === "list" ? "skills--list" : ""}`;
  const gridClass = `skills-grid ${variant === "list" ? "skills-grid--list" : ""}`;

  return (
    <section className={rootClass}>
      <h2 style={{ marginBottom: 12 }}>Skills</h2>

      <div className={gridClass}>
        {skills.map((s) => (
          <SkillRating
            key={s.name}
            name={s.name}
            rating={s.rating}
            size={22}
            empty={STAR_COLORS.empty}
            filled={STAR_COLORS.filled}
          />
        ))}
      </div>
    </section>
  );
}
