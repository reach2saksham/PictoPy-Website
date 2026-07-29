import React, { useEffect, useState } from "react";

export enum ThemeOptions {
  Light = 0,
  Dark = 1,
}

interface ThemeContextStructure {
  theme: ThemeOptions;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextStructure>({
  theme: ThemeOptions.Light,
  toggleTheme: () => {},
});

function getInitialTheme(): ThemeOptions {
  if (typeof window === "undefined") return ThemeOptions.Light;

  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "dark") return ThemeOptions.Dark;
  if (storedTheme === "light") return ThemeOptions.Light;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? ThemeOptions.Dark
    : ThemeOptions.Light;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === ThemeOptions.Dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === ThemeOptions.Dark ? ThemeOptions.Light : ThemeOptions.Dark
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}