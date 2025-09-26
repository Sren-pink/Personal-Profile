import { useMemo, useState } from "react";
import { projects } from "../../datas/ProjectData";
import FilterBar from "./FilterBar";
import ProjectCard from "./ProjectCard";
import "./portfolio.css";

export default function PortfolioSection({ title = "Portfolio", initialFilter = "all" }) {
  const [filter, setFilter] = useState(initialFilter);

  const list = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter(p => p.areas?.includes(filter));
  }, [filter]);

  return (
    <section className="pf-wrap">
      <h2 className="pf-h2">{title}</h2>
      <FilterBar value={filter} onChange={setFilter} />
      <div className="pf-grid">
        {list.map((p, i) => (
          <ProjectCard key={p.id} item={p} index={i} />
        ))}
      </div>
    </section>
  );
}
