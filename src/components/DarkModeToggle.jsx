import { useEffect, useState } from "react";

function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    // 1️⃣ Check saved preference
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";

    // 2️⃣ Otherwise follow system
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle dark mode"
      className="
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-gray-900 text-white
        dark:bg-white dark:text-black
        shadow-lg
        hover:scale-105
        transition
      "
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}

export default DarkModeToggle;
