import { useState } from "react";

const faqs = [
  {
    q: "Is KLUE water safe for daily consumption?",
    a: "Yes. KLUE packaged drinking water is BIS licensed and FSSAI approved. Each bottle goes through multiple purification and quality checks.",
  },
  {
    q: "Do KLUE products contain sugar or preservatives?",
    a: "No. Our flavored water products are zero sugar, with no artificial preservatives.",
  },
  {
    q: "Where is KLUE water manufactured?",
    a: "KLUE products are manufactured and packaged by Vishbino Beverages Pvt. Ltd. in India under strict quality control.",
  },
  {
    q: "How can I become a distributor or partner?",
    a: "You can contact us via the Contact page or email us directly. Our business team will get in touch.",
  },
  {
    q: "What bottle sizes are available?",
    a: "KLUE water is available in multiple sizes including 500ml, 1 litre, 2 litre, and combo packs.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-zinc-950 text-white min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold">
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h1>
          <p className="mt-4 text-gray-400">
            Find answers to the most common questions about KLUE Drinks.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl border border-zinc-800"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-cyan-400 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
