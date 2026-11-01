import logo from '../img/logo.svg';

function Navbar({ cartCount, onNavigate }) {
  const ir = (vista) => (event) => {
    event.preventDefault();
    onNavigate?.(vista);
  };

  return (
    <header>
      <div className="logo">
        <a href="#" onClick={ir('listado')}>
          <img src={logo} alt="Hermanos Jota" />
          <span>Hermanos Jota</span>
        </a>
      </div>
      <nav>
        <ul>
          <li><a href="#" onClick={ir('listado')}>Inicio</a></li>
          <li><a href="#" onClick={ir('listado')}>Catálogo</a></li>
          <li><a href="#" onClick={ir('contacto')}>Contacto</a></li>
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
