// import React from 'react';
import "../styles/colors.css";
import Cover from "../assets/cover.png";
import ARConsultores from "../assets/ARConsultores.png";
import CoverCinematch from "../assets/CoverCinematch.png";

const projects = [
  {
    name: "Linguini’s Recipes",
    image: Cover,
    tags: ["UX/UI", "Front end Dev"],
    link: "https://mikealiaga.github.io/Michaelangelo/"
  },
  {
    name: "Cinematch",
    image: CoverCinematch,
    tags: ["UX/UI", "FullStack Dev"],
    link: "https://bumblebee-5a1e.onrender.com"
  },
  {
    name: "AR Consultores",
    image: ARConsultores,
    tags: ["UX/UI", "No-Code Dev"],
    link: "https://arconsultores.mx/"
  }
];

export default function Portfolio() {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 h-screen">
      
      {/* Header */}
      <h1 className="text-left text-4xl md:text-6xl lg:text-[96px] font-medium white-txt">Portfolio</h1>
      <p className="text-left text-lg mt-4 grey-txt">
        Look at some of my recent work involving UX/UI Design and Front-End Development
      </p>

      {/* Portfolio Grid */}
      <div className="mt-[80px] mb-[96px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-black2-bg rounded-lg overflow-hidden card-border hover:shadow-xl transition">
            
            {/* Project Image */}
            <div className="h-48 bg-gray-800 flex justify-center items-center">
              <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
            </div>

            {/* Project Info */}
            <div className="p-4 text-left">
              <h3 className="text-lg font-medium white-txt">{project.name}</h3>

              {/* Tags */}
              <div className="flex space-x-2 mt-2">
                {project.tags.map((tag, i) => {
                  let tagClass = "";
                  if (tag === "UX/UI") tagClass = "cyan-txt cyan-border";
                  else if (tag === "Front end Dev") tagClass = "purple-txt purple-border";
                  else if (tag === "FullStack Dev") tagClass = "orange-txt orange-border";
                  else if (tag === "No-Code Dev") tagClass = "pink-txt pink-border";

                  return (
                    <span 
                      key={i} 
                      className={`px-3 py-1 text-sm rounded-full ${tagClass}`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>

              {/* View Project Link */}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block mt-4 text-sm grey-txt hover:underline mt-8">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}