import './Nav.css'

function Nav(){
    
    return(
        <nav>
            <div className="nav_div">
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
                <div className="home">
                    <span class="material-symbols-outlined">home</span>
                </div>
                <div className="list">
                    <span class="material-symbols-outlined">list</span>
                </div>
                <div className="map">
                    <span class="material-symbols-outlined">map</span>
                </div>
                <div className="mypage">
                    <span class="material-symbols-outlined">person</span>
                </div>
            </div>
        </nav>
    )
}

export default Nav;