import React from "react";
import { useLanguage } from "../context/LanguageContext"; 

const Header = () => {
  const { language, toggleLanguage } = useLanguage(); 

  return (
    <header className="grid grid-cols-3 h-64">
      
      <div className="col-span-2 bg-[#CBF281] flex justify-center items-center">
        <div className="text-4xl font-bold">
          {language === "en" ? "almila" : "almila"} 
        </div>
      </div>

      
      <div className="bg-[#4731D3] text-white flex justify-center items-center space-x-4">
        <a href="#" className="hover:text-gray-200">
          {language === "en" ? "Github" : "Github"} 
        </a>
        <a href="#" className="hover:text-gray-200">
          {language === "en" ? "LinkedIn" : "LinkedIn"} 
        </a>
        <ThemeToggleButton />

        
        <button onClick={toggleLanguage} className="text-lg">
          {language === "en" ? "Türkçe'ye Geç" : "Switch to English"}
        </button>
      </div>
    </header>
  );
};

export default Header;



