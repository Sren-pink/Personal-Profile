import './AboutMe.css';
import { Link, useLocation } from 'react-router-dom';
import Skills from './Skills';

function Aboutme({ onContactClick }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const homeDescription =
    "A UI/UX designer dedicated to creating intuitive, user-centered experiences. I merge creativity with strategy to develop seamless digital solutions, focusing on making everyday tasks more efficient by balancing aesthetics with functionality.";
  const aboutmeDescription =
    "I'm a junior at Northeastern University majoring in Marketing and Design, with a strong interest in building intuitive, user-focused experiences. Whether it's refining everyday tools or designing from scratch, I love creating projects that blend creativity with purpose and making things not just easier to use, but more enjoyable too.";

  return (
    <div className="aboutme">{/* changed from Aboutme → aboutme to match CSS */}
      <div className="topside">
        <div className="leftside">
        </div>

        <div className="rightside">
          <div className="rtop">
            <h1 className="title">About Me</h1>
            <p className="description">
              I am a UI/UX designer dedicated to create intuitive, user-centered experiences.
              <br />
              I merge creativity with strategy to develop seamless digital solutions, focusing on making everyday tasks more efficient by balancing aesthetics with functionality.
            </p>
          </div>

          <div className="rbot">
            <h1 className="title">Education</h1>
            <div className="education">
              <div className="education-row">
                <span className="school">Northeastern University</span>
                <span className="years">2023–2027</span>
              </div>
              <p className="degree">Business Administration and Design</p>
            </div>
          </div>
        </div>
      </div>

      <div className="botside">
        <div className="contacts"></div>
        <div className="skillsection">
          <Skills variant="list" />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
