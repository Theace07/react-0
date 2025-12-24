import './ItemListContainer.css';

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../../data/products';

function fetchProducts() {
  return new Promise((resolve) => setTimeout(() => resolve(products), 400));
}

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProducts().then((data) => {
      if (categoryId && categoryId !== 'all') {
        setItems(data.filter((it) => it.category === categoryId));
      } else {
        setItems(data);
      }
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <main className="item-list-container">
      {greeting && <h1>{greeting}</h1>}
      {loading && <p>Cargando productos...</p>}
      {!loading && (
        <ul className="product-list">
          {items.map((item) => (
            <li key={item.id} className="product-item">
              <Link to={`/item/${item.id}`}>
                {item.image && <img src={item.image} alt={item.title} style={{ width: 80, height: 80, objectFit: 'cover', marginRight: 8 }} />}
                {item.title} - ${item.price}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default ItemListContainer;
