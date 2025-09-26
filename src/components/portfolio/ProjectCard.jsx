import { Link } from "react-router-dom";
import { AREA_LABELS } from "../../datas/ProjectData";

export default function ProjectCard({ item, index }) {
  // even → pink, odd → blue
  const accent = (index % 2 === 0) ? "var(--main-pink)" : "var(--main-blue)";

  return (
    // set ONLY a CSS variable, not borderColor
    <article className="pf-card" style={{ "--accent": accent }}>
      <Link to={`/projects/${item.id}`} className="pf-card-link">
        <div className="pf-cover">
          <img src={item.cover} alt={`${item.title} cover`} loading="lazy" />
        </div>

        <div className="pf-meta">
          <div className="pf-title">{item.title}</div>

          <div className="pf-sub">
            <span className="pf-year">{item.year}</span>
            <span className="pf-sep">•</span>
            <span className="pf-category">{item.category}</span>
          </div>
          <div className="pf-tags">
            {item.areas?.slice(0, 2).map(a => (
              <span className="pf-badge" key={a}>{AREA_LABELS[a] ?? a}</span>
            ))}
          </div>
          <p className="pf-desc">{item.description}</p>
        </div>
      </Link>
    </article>
  );
}
