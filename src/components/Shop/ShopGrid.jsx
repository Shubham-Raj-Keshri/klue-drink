import shopProducts from "../../data/shopProducts";
import ShopCard from "./ShopCard";

function ShopGrid({ onPay }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {shopProducts.map((product) => (
        <ShopCard
          key={product.id}
          product={product}
          onPay={onPay}
        />
      ))}
    </div>
  );
}

export default ShopGrid;
