import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const location = useLocation();
  const activeMenu = location.pathname;

  return (
    <nav>
      <div className="nav_div">
        <div className={`nav_part ${activeMenu === '/home' ? 'active' : ''}`}>
          <Link to="/home">
            <span className="material-symbols-outlined">home</span>
          </Link>
        </div>
        <div className={`nav_part ${activeMenu === '/list' ? 'active' : ''}`}>
          <Link to="/list">
            <span className="material-symbols-outlined">list</span>
          </Link>
        </div>
        <div className={`nav_part ${activeMenu === '/map' ? 'active' : ''}`}>
          <Link to="/map">
            <span className="material-symbols-outlined">map</span>
          </Link>
        </div>
        <div className={`nav_part ${activeMenu === '/mypage' ? 'active' : ''}`}>
          <Link to="/mypage">
            <span className="material-symbols-outlined">person</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
