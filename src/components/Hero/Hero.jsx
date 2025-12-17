import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section
  id="home"
  className="
    relative
    bg-zinc-950
    py-16
    overflow-hidden
  "
>

      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center gap-12">
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
}

export default Hero;
