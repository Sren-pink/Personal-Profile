import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
    const location = useLocation();
    const path = location.pathname;
    const isPortfolioPage = path === '/portfolio';
    const isAboutPage = path === '/aboutme';

    return (
        <div className="nav">
            <div className="navicon">
                <Link to='/' id='homeicon'>Sirong Ren</Link>
            </div>
            <div className="navbar">
                <Link to="/portfolio" id='Port' className={`navbutton ${isPortfolioPage ? 'active' : ''}`} >Portfolio</Link>
                <Link to='/aboutme' id='About' className={`navbutton ${isAboutPage ? 'active' : ''}`}>About Me</Link>
            </div>
        </div>
    )
}