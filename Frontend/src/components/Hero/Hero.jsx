import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(heroRef.current.children, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, []);

  return (
    <div ref={heroRef} className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4">
      <h2 className="text-custom-liquidlava text-xl mb-4 inter-500">Hello, I'm</h2>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-custom-darkvoid dark:text-custom-snow inter-900">
        Souvik
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-custom-darkvoid/80 dark:text-custom-snow/80 max-w-2xl inter-400">
        A passionate web developer crafting beautiful and functional digital experiences
      </p>
      <div className="flex gap-4">
        <button className="bg-custom-liquidlava text-custom-snow px-6 py-3 rounded-lg hover:bg-custom-liquidlava/90 transition-all inter-500">
          View Projects
        </button>
        <button className="border border-custom-darkvoid dark:border-custom-snow text-custom-darkvoid dark:text-custom-snow px-6 py-3 rounded-lg hover:bg-custom-snow/10 transition-all inter-500">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Hero; 