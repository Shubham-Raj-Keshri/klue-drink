import { useEffect, useState } from "react";

import certificate1 from "../../assets/images/certificate-water.jpg";
import certificate2 from "../../assets/images/certificate-water2.jpg";

const certificates = [certificate1, certificate2];

function Certificates() {
  const [activeImage, setActiveImage] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % certificates.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-zinc-950 py-16 rounded-3xl p-10 text-center">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-cyan-400 text-xs tracking-widest uppercase">
          Why Klue Drinks
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
          Awards & Recognition
        </h2>

        <p className="mt-4 text-gray-400 leading-relaxed">
          Klue Drinks is a premium packaged drinking water brand committed to
          providing pure and refreshing hydration. Recognized by Startup India
          and Startup Bihar, we ensure high-quality, safe, and crisp drinking
          water that meets the highest standards.
        </p>
      </div>

      {/* SLIDER */}
      <div className="mt-10 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {certificates.map((src, i) => (
            <div key={i} className="min-w-full flex justify-center">
              <img
                src={src}
                alt="Certificate"
                className="
                  h-48 md:h-56
                  object-contain
                  cursor-pointer
                  transition-transform duration-300
                  hover:scale-110
                "
                onClick={() => setActiveImage(src)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeImage && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/90
            flex items-center justify-center
            p-6
          "
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="Certificate Fullscreen"
            className="max-w-full max-h-full rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}

export default Certificates;
