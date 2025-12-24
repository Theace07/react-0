import { useCart } from '../../context/CartContext.jsx';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const { cart, removeItem, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleDecrement = (id, quantity) => {
    updateQuantity(id, quantity - 1);
  };

  const handleIncrement = (id, quantity) => {
    updateQuantity(id, quantity + 1);
  };

  return (
    <main className="cart-container">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío. <Link to="/">Volver a productos</Link></p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <div className="quantity-controls">
                      <button 
                        className="qty-btn" 
                        onClick={() => handleDecrement(item.id, item.quantity)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="qty-value">{item.quantity}</span>
                      <button 
                        className="qty-btn"
                        onClick={() => handleIncrement(item.id, item.quantity)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className="remove-btn" onClick={() => removeItem(item.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <h2>Total: ${total.toFixed(2)}</h2>
            <button className="checkout-btn">Finalizar Compra</button>
            <Link to="/">Continuar Comprando</Link>
          </div>
        </>
      )}
    </main>
  );
}

export default Cart;
