function ProductCard({ product }) {
  return (
    <div
      className="
        group
        relative
        bg-zinc-900/80
        rounded-2xl
        p-6
        border border-zinc-800
        transition-all duration-300
        hover:border-cyan-400/40
        hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
      "
    >
      {/* IMAGE */}
      <div
        className="
          bg-zinc-800/60
          rounded-xl
          h-56
          flex items-center justify-center
          mb-5
          overflow-hidden
        "
      >
        <img
          src={product.image}
          alt={product.name}
          className="
            max-h-44
            object-contain
            transition-transform duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/* TITLE */}
      <h3 className="text-white font-semibold text-base mb-1">
        {product.name}
      </h3>

      {/* PRICE */}
      <p className="text-cyan-400 font-medium mb-4">
        {product.price}
      </p>

      {/* BUTTON */}
      <button
        className="
          w-full
          py-2.5
          rounded-lg
          font-medium
          text-white
          bg-gradient-to-r from-zinc-700 to-zinc-600
          transition-all duration-300

          group-hover:from-cyan-400
          group-hover:to-cyan-500
          group-hover:text-black
          group-hover:shadow-[0_0_20px_rgba(34,211,238,0.45)]
        "
      >
        View Product
      </button>
    </div>
  );
}

export default ProductCard;
