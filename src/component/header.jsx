import React from "react";
import ThemeToggleButton from "./ThemeToggleButton"; 

const Header = () => {
  return (
    <header className="grid grid-cols-3 h-64">
      
      <div className="col-span-2 bg-[#4731D3] flex justify-center items-center">
        <div className="text-4xl font-bold">almila</div>
      </div>

      
      <div className="bg-[#CBF281] text-white flex justify-center items-center space-x-4">
        <a href="#" className="hover:text-gray-200">Github</a>
        <a href="#" className="hover:text-gray-200">LinkedIn</a>
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default Header;


