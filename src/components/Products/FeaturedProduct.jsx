function FeaturedProduct({ product }) {
  return (
    <div className="
      col-span-1
      lg:col-span-2
      bg-white
      border border-gray-200
      rounded-3xl
      p-8 lg:p-10
      shadow-md
      hover:shadow-xl transition
      grid md:grid-cols-2 gap-8
    ">
      <img
        src={product.image}
        alt={product.name}
        className="h-64 mx-auto object-contain"
      />

      <div className="flex flex-col justify-center">
        <span className="text-sm uppercase tracking-wide text-cyan-600">
          Featured Product
        </span>

        <h3 className="mt-2 text-3xl font-bold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-3 text-gray-500">
          Our best-selling refreshing beverage made with natural ingredients.
        </p>

        <p className="mt-4 text-xl font-semibold text-gray-900">
          {product.price}
        </p>

        <button className="
          mt-6 w-fit px-8 py-3
          rounded-xl
          bg-gradient-to-r from-cyan-500 to-blue-600
          text-white font-medium
          hover:opacity-90 transition
        ">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FeaturedProduct;
