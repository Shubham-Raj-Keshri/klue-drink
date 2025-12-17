import ProductsGrid from "../Products/ProductsGrid";

function Shop() {
  return (
   <section className="bg-zinc-950 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">

        <h1 className="text-4xl font-bold text-white">
          Shop <span className="text-cyan-400">KLUE Drinks</span>
        </h1>

        <p className="text-gray-400 mt-3 mb-16">
          Order your favorite packaged drinking water and stay refreshed.
        </p>

        {/* 👇 SHOW ALL PRODUCTS */}
        <ProductsGrid filter="all" />

      </div>
    </section>
  );
}

export default Shop;
