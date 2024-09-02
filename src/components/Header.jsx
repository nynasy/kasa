import "../styles/Header.scss"
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

function Header() {
    return (
        <div className="header">
             <div><img src={logo} alt="Logo Kasa" /></div>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A propos</NavLink>
            </nav>
        </div>
    )
}

export default Header;