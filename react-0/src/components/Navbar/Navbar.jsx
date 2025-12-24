import CartWidget from '../cartWidget/CartWidget.jsx';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <strong className="navbar-logo">Mi Tienda</strong>
        <ul className="nav-menu">
          <li><Link to="/" className="nav-link">Inicio</Link></li>
          <li><Link to="/category/all" className="nav-link">Productos</Link></li>
          <li><Link to="/category/electronics" className="nav-link">Electrónica</Link></li>
          <li><Link to="/category/clothing" className="nav-link">Ropa</Link></li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;