import { useTheme } from '../../context/ThemeContext'
import { RiMoonLine, RiSunLine, RiMenuLine, RiCloseLine } from 'react-icons/ri'
import { useState, useEffect } from 'react'

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Height of your fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-custom-snow/80 dark:bg-custom-darkvoid/80 backdrop-blur-sm border-b border-custom-darkvoid/10 dark:border-custom-snow/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-custom-darkvoid dark:text-custom-snow relative group z-50"
          >
            Souvik
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom-liquidlava transition-all duration-300 group-hover:w-full"></span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              ['Home', 'home'],
              ['About', 'about'],
              ['Experience', 'experience'],
              ['Projects', 'projects'],
              ['Photography', 'photography'],
              ['Blog', 'blog'],
              ['Contact', 'contact'],
            ].map(([title, id]) => (
              <button 
                key={id}
                onClick={() => scrollToSection(id)}
                className="relative group text-custom-darkvoid dark:text-custom-snow font-medium hover:text-custom-liquidlava transition-colors duration-200"
              >
                {title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom-liquidlava transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-custom-darkvoid/10 dark:hover:bg-custom-snow/10 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <RiSunLine className="text-custom-snow text-xl" />
              ) : (
                <RiMoonLine className="text-custom-darkvoid text-xl" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-custom-darkvoid/10 dark:hover:bg-custom-snow/10 transition-colors duration-200 z-50"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <RiSunLine className="text-custom-snow text-xl" />
              ) : (
                <RiMoonLine className="text-custom-darkvoid text-xl" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-custom-darkvoid dark:text-custom-snow z-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <RiCloseLine className="text-2xl" />
              ) : (
                <RiMenuLine className="text-2xl" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`fixed inset-0 bg-custom-snow dark:bg-custom-darkvoid transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden`}
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              {[
                ['Home', 'home'],
                ['About', 'about'],
                ['Experience', 'experience'],
                ['Projects', 'projects'],
                ['Photography', 'photography'],
                ['Blog', 'blog'],
                ['Contact', 'contact'],
              ].map(([title, id]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-2xl font-medium text-custom-darkvoid dark:text-custom-snow hover:text-custom-liquidlava transition-colors duration-200"
                >
                  {title}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
