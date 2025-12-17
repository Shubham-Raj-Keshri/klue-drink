import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        p-3 rounded-full
        bg-gray-900 text-white
        shadow-lg
        transition-all duration-300
        ${show ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
        hover:bg-cyan-500
      `}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTop;
