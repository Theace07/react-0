import './CartWidget.css';
import { useCart } from '../../context/CartContext.jsx';

function CartWidget() {
  const { cart } = useCart();
  const totalCount = cart.reduce((s, it) => s + (it.quantity || 0), 0);

  return (
    <div className="cart-widget">
      <span className="cart-icon">🛒</span>
      <span className="cart-count">{totalCount}</span>
    </div>
  );
}

export default CartWidget;