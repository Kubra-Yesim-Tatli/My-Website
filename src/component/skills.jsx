import React from "react";

const Skills = () => {
  
  const skills = [
    {
      name: "JavaScript",
      logo: "./public/logo/logo1.jfif",
    },
    {
      name: "React",
      logo: "./public/logo/logo2.png",
    },
    {
      name: "Redux",
      logo: "./public/logo/logo3.png",
    },
    {
      name: "Node.js",
      logo: "./public/logo/logo4.jfif",
    },
    {
      name: "VS Code",
      logo: "./public/logo/logo5.png",
    },
    {
      name: "Figma",
      logo: "./public/logo/logo6.jfif",
    },
  ];

  return (
    <section className="bg-[#FFFFFF] w-[960px] h-[430px] mx-auto py-12 px-6 flex">
      <div className="flex flex-col justify-start w-1/3">
        <h2 className="text-[#4832D3] text-4xl font-bold mb-6">Skills</h2>
      </div>

      <div className="w-2/3 grid grid-cols-3 gap-y-8 items-center">
        
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-16 h-16"
            />
            <p className="mt-4 text-gray-800 text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
