import "./Header.css"
import shigeo from "../../assets/shigeo.jpeg";

import { Link, Outlet } from "react-router-dom";


function Header() {
    return(
        <>
        <div className="logo">
            <img src={shigeo} alt=""/>
        </div>
        <button className="nav-toggle" aria-label="toggle navigation">
            <span className="stack"></span>
        </button>
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><Link to="/profile" className="nav__link">Profile</Link></li>
                <li className="nav__item"><Link to="/projects" className="nav__link">Projects</Link></li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}


export default Header;