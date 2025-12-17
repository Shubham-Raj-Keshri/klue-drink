function ShopCard({ product, onPay }) {
  return (
    <div className="
      bg-zinc-900 border border-zinc-800
      rounded-2xl p-6
      transition hover:-translate-y-2
    ">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 mx-auto object-contain"
      />

      <h3 className="mt-4 text-white font-semibold">
        {product.name}
      </h3>

      <p className="mt-1 text-cyan-400 font-medium">
        ₹{product.price}
      </p>

      <button
        onClick={() => onPay(product)}
        className="
          mt-5 w-full py-3 rounded-xl
          bg-cyan-400 text-black
          font-medium
          hover:bg-cyan-300
        "
      >
        Buy Now
      </button>
    </div>
  );
}

export default ShopCard;
