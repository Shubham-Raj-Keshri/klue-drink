import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  /* ===========================
     SMART SCROLL HANDLER
  =========================== */
  const scrollToSection = (id) => {
    const scroll = () => {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 500); // ⬅️ safer delay
    } else {
      scroll();
    }
  };

  return (
    <footer className="bg-zinc-950 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        {/* TOP SECTION */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <h3 className="text-white font-semibold text-lg">
              KLUE Drinks
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              Refreshing beverages made with natural ingredients.
              Designed to keep you hydrated and energized.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li
                onClick={() => scrollToSection("about")}
                className="hover:text-white cursor-pointer"
              >
                About Us
              </li>
              <li
                onClick={() => scrollToSection("products")}
                className="hover:text-white cursor-pointer"
              >
                Products
              </li>
              <li
                onClick={() => navigate("/careers")}
                className="hover:text-white cursor-pointer"
              >
                Careers
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-white font-medium mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li
                onClick={() => navigate("/contact")}
                className="hover:text-white cursor-pointer"
              >
                Contact
              </li>
              <li
                onClick={() => navigate("/faq")}
                className="hover:text-white cursor-pointer"
              >
                FAQs
              </li>
              <li
                onClick={() => navigate("/privacy-policy")}
                className="hover:text-white cursor-pointer"
              >
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-medium mb-4">Get in touch</h4>
            <p className="text-sm">
              ruthwikraj24@gmail.com <br />
              +91 8252410616
            </p>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="mt-12 flex justify-center gap-5">
          <a
            href="https://www.instagram.com/klue_drinks/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 transition hover:bg-cyan-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.45)]"
          >
            <FaInstagram className="text-white text-lg" />
          </a>

          <a className="p-3 rounded-full bg-white/10 transition hover:bg-cyan-500 hover:scale-110">
            <FaFacebookF className="text-white text-lg" />
          </a>

          <a className="p-3 rounded-full bg-white/10 transition hover:bg-cyan-500 hover:scale-110">
            <FaTwitter className="text-white text-lg" />
          </a>

          <a
            href="https://www.linkedin.com/company/kluedrinks/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 transition hover:bg-cyan-500 hover:scale-110"
          >
            <FaLinkedinIn className="text-white text-lg" />
          </a>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-center">
          © {new Date().getFullYear()} Vishbino Beverage Private Limited.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
