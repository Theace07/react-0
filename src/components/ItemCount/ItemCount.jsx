import { useState } from 'react';
import { useCart } from '../../context/CartContext.jsx';

function ItemCount({ stock = 10, initial = 1, item }) {
  const [count, setCount] = useState(initial);
  const { addItem } = useCart();

  function inc() {
    setCount((c) => Math.min(stock, c + 1));
  }

  function dec() {
    setCount((c) => Math.max(1, c - 1));
  }

  function handleAdd() {
    if (!item) return;
    addItem(item, count);
  }

  return (
    <div style={{ marginTop: 12 }}>
      <button onClick={dec} disabled={count <= 1}>-</button>
      <span style={{ margin: '0 8px' }}>{count}</span>
      <button onClick={inc} disabled={count >= stock}>+</button>
      <button style={{ marginLeft: 12 }} onClick={handleAdd}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
