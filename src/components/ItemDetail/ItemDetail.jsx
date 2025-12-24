import './ItemDetail.css';

function ItemDetail({ item }) {
  return (
    <section className="item-detail">
      {item.image && <img src={item.image} alt={item.title} style={{ maxWidth: 200, display: 'block', marginBottom: 8 }} />}
      <h2>{item.title}</h2>
      <p><strong>Precio:</strong> ${item.price}</p>
      <p>{item.description}</p>
    </section>
  );
}

export default ItemDetail;
