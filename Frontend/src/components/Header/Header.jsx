import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { RiMoonLine, RiSunLine } from '@remixicon/react'

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <header className="fixed w-full z-50 bg-white/80 dark:bg-custom-darkvoid/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-custom-darkvoid dark:text-custom-snow inter-700">
            Souvik
          </Link>

          <nav className="flex items-center space-x-8">
            <Link to="/home" className="text-custom-darkvoid dark:text-custom-snow hover:text-custom-liquidlava transition-colors inter-500">
              Home
            </Link>
            <Link to="/about" className="text-custom-darkvoid dark:text-custom-snow hover:text-custom-liquidlava transition-colors inter-500">
              About
            </Link>
            <Link to="/contact" className="text-custom-darkvoid dark:text-custom-snow hover:text-custom-liquidlava transition-colors inter-500">
              Contact
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-custom-snow/10 hover:bg-custom-snow/20 transition-colors"
            >
              {darkMode ? (
                <RiSunLine className="text-custom-snow text-xl" />
              ) : (
                <RiMoonLine className="text-custom-darkvoid text-xl" />
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
