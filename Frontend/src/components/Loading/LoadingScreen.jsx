import { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            if (onLoadingComplete) onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 bg-custom-darkvoid z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${
        progress === 100 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Center Content */}
      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <div className="text-5xl font-bold text-custom-snow mb-8 relative">
          <span className="relative z-10">SD</span>
          {/* Glowing Effect */}
          <div className="absolute inset-0 blur-lg bg-custom-liquidlava/30 z-0"></div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-custom-snow/10 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-custom-liquidlava transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Progress Text */}
        <div className="text-custom-snow/80 font-medium flex items-center gap-4">
          <span>{progress}%</span>
          <span className="flex space-x-1">
            <span className="w-2 h-2 bg-custom-liquidlava rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
            <span className="w-2 h-2 bg-custom-liquidlava rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-2 h-2 bg-custom-liquidlava rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 