import { Link, NavLink } from 'react-router-dom';
import logo from '../img/logo.svg';

function Navbar({ cartCount }) {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Hermanos Jota" />
          <span>Hermanos Jota</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/" end>Inicio</NavLink></li>
          <li><NavLink to="/productos">Catálogo</NavLink></li>
          <li><NavLink to="/contacto">Contacto</NavLink></li>
        </ul>
      </nav>
      <div className="cart-container">
        <a href="#" id="cart-icon">🛒</a>
        <span id="cart-count">{cartCount}</span>
      </div>
    </header>
  );
}

export default Navbar;