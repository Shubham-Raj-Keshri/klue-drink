import { useState } from "react";
import ProductsHeader from "./ProductsHeader";
import ProductsGrid from "./ProductsGrid";

function Products() {
  const [filter, setFilter] = useState("all");

  const filters = ["all", "mineral", "mango", "pineapple"];

  return (
    <section
      id="products"
      className="
        relative
        bg-zinc-950
        py-16
        z-10
      "
    >
      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto px-6">
        <ProductsHeader />

        {/* FILTERS */}
        <div className="mt-6 flex justify-center gap-3 flex-wrap">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium
                transition-all duration-300
                ${
                  filter === item
                    ? "bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                    : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                }
              `}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* GRID (ONLY 3 PRODUCTS) */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <ProductsGrid filter={filter} limit={4} />
      </div>
    </section>
  );
}

export default Products;
