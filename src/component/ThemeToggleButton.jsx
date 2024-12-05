import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; 

const ThemeToggleButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light"); 
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-800 text-white px-4 py-2 rounded-full transition-all hover:bg-gray-600"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeToggleButton;
