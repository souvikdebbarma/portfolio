import { useState, useEffect } from 'react';
import { RiArrowUpLine } from '@remixicon/react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 p-3 bg-custom-liquidlava text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <RiArrowUpLine className="text-2xl" />
    </button>
  );
};

export default ScrollToTop; 