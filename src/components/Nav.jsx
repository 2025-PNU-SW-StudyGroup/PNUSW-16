import './Nav.css'

function Nav(){
    
    return(
        <nav>
            <div className="nav_div">
                <div className="nav_part">
                    <span className="material-symbols-outlined">home</span>
                </div>
                <div className="nav_part">
                    <span className="material-symbols-outlined">list</span>
                </div>
                <div className="nav_part">
                    <span className="material-symbols-outlined">map</span>
                </div>
                <div className="nav_part">
                    <span className="material-symbols-outlined">person</span>
                </div>
            </div>
        </nav>
    )
}

export default Nav;