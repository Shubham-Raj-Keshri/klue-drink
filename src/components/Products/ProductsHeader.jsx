function ProductsHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto px-4 relative">

      {/* Accent glow */}
      <div
        className="
          absolute inset-0
          -top-16
          bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_60%)]
          pointer-events-none
        "
      />

      {/* Section label */}
      <span
        className="
          inline-block
          mb-4
          text-sm uppercase tracking-widest
          text-cyan-400 font-semibold
        "
      >
        Our Collection
      </span>

      {/* Main heading */}
      <h2
        className="
          text-3xl sm:text-4xl lg:text-5xl
          font-bold
          text-white
          leading-tight
        "
      >
        Water that makes you enjoy water
      </h2>

      {/* Description */}
      <p
        className="
          mt-5
          text-gray-400
          text-lg
          leading-relaxed
        "
      >
        Discover our range of naturally flavored water designed to refresh
        your body and mind.
      </p>

    </div>
  );
}

export default ProductsHeader;
