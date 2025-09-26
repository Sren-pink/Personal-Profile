import { Link } from 'react-router-dom';
import { projects } from '../../../datas/ProjectData';
import './2024_projects.css'
import '../projectGrid.css'

export function PersonalProject2024() {
  const projects2024 = Object.values(projects).filter((p) => p.year === 2024);

  return (
    <>
      <h1 className="personal_section_r">2024</h1>
      <div className="project_grid left">
        {projects2024.map((project) => (
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

export default PersonalProject2024;