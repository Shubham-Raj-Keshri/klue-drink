import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import About from "../components/About/About";

function Home() {
  return (
    <main className="bg-zinc-950 text-white pt-[72px]">
      <Hero />
      <Products />
      <About />
    </main>
  );
}

export default Home;
