import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Check for saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setIsDark(true);
    else if (saved === "light") setIsDark(false);
    else {
      // Auto detect system preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setIsDark(true);
      }
    }
  }, []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setIsDark(!isDark)}
      className="fixed top-5 right-5 p-2 rounded-full text-white shadow-lg focus:outline-none"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
