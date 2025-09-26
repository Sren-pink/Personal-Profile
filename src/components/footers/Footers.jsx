import './Footers.css';
import LinkedinIcon from '../../assets/linkedin.svg';
import EmailIcon from '../../assets/email.svg';
import InstaIcon from '../../assets/instagram.svg';

export function Footers({ footerRef }) {

  return (
    <div className="footer" id='footer' ref={footerRef}>
      <div className="baseicons">
        <a href="https://www.linkedin.com/in/sirong-ren-112738296/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedinIcon} alt="LinkedIn" className="icons" />
        </a>
        <a href="https://www.instagram.com/xo_reny_xo/?next=%2F" target="_blank" rel="noopener noreferrer">
          <img src={InstaIcon} alt="Instagram" className="icons" />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sren.pink@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={EmailIcon} alt="Email" className="icons" />
        </a>
      </div>
    </div>
  );
}
export default Footers;