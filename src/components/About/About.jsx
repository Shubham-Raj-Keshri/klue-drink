import FounderCard from "./FounderCard";
import Timeline from "./Timeline";

function About() {
  return (
    <section id="about" className="bg-zinc-950 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-cyan-400 text-xs tracking-widest uppercase">
            About Klue Drinks
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Refreshing hydration, done right
          </h2>

          <p className="mt-4 text-gray-400">
            Klue Drinks delivers naturally flavored, unsweetened water
            crafted for people who value health, taste, and transparency.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2 gap-14
            bg-zinc-900/60
            rounded-3xl
            p-10 lg:p-16
            border border-zinc-800
            items-center
          "
        >
          {/* LEFT */}
          <div className="text-gray-300 space-y-6 max-w-xl">
            <p>
              Klue Drinks operates under{" "}
              <span className="text-white font-semibold">
                Vishbino Beverages Private Limited
              </span>, focusing on clean-label beverages made with
              natural ingredients.
            </p>

            <p>
              Our mission is to make hydration refreshing, flavorful,
              and accessible — without added sugar or artificial additives.
            </p>

            <p>
              We proudly stand behind our products with a{" "}
              <span className="text-white font-semibold">
                30-day customer satisfaction return policy
              </span>.
            </p>

            <Timeline />
          </div>

          {/* RIGHT */}
          <FounderCard />
        </div>
      </div>
    </section>
  );
}

export default About;
