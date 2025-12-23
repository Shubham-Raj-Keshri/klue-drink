import heroImg from "../../assets/images/hero-water.png";


function Hero() {
  return (
    <section
      className="
        relative
        bg-zinc-950
        pt-32
        pb-32
        overflow-hidden
      "
    >
      {/* Background Image */}
      
<div
  className="
    absolute
    inset-0
    bg-no-repeat
    bg-cover
    bg-right
    hero-bg
    after:absolute
    after:inset-0
    after:bg-gradient-to-r
    after:from-black/90
    after:via-black/60
    after:to-transparent
  "
/>


      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-8 grid md:grid-cols-2 items-center gap-16">
        <div>
          <h1 className="text-5xl font-bold text-white leading-tight">
            Refresh Your Day with <br />
            <span className="text-cyan-400">KLUE Drinks</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-md">
            Natural flavored water crafted for freshness, hydration,
            and everyday energy.
          </p>

          <button onClick={() => document.getElementById("products")?.scrollIntoView({
            behavior: "smooth",
          })
        }
        className="mt-8 px-8 py-3 bg-cyan-500 rounded-full text-black font-semibold hover:scale-105 transition">
          Explore Products</button>

        </div>
      </div>
    </section>
  );
}

export default Hero;

