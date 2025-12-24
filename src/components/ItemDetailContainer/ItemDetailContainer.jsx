import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import ItemCount from '../ItemCount/ItemCount.jsx';
import products from '../../data/products';

function fetchItemById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const found = products.find((it) => it.id === id);
      resolve(found || null);
    }, 400);
  });
}

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchItemById(id).then((data) => {
      setItem(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p style={{ padding: 16 }}>Cargando producto...</p>;
  if (!item) return <p style={{ padding: 16 }}>Producto no encontrado.</p>;

  return (
    <main style={{ padding: 16 }}>
      <ItemDetail item={item} />
      <ItemCount stock={10} initial={1} item={item} />
    </main>
  );
}

export default ItemDetailContainer;
