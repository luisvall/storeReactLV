import { Link } from "../router/Link";
import { LogoIcon, CartIcon } from "./Icons"
import "./NavBar.css";
import { LogContext } from "./LogContext";
import { useContext } from "react";

export default function NavBar() {
  const {isLoged} = useContext(LogContext)
  return (
    <nav className="navBar">
      <div className="containerNav">
        <ul className="mainNav">
          <li>
            <Link to="/"><LogoIcon className='icon'/>REBIS</Link>
          </li>
          <li>
            <Link to="/store">Tienda</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
        <ul className="seconNav">
          <li>
            <Link to="/login">{ isLoged ? 'Cerar sesión':'Iniciar sesión'}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
