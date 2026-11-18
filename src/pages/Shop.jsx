import perfumes from "../data/perfumes";
import ProductCard from "../components/ProductCard";
import "./Shop.css";

export default function Shop() {
  return (
    <div className="products-wrapper">
      <h1 className="product-title">Discover Our Collection</h1>

      <div className="products-grid">
        {perfumes.map((perfume) => (
          <ProductCard key={perfume.id} item={perfume} />
        ))}
      </div>
    </div>
  );
}
