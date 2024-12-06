import React from 'react';

const Projects = () => {
  // Proje verisini burada tanımlıyoruz
  const projects = [
    {
      title: "Workintech",
      description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      techStack: ["React", "Redux", "Vercel"],
      viewSiteUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      imageUrl: "/public/img/foto3.png",
    },
    {
      title: "Journey",
      description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      techStack: ["React", "Redux", "Vercel"],
      viewSiteUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      imageUrl: "/public/img/foto4.png",
    }
  ];

  return (
    <section className="bg-[#CBF281] py-16">
      <h2 className="text-[#4731D3] text-4xl font-bold text-center mb-12">Projects</h2>

      
      {projects.map((project, index) => (
        <div key={index} className="max-w-4xl mx-auto mb-8 bg-white p-8 rounded-lg shadow-lg flex items-center">
          <div className="w-1/3 mr-8">
            <img
              src={project.imageUrl}  
              alt={project.title}  
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-2/3">
            <h3 className="text-[#4731D3] text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-700 text-lg mt-4">
              {project.description}
            </p>

            <div className="flex mt-4">
              {project.techStack.map((tech, idx) => (
                <div key={idx} className="mr-4">
                  <button
                    className="px-4 py-2 rounded-lg text-lg"
                    style={{ backgroundColor: '#4731D3', color: '#FFFFFF' }}
                  >
                    {tech}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <a
                href={project.viewSiteUrl}
                className="text-[#120B39] underline mr-4"
              >
                View Site
              </a>
              <a
                href={project.githubUrl}
                className="text-[#120B39] underline"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;

