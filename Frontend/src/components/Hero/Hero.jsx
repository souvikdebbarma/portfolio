import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Projects from '../Projects/Projects';
import ParticleBackground from '../ParticleBackground/ParticleBackground';

const Hero = () => {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const [showProjects, setShowProjects] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Split the name into individual letters with custom spans
    const letters = nameRef.current.innerText.split('').map((letter, i) => (
      `<span class="inline-block" key=${i}>${letter}</span>`
    )).join('');
    nameRef.current.innerHTML = letters;

    // Initial animations
    tl.set([heroRef.current.querySelector('h2'), nameRef.current.children, heroRef.current.querySelector('p'), heroRef.current.querySelectorAll('button')], {
      opacity: 0,
      y: 50
    })
    .to(heroRef.current.querySelector('h2'), {
      y: 0,
      duration: 0.8,
      opacity: 1,
      ease: "power3.out"
    })
    .to(nameRef.current.children, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.08,
      ease: "back.out(1.7)"
    }, "-=0.4")
    .to(heroRef.current.querySelector('p'), {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4")
    .to(heroRef.current.querySelectorAll('button'), {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=0.6");

    // Add hover animations for each letter
    const handleMouseEnter = (letter, index) => {
      gsap.to(letter, {
        y: -15,
        scale: 1.3,
        color: '#F56E0F',
        duration: 0.3,
        ease: "back.out(2)"
      });

      const prevLetter = nameRef.current.children[index - 1];
      const nextLetter = nameRef.current.children[index + 1];
      
      if (prevLetter) {
        gsap.to(prevLetter, {
          y: -8,
          scale: 1.1,
          duration: 0.2,
          ease: "power2.out"
        });
      }
      
      if (nextLetter) {
        gsap.to(nextLetter, {
          y: -8,
          scale: 1.1,
          duration: 0.2,
          ease: "power2.out"
        });
      }
    };

    const handleMouseLeave = (letter) => {
      gsap.to([letter, letter.previousElementSibling, letter.nextElementSibling], {
        y: 0,
        scale: 1,
        color: '',
        duration: 0.3,
        ease: "power2.inOut"
      });
    };

    // Add event listeners
    Array.from(nameRef.current.children).forEach((letter, index) => {
      letter.addEventListener('mouseenter', () => handleMouseEnter(letter, index));
      letter.addEventListener('mouseleave', () => handleMouseLeave(letter));
    });

    // Cleanup function
    return () => {
      if (nameRef.current) {
        Array.from(nameRef.current.children).forEach((letter, index) => {
          letter.removeEventListener('mouseenter', () => handleMouseEnter(letter, index));
          letter.removeEventListener('mouseleave', () => handleMouseLeave(letter));
        });
      }
    };
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>
      <div className="relative h-full flex items-center z-10">
        <div className="container mx-auto px-4">
          <div ref={heroRef} className="text-center">
            <h2 className="text-custom-liquidlava text-xl mb-4 font-bold tracking-wide">
              Heyy! It's Me
            </h2>
            <h1 
              ref={nameRef}
              className="text-6xl md:text-8xl font-extrabold mb-6 text-custom-darkvoid dark:text-custom-snow tracking-tight cursor-default"
            >
              Souvik
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-custom-darkvoid dark:text-custom-snow max-w-2xl mx-auto font-medium leading-relaxed">
              A passionate web developer crafting beautiful and functional digital experiences
            </p>
            <div className="flex gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-custom-liquidlava text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform duration-200"
              >
                View Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-custom-darkvoid dark:bg-custom-snow text-white dark:text-custom-darkvoid px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform duration-200"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {showProjects && <Projects onClose={() => setShowProjects(false)} />}
    </section>
  );
};

export default Hero;