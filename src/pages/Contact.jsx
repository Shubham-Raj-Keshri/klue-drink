import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaBuilding } from "react-icons/fa";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-zinc-950 text-white min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* HERO */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-cyan-400">KLUE Drinks</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Reach out to us for product enquiries, business opportunities,
            partnerships, or any general questions. We’re happy to help.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT – CONTACT INFO */}
          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-2xl p-6 flex gap-4 items-start">
              <FaEnvelope className="text-cyan-400 text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-400">ruthwikraj24@gmail.com</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 flex gap-4 items-start">
              <FaPhoneAlt className="text-cyan-400 text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-400">+91 8252410616</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 flex gap-4 items-start">
              <FaBuilding className="text-cyan-400 text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Office</h4>
                <p className="text-gray-400">
                  Vishbino Beverages Private Limited A block, 5th Floor Maurya Lok Complex Buddha colony, Patna-800001, Bihar, India <br />
                  India
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              ⏱ We usually respond within 24 hours on working days.
            </p>
          </div>

          {/* RIGHT – FORM */}
          <div className="bg-zinc-900 rounded-3xl p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-semibold mb-4">
                  Send us a message
                </h3>

                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full bg-zinc-800 rounded-xl px-4 py-3 outline-none"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-zinc-800 rounded-xl px-4 py-3 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-zinc-800 rounded-xl px-4 py-3 outline-none"
                />

                <select
                  className="w-full bg-zinc-800 rounded-xl px-4 py-3 outline-none"
                >
                  <option>Product Enquiry</option>
                  <option>Business Opportunity</option>
                  <option>Partnership</option>
                  <option>General Query</option>
                </select>

                <textarea
                  rows="4"
                  placeholder="Your Message"
                  required
                  className="w-full bg-zinc-800 rounded-xl px-4 py-3 outline-none"
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-cyan-400 text-black font-semibold
                  hover:bg-cyan-300 transition"
                >
                  Submit Message
                </button>
              </form>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-cyan-400">
                  Thank you!
                </h3>
                <p className="mt-4 text-gray-300">
                  We’ve received your message and will connect with you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
