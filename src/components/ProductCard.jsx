import "./ProductCard.css";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductCard({ item }) {
  return (
    <div className="product-card">
      <img src={item.image} alt={item.name} />

      <h3>{item.name}</h3>
      <p className="price">₹{item.price}</p>
      <p>{item.description}</p>
      

      <div className="btn">
        <button className="add-btn">Add to Cart</button>

        <a
          href={`https://wa.me/918xxxxxxx?text=Hi%2C%20I'm%20interested%20in%20${encodeURIComponent(
            item.name
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <FaWhatsapp size={18} />
          <span className="wp-text">Contact</span>
        </a>
      </div>
    </div>
  );
}
