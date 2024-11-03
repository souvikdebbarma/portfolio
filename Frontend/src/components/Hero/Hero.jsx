import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ParticleBackground from '../ParticleBackground/ParticleBackground';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(heroRef.current.children, {
      y: 20,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      autoAlpha: 0,
      clearProps: "all"
    });
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-custom-snow dark:bg-custom-darkvoid relative overflow-hidden">
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>
      <div ref={heroRef} className="text-center [&>*]:!opacity-100 relative z-10">
        <h2 className="text-custom-liquidlava text-xl mb-4 font-bold tracking-wide">
          Hello, I'm
        </h2>
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-custom-darkvoid dark:text-custom-snow tracking-tight">
          Souvik
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-custom-darkvoid dark:text-custom-snow max-w-2xl mx-auto font-medium leading-relaxed">
          A passionate web developer crafting beautiful and functional digital experiences
        </p>
        <div className="flex gap-6 justify-center">
          <button className="group bg-custom-liquidlava text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-all duration-200 relative">
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-white rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
          </button>
          <button className="group bg-custom-darkvoid dark:bg-custom-snow text-white dark:text-custom-darkvoid px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-all duration-200 relative">
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 bg-custom-liquidlava rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;