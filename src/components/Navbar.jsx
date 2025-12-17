import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

const menuItems = [
  { label: "Home", id: "home", type: "scroll" },
  { label: "Products", id: "products", type: "scroll" },
  { label: "About Us", id: "about", type: "scroll" },
  { label: "Shop", path: "/shop", type: "route" },
];

function Navbar() {
  const [active, setActive] = useState("Home");
  const [style, setStyle] = useState({});
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const refs = useRef({});
  const navigate = useNavigate();
  const location = useLocation();

  /* LOGO → HOME */
  const scrollToTop = () => {
    navigate("/");
    setActive("Home");
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ACTIVE STATE FROM ROUTE */
  useEffect(() => {
    if (location.pathname === "/shop") {
      setActive("Shop");
    }
  }, [location.pathname]);

  /* UNDERLINE ANIMATION */
  useEffect(() => {
    const el = refs.current[active];
    if (!el) return;

    const update = () => {
      setStyle({
        width: el.offsetWidth,
        transform: `translateX(${el.offsetLeft}px)`,
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [active]);

  /* BLUR ON SCROLL */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* NAV HANDLER */
  const handleNavClick = (item) => {
    setActive(item.label);
    setOpen(false);

    if (item.type === "route") {
      navigate(item.path);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(item.id)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 200);
      return;
    }

    document
      .getElementById(item.id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-300
          ${
            scrolled
              ? "bg-zinc-900/80 backdrop-blur-xl shadow-lg"
              : "bg-zinc-950"
          }
          border-b border-zinc-800
        `}
      >
        <div className="px-6 md:px-10 py-4 flex items-center">
          {/* LOGO */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 text-white font-semibold"
          >
            <img
              src={logo}
              alt="KLUE Drinks"
              className="w-8 h-8 rounded-full"
            />
            <span className="hidden sm:inline">
              Vishbino Beverages Private Limited
            </span>
            <span className="sm:hidden">KLUE Drinks</span>
          </button>

          {/* DESKTOP MENU */}
          <nav className="ml-auto hidden md:block relative mr-32">
            <ul className="flex gap-10 text-gray-400 relative">
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  ref={(el) => (refs.current[item.label] = el)}
                  onClick={() => handleNavClick(item)}
                  className={`cursor-pointer transition-colors ${
                    active === item.label
                      ? "text-cyan-400"
                      : "hover:text-white"
                  }`}
                >
                  {item.label}
                </li>
              ))}

              {/* UNDERLINE */}
              <span
                className="absolute -bottom-2 h-[2px]
                  bg-gradient-to-r from-cyan-400 to-blue-500
                  transition-all duration-300"
                style={style}
              />
            </ul>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="ml-auto md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed top-[72px] w-full z-40
          bg-zinc-900/95 backdrop-blur-xl
          border-t border-zinc-800
          px-6 py-6 space-y-4
          md:hidden
          transition-all duration-300
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        {menuItems.map((item) => (
          <div
            key={item.label}
            onClick={() => handleNavClick(item)}
            className={`text-lg cursor-pointer ${
              active === item.label
                ? "text-cyan-400"
                : "text-gray-300 hover:text-cyan-400"
            }`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </>
  );
}

export default Navbar;
