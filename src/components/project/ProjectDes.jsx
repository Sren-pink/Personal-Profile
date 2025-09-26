import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { projects, AREA_LABELS } from "../../datas/ProjectData";
import "./projectdes.css";

export default function ProjectDes() {
  const { id } = useParams();

  const list = useMemo(
    () => (Array.isArray(projects) ? projects : Object.values(projects || {})),
    []
  );

  const { project, index } = useMemo(() => {
    let idx = list.findIndex((p) => p?.id === id);
    if (idx === -1 && id) {
      const lower = id.toLowerCase();
      idx = list.findIndex((p) => (p?.id || "").toLowerCase() === lower);
    }
    return { project: list[idx], index: idx };
  }, [id, list]);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!project) {
    return (
      <div className="pd-wrap">
        <h1 className="pd-title">Project not found</h1>
        <p>URL id: <code>{id}</code></p>
        <p>Known ids: {list.map((p) => p.id).join(", ")}</p>
        <Link to="/portfolio" className="pd-back">← Back to Portfolio</Link>
      </div>
    );
  }

  const accent = index % 2 === 0 ? "var(--main-pink)" : "var(--main-blue)";
  const accentLight = index % 2 === 0 ? "var(--default-pink)" : "var(--default-blue)";

  const areaText = Array.isArray(project.areas)
    ? project.areas.map((a) => AREA_LABELS[a] ?? a).join(" + ")
    : (project.area ?? "");

  const images =
    (Array.isArray(project.gallery) && project.gallery) ||
    (Array.isArray(project.artGallery) && project.artGallery) ||
    [];

  // 🔗 Live URL: prefer project.live if present; else hardcode Pet Care link
  const liveURL = project.live ?? (project.id === "pet-care"
    ? "https://sren-pink.github.io/pet-care.github.io/"
    : null);

  return (
    <article className="pd-wrap" style={{ "--accent": accent }}>
      <div className="top">
        <div className="topdes-left">
          <div className="title-des">
            <h1 className="pd-title" style={{ color: accent }}>{project.title}</h1>
            {project.top_des && (
              <p className="pd-description" style={{ color: accentLight }}>
                {project.top_des}
              </p>
            )}

            {/* 🔗 Live site button */}
            {liveURL && (
              <a
                className="pd-live"
                href={liveURL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ "--accent": accent }}
              >
                View Live Site ↗
              </a>
            )}
          </div>

          <div className="groups">
            <div className="groupspt1">
              <h3 className="group-title" style={{ color: accentLight }}>Role</h3>
              <p className="groupdes" style={{ color: accent }}>{project.role}</p>
            </div>

            <div className="groupspt">
              <h3 className="group-title" style={{ color: accentLight }}>Category</h3>
              <p className="groupdes" style={{ color: accent }}>{project.category || project.kind}</p>
            </div>

            <div className="groupspt">
              <h3 className="group-title" style={{ color: accentLight }}>Area</h3>
              <p className="groupdes" style={{ color: accent }}>{areaText}</p>
            </div>

            {project.platform && (
              <div className="groupspt">
                <h3 className="group-title" style={{ color: accentLight }}>Platform</h3>
                <p className="groupdes" style={{ color: accent }}>{String(project.platform)}</p>
              </div>
            )}
          </div>
        </div>

        {/* TOP RIGHT — cover image pinned to bottom */}
        <div className="topdes-right">
          {project.cover && (
            <div className="pd-cover pd-cover--top">
              <img src={project.cover} alt={`${project.title} cover`} />
            </div>
          )}
        </div>
      </div>

      <section className="pd-body">
        <h1 className="projdes-title" style={{ color: accent}}>Project Description</h1>
        {project.projectdes && (
          <p className="pd-desc" style={{ color: accentLight }}>
            {project.projectdes}
          </p>
        )}

        <h3 className="things" style={{ color: accent}}>Things Incorporated</h3>
        {Array.isArray(project.thingsincorporated) && project.thingsincorporated.length > 0 && (
          <ul className="pd-list" style={{ color: accentLight }}>
            {project.thingsincorporated.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}

        {(project.slideEmbed1 || project.slideEmbed2) && (
          <div className="pd-embeds">
            {project.slideEmbed1 && (
              <iframe
                className="pd-embed"
                src={project.slideEmbed1}
                title={project.slideEmbed1_title || "Embed 1"}
                allowFullScreen
              />
            )}
            {project.slideEmbed2 && (
              <iframe
                className="pd-embed"
                src={project.slideEmbed2}
                title={project.slideEmbed2_title || "Embed 2"}
                allowFullScreen
              />
            )}
          </div>
        )}
      </section>

      <footer className="pd-footer">
        <Link to="/portfolio" className="pd-back">← Back to Portfolio</Link>
      </footer>
    </article>
  );
}
