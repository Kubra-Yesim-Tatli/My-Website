import React from "react";
import { useLanguage } from "../context/LanguageContext"; 
import ThemeToggleButton from "./ThemeToggleButton"; 

const Header = () => {
  const { language, toggleLanguage } = useLanguage(); 

  return (
    <header className="w-[1440px] h-[671px] gap-0 opacity-100 relative flex">
      
      <div className="bg-[#CBF281] flex justify-center items-center w-2/3 h-full">
        <div className="text-center relative">
          
          <div className="absolute top-[-50px] w-full text-3xl font-bold font-inter">
            Kübra
          </div>
          
          
          <div className="text-4xl font-bold font-inter">
            {language === "en" ? "I am a Frontend Developer..." : "Frontend Developer'ım..."}
          </div>
          
          
          <div className="text-lg font-inter mt-4 max-w-lg">
            {language === "en"
              ? "...who likes to craft solid and scalable frontend products with great user experiences."
              : "...sağlam ve ölçeklenebilir frontend ürünleri tasarlamayı seven biri."}
          </div>
          
          
          <div className="mt-6 flex justify-center space-x-4">
  <a
    href="https://github.com"
    className="bg-[#FFFFFF] text-[#3730A3] py-2 px-4 rounded-md hover:bg-[#E5E5E5] border border-[#3730A3] font-medium"
  >
    {language === "en" ? "Github" : "Github"}
  </a>
  <a
    href="https://linkedin.com"
    className="bg-[#FFFFFF] text-[#3730A3] py-2 px-4 rounded-md hover:bg-[#E5E5E5] border border-[#3730A3] font-medium"
  >
    {language === "en" ? "LinkedIn" : "LinkedIn"}
  </a>
</div>
        </div>
      </div>

      
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src="./public/img/profil1.png" 
          alt="Profile"
          className="w-[100px] h-[150px] rounded-[9px_0px_0px_0px] opacity-100"
          style={{
            marginLeft: '75%',
            width: '500%', 
          }}
        />
      </div>
      {/* Sağ taraf - 1/3 (mor renk) */}
      <div className="bg-[#4731D3] text-white flex justify-center items-center space-x-4 w-1/3 h-full">
        <ThemeToggleButton />

        {/* Dil Seçeneği Butonu */}
        <button onClick={toggleLanguage} className="text-lg">
          {language === "en" ? "Türkçe'ye Geç" : "Switch to English"}
        </button>
      </div>
    </header>
  );
};

export default Header;




