import products from "../../data/products";
import ProductCard from "../Shop/ProductCard";

function ProductsGrid({ filter = "all", limit }) {
  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((item) => item.category === filter);

  const visibleProducts = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {visibleProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsGrid;
