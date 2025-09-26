import { Link } from 'react-router-dom';
import { projects } from '../../../datas/ProjectData';
import './2023_projects.css';
import '../projectGrid.css';

export function PersonalProject2023() {
  const projects2023 = Object.values(projects).filter((p) => p.year === 2023);

  return (
    <>
      <h1 className="personal_section_l">2023</h1>
      <div className="project_grid left">
        {projects2023.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id}>
            <div className="project_card">
              <img src={project.images[0]} alt={project.title} className="image" />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default PersonalProject2023;
