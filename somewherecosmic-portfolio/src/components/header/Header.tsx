import "./Header.css"

import { Link, Outlet } from "react-router-dom";


function Header() {
    return(
        <>
        <div className="flex">
            <h1 className="title">SomewhereCosmic</h1>
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><Link to="/profile" className="nav__link">Profile</Link></li>
                <li className="nav__item"><Link to="/projects" className="nav__link">Projects</Link></li>
            </ul>
        </nav>
        </div>
        <Outlet/>
        </>
    )
}


export default Header;