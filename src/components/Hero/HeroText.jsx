function HeroText() {
  return (
    <div className="flex-1">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Refresh Your Day with{" "}
        <span className="text-cyan-400">KLUE Drinks</span>
      </h1>
      <p className="text-gray-300 mb-8 leading-relaxed">
        Natural flavored water crafted for freshness, hydration,
        and everyday energy.
      </p>
      <a
        href="#products"
        className="inline-block bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-3 rounded-full font-medium transition"
      >
        Explore Products
      </a>
    </div>
  );
}

export default HeroText;
