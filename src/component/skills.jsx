import React from "react";

const Skills = () => {
  return (
    <section className="bg-[#FFFFFF] w-[960px] h-[430px] mx-auto py-12 px-6 flex">
      
      <div className="flex flex-col justify-start w-1/3">
        
        <h2 className="text-[#4832D3] text-4xl font-bold mb-6">Skills</h2>
      </div>

      
      <div className="w-2/3 grid grid-cols-3 gap-y-8 items-center">
        
        <div className="flex flex-col items-center">
          <img
            src="./public/logo/logo1.jfif"
            alt="JavaScript"
            className="w-16 h-16"
          />
          <p className="mt-4 text-gray-800 text-lg">JavaScript</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="./public/logo/logo2.png"
            alt="React"
            className="w-16 h-16"
          />
          <p className="mt-4 text-gray-800 text-lg">React</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="./public/logo/logo3.png"
            alt="Redux"
            className="w-16 h-16"
          />
          <p className="mt-4 text-gray-800 text-lg">Redux</p>
        </div>

        
        <div className="flex flex-col items-center">
          <img
            src="./public/logo/logo4.jfif"
            alt="Node.js"
            className="w-16 h-16"
          />
          <p className="mt-4 text-gray-800 text-lg">Node.js</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="./public/logo/logo5.png"
            alt="VS Code"
            className="w-16 h-16"
          />
          <p className="mt-4 text-gray-800 text-lg">VS Code</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="./public/logo/logo6.jfif"
            alt="Figma"
            className="w-16 h-16"
          />
          <p className="mt-4 text-gray-800 text-lg">Figma</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;




