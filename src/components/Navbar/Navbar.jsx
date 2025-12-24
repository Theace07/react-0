import CartWidget from '../cartWidget/CartWidget.jsx';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <strong className="navbar-logo">Mi Tienda</strong>
        </Link>
        <ul className="nav-menu">
          <li><Link to="/" className="nav-link">Inicio</Link></li>
          <li><Link to="/category/all" className="nav-link">Productos</Link></li>
          <li><Link to="/category/electronics" className="nav-link">Electrónica</Link></li>
          <li><Link to="/category/clothing" className="nav-link">Ropa</Link></li>
        </ul>
        <Link to="/cart" style={{ textDecoration: 'none' }}>
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
