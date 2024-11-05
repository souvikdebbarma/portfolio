import { useState } from 'react';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio website built with React and Tailwind CSS",
      longDescription: "A detailed description of the project, its features, challenges faced, and solutions implemented...",
      tech: ["React", "Tailwind CSS", "GSAP", "Vite"],
      github: "https://github.com/souvikdebbarma/portfolio",
      live: "https://yourwebsite.com",
      image: "/assets/portfolio.png",
      category: "Web Development"
    },
    {
      title: "Pomodoro Timer",
      description: "This is a Pomodoro Timer application built with Electron and React.",
      longDescription: "This is a Pomodoro Timer application built with Electron and React. The app helps you manage your time effectively by using the Pomodoro Technique, which involves working in focused intervals (typically 25 minutes) followed by short breaks.",
      tech: ["JavaScript", "Electron", "React", "Tailwind CSS", "webpack", "babel"],
      github: "https://github.com/souvikdebbarma/pomodoro_timer",
      live: "https://yourwebsite.com",
      image: "/assets/portfolio.png",
      category: "Web Development"
    },
    // Add more projects
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-custom-snow dark:bg-custom-darkvoid">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold text-custom-darkvoid dark:text-custom-snow">
            /
          </h2>
          <h2 className="text-4xl font-bold text-custom-darkvoid dark:text-custom-snow">
            projects
          </h2>
          <div className="flex-grow h-[1px] bg-custom-darkvoid/20 dark:bg-custom-snow/20"></div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group relative aspect-video rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-white/80 text-sm line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs bg-custom-liquidlava/20 text-custom-liquidlava rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="max-w-7xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-custom-liquidlava transition-colors z-50"
              >
                <FiX size={24} />
              </button>

              {/* Project Display */}
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Image */}
                <div className="relative aspect-video">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2 text-custom-darkvoid dark:text-custom-snow">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-sm bg-custom-liquidlava/20 text-custom-liquidlava rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-custom-liquidlava text-white rounded-lg hover:scale-105 transition-transform duration-200"
                    >
                      <FiGithub size={20} />
                      <span>View Code</span>
                    </a>
                    <a 
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-custom-darkvoid dark:bg-custom-snow text-white dark:text-custom-darkvoid rounded-lg hover:scale-105 transition-transform duration-200"
                    >
                      <FiExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 