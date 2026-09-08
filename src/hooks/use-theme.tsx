import { useEffect, useState, useCallback } from "react";

type Theme = "dark" | "light";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("theme")) as Theme | null;
    const initial: Theme = stored ?? "dark";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const applyTheme = (t: Theme) => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const body = document.body;
    const next = t === "dark" ? "dark" : "light";
    const previous = t === "dark" ? "light" : "dark";

    root.classList.add(next);
    root.classList.remove(previous);
    body.classList.add(next);
    body.classList.remove(previous);
  };

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      applyTheme(next);
      return next;
    });
  }, []);

  return { theme, toggle };
}
