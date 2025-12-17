import { useState } from "react";

function Careers() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-zinc-950 text-white min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold">
            Careers at <span className="text-cyan-400">KLUE Drinks</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Join Vishbino Beverages Pvt. Ltd. and be part of a growing
            Indian beverage brand focused on quality, innovation, and impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                Why work with us?
              </h3>
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li>Fast-growing beverage startup</li>
                <li>Learning-focused environment</li>
                <li>Real impact & responsibility</li>
                <li>Open to freshers and professionals</li>
              </ul>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">
                Current Openings
              </h3>
              <p className="text-gray-400">
                Sales Executive, Operations Associate, Marketing Intern,
                Distribution Partner (India).
              </p>
            </div>

            <p className="text-sm text-gray-500">
              📌 We review applications within 7 working days.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-zinc-900 rounded-3xl p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-semibold mb-4">
                  Apply Now
                </h3>

                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full bg-zinc-800 rounded-xl px-4 py-3 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full bg-zinc-800 rounded-xl px-4 py-3 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-zinc-800 rounded-xl px-4 py-3 outline-none"
                />

                <select className="w-full bg-zinc-800 rounded-xl px-4 py-3 outline-none">
                  <option>Sales</option>
                  <option>Marketing</option>
                  <option>Operations</option>
                  <option>Internship</option>
                  <option>Other</option>
                </select>

                <textarea
                  rows="4"
                  placeholder="Tell us about yourself"
                  required
                  className="w-full bg-zinc-800 rounded-xl px-4 py-3 outline-none"
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-cyan-400 text-black font-semibold
                  hover:bg-cyan-300 transition"
                >
                  Submit Application
                </button>
              </form>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-cyan-400">
                  Application Received
                </h3>
                <p className="mt-4 text-gray-300">
                  Thank you for your interest. Our team will contact you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Careers;
