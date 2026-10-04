import logo from '../img/logo.svg';

function Navbar({ cartCount }) {
  return (
    <header>
      <div className="logo">
        <a href="#">
          <img src={logo} alt="Hermanos Jota" />
          <span>Hermanos Jota</span>
        </a>
      </div>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Catálogo</a></li>
          <li><a href="#">Contacto</a></li>
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