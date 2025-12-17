function FounderCard() {
  return (
    <div className="relative rounded-3xl">
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl shadow-[0_0_60px_rgba(34,211,238,0.35)]" />

      <div
        className="
          relative bg-black/70
          rounded-3xl
          p-10 text-center
          border border-cyan-400/40
        "
      >
        <img
          src="/images/founder-profile.jpg"
          alt="Rajat Keshri"
          className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-cyan-500 mb-4"
        />

        <h3 className="text-xl font-semibold text-white">
          Rajat Keshri
        </h3>

        <p className="text-cyan-400 text-sm mb-4">
          Founder & CEO, Klue Drinks
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {["Marketing", "Operations", "Product", "Wellness"].map(tag => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-300 leading-relaxed mb-4">
          Founder of Klue Drinks | Wellness Enthusiast | Commerce Graduate |
          Building a healthier India — sip by sip.
        </p>

        <div className="text-sm text-gray-400 space-y-1">
          <p>CEO — Vishbino Beverages Pvt. Ltd.</p>
          <p>Associated with Bada Business Pvt. Ltd.</p>
          <p>Academic exposure — Macquarie University, Australia</p>
        </div>
      </div>
    </div>
  );
}

export default FounderCard;
