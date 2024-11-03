import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { RiMoonLine, RiSunLine, RiMenuLine, RiCloseLine } from '@remixicon/react'
import { useState, useEffect } from 'react'

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navLinks = [
    ['Home', '/home'],
    ['About', '/about'],
    ['Contact', '/contact'],
  ]

  return (
    <header className="fixed w-full top-0 z-50 bg-custom-snow/80 dark:bg-custom-darkvoid/80 backdrop-blur-sm border-b border-custom-darkvoid/10 dark:border-custom-snow/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="text-2xl font-bold text-custom-darkvoid dark:text-custom-snow relative group z-50"
          >
            Souvik
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-custom-liquidlava transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(([title, url]) => (
              <Link 
                key={url}
                to={url} 
                className={`relative group text-custom-darkvoid dark:text-custom-snow font-medium hover:text-custom-liquidlava transition-colors duration-200
                  ${location.pathname === url ? 'text-custom-liquidlava' : ''}`}
              >
                {title}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-custom-liquidlava transition-all duration-300 group-hover:w-full
                    ${location.pathname === url ? 'w-full' : 'w-0'}`}
                ></span>
              </Link>
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
              {navLinks.map(([title, url]) => (
                <Link
                  key={url}
                  to={url}
                  className={`text-2xl font-medium text-custom-darkvoid dark:text-custom-snow hover:text-custom-liquidlava transition-colors duration-200
                    ${location.pathname === url ? 'text-custom-liquidlava' : ''}`}
                >
                  {title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
