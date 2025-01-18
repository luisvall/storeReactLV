import { Link } from "../router/Link";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navBar">
      <div className="containerNav">
        <ul className="mainNav">
          <li>
            <Link to="/">LOGO</Link>
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
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
