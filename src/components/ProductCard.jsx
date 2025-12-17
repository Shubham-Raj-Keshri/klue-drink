function ProductCard({ product }) {
  return (
    <div
      className="
        bg-zinc-900 border border-zinc-800
        rounded-2xl p-6
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-[0_12px_40px_rgba(34,211,238,0.25)]
      "
    >
      {/* IMAGE */}
      <div className="h-56 flex items-center justify-center bg-zinc-800 rounded-xl mb-6 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* DETAILS */}
      <h3 className="text-xl font-semibold text-white">
        {product.name}
      </h3>

      <p className="mt-2 text-cyan-400 font-medium">
        {product.price}
      </p>

      {/* ACTION */}
      <button
        className="
          mt-6 w-full py-3 rounded-xl
          bg-cyan-500 text-black font-medium
          hover:bg-cyan-400 transition
        "
      >
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;
