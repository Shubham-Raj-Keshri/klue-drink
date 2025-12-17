function Timeline() {
  const items = [
    {
      year: "2022",
      title: "Company Founded",
      desc: "Klue Drinks was founded under Vishbino Beverages Pvt. Ltd.",
    },
    {
      year: "2023",
      title: "Product Innovation",
      desc: "Developed naturally flavored, zero-sugar water products.",
    },
    {
      year: "2024",
      title: "Growth & Expansion",
      desc: "Expanded distribution and strengthened brand presence.",
    },
  ];

  return (
    <div className="pt-6 space-y-5 border-t border-zinc-800">
      {items.map(item => (
        <div key={item.year} className="flex gap-6">
          <span className="text-cyan-400 font-semibold min-w-[60px]">
            {item.year}
          </span>
          <div>
            <p className="text-white font-semibold">{item.title}</p>
            <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
