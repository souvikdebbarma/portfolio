import { useState, useRef, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      const hasMoreToScroll = 
        Math.ceil(container.scrollLeft + container.clientWidth) < container.scrollWidth;
      setCanScrollRight(hasMoreToScroll);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth;
    const newScrollPosition = 
      direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
    
    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });

    const newSlide = direction === 'left' 
      ? currentSlide - 1 
      : currentSlide + 1;
    setCurrentSlide(Math.max(0, Math.min(newSlide, Math.ceil(projects.length / 3) - 1)));
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const handleScroll = () => {
        const slideIndex = Math.round(container.scrollLeft / container.offsetWidth);
        setCurrentSlide(slideIndex);
      };

      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio website built with React and Tailwind CSS",
      longDescription: "A detailed description of the project, its features, challenges faced, and solutions implemented...",
      tech: ["React", "Tailwind CSS", "GSAP", "Vite"],
      github: "https://github.com/souvikdebbarma/portfolio",
      live: "https://portfolio-nine-jet-96.vercel.app/",
      media: {
        type: "image",
        src: "/assets/portfolio.png"
      },
      category: "Web Development"
    },
    {
      title: "Pomodoro Timer",
      description: "This is a Pomodoro Timer application built with Electron and React.",
      longDescription: "This is a Pomodoro Timer application built with Electron and React. The app helps you manage your time effectively by using the Pomodoro Technique, which involves working in focused intervals (typically 25 minutes) followed by short breaks.",
      tech: ["JavaScript", "Electron", "React", "Tailwind CSS", "webpack", "babel"],
      github: "https://github.com/souvikdebbarma/pomodoro_timer",
      live: "https://pomodoro-timer-teal-eight.vercel.app/",
      media: {
        type: "video",
        src: "/assets/demo/pomodoro_timer.mp4"
      },
      category: "Web Development"
    },
    {
      title: "To-Do List",
      description: "This is a Simple To-Do List.",
      longDescription: "Organize your work",
      tech: ["JavaScript", "React", "Tailwind CSS", "Electron"],
      github: "https://github.com/souvikdebbarma/to-do_list",
      live: "https://to-do-list-ashen-eight.vercel.app/",
      media: {
        type: "video",
        src: "/assets/demo/to-do_list.mp4"
      },
      category: "Web Development"
    },
    {
      title: "Tetris Clone",
      description: "This is a Simple Tetris Clone built with JavaScript.",
      longDescription: "This is a Simple Tetris Clone built with JavaScript. The game is a classic example of a tile-matching puzzle game where players must move and rotate falling blocks to create complete lines without gaps.",
      tech: ["JavaScript"],
      github: "https://github.com/souvikdebbarma/tetris_clone",
      live: "https://tetris-clone-mocha.vercel.app/",
      media: {
        type: "image",
        src: "/assets/tetris_clone.png"
      },
      category: "Game"
    },
    {
      title: "Pomodoro Timer",
      description: "This is a Simple Tetris Clone built with JavaScript.",
      longDescription: "This is a Simple Tetris Clone built with JavaScript. The game is a classic example of a tile-matching puzzle game where players must move and rotate falling blocks to create complete lines without gaps.",
      tech: ["JavaScript"],
      github: "https://github.com/souvikdebbarma/tetris_clone",
      live: "https://tetris-clone-mocha.vercel.app/",
      media: {
        type: "image",
        src: "/assets/tetris_clone.png"
      },
      category: "Game"
    },
    // Add more projects
  ];

  return (
    <section id="projects" className="py-12 bg-custom-snow dark:bg-custom-darkvoid">
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

        {/* Project Scroll Container */}
        <div className="relative px-8 mb-4">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-custom-liquidlava hover:text-white transition-all duration-300 ${
              !canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            aria-label="Scroll left"
            disabled={!canScrollLeft}
          >
            <FiChevronLeft size={24} />
          </button>

          {/* Project Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-8 pb-4 snap-x snap-mandatory"
            style={{ 
              scrollbarWidth: 'none',
              '-ms-overflow-style': 'none',
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-none w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-21px)] snap-start"
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
                >
                  <div className="relative aspect-video overflow-hidden">
                    {project.media.type === 'video' ? (
                      <video
                        src={project.media.src}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        src={project.media.src}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-custom-liquidlava hover:text-white transition-colors"
                      >
                        <FiGithub size={20} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-custom-liquidlava hover:text-white transition-colors"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-custom-darkvoid dark:text-custom-snow mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-custom-liquidlava/10 text-custom-liquidlava rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add Slide Indicators */}
          <div className="flex justify-center gap-3 mt-4">
            {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-custom-liquidlava w-8' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                onClick={() => {
                  const container = scrollContainerRef.current;
                  if (container) {
                    container.scrollTo({
                      left: index * container.offsetWidth,
                      behavior: 'smooth'
                    });
                    setCurrentSlide(index);
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-custom-liquidlava hover:text-white transition-all duration-300 ${
              !canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            aria-label="Scroll right"
            disabled={!canScrollRight}
          >
            <FiChevronRight size={24} />
          </button>
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
                {/* Media Container */}
                <div className="relative aspect-video">
                  {selectedProject.media.type === 'video' ? (
                    <video
                      src={selectedProject.media.src}
                      className="w-full h-full object-cover rounded-lg"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={selectedProject.media.src}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
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