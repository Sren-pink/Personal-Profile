import { Link } from 'react-router-dom';
import { projects } from '../../../datas/ProjectData';
import './2025_projects.css'
import '../projectGrid.css'

export function PersonalProject2025() {
  const projects2025 = Object.values(projects).filter((p) => p.year === 2025);
  
  return (
    <>
      <h1 className="personal_section_l">2025</h1>
      <div className="project_grid left">
        {projects2025.map((project) => (
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

export default PersonalProject2025;