import "../styles/components/Header.scss"
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Logo Kasa" />
            </div>
            <nav>
                <NavLink to="/" className="navLink">Accueil</NavLink>
                <NavLink to="/about" className="navLink">A Propos</NavLink>
            </nav>
        </div>
    )
}

export default Header;