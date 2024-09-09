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
                <NavLink exact to="/" className="navLink">Accueil</NavLink>
                <NavLink to="/about" className="navLink">A propos</NavLink>
            </nav>
        </div>
    )
}

export default Header;