import { Link } from 'react-router-dom';
import './Nav.css'

function Nav(){
    
    return(
        <nav>
            <div className="nav_div">
                <div className="nav_part">
                    <Link to={'/home'}>
                    <span className="material-symbols-outlined">home</span>
                    </Link>
                </div>
                <div className="nav_part">
                    <Link to={'/list'}>
                    <span className="material-symbols-outlined">list</span>
                    </Link>
                </div>
                <div className="nav_part">
                    <Link to={'/map'}>
                    <span className="material-symbols-outlined">map</span>
                    </Link>
                </div>
                <div className="nav_part">
                    <Link to={'/mypage'}>
                    <span className="material-symbols-outlined">person</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;