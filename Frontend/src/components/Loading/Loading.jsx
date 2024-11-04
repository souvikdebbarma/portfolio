const Loading = () => {
  return (
    <div className="fixed inset-0 bg-custom-darkvoid z-50 flex flex-col items-center justify-center">
      {/* Logo Animation */}
      <div className="relative mb-8">
        <div className="text-4xl font-bold text-custom-snow animate-pulse">
          SD
        </div>
        {/* Circular Progress */}
        <div className="absolute -inset-4">
          <div className="w-16 h-16 border-4 border-custom-liquidlava/20 border-t-custom-liquidlava rounded-full animate-spin"></div>
        </div>
      </div>
      
      {/* Loading Text */}
      <div className="text-custom-snow/80 font-medium">
        <span className="inline-flex items-center gap-2">
          Loading
          <span className="flex space-x-1">
            <span className="w-2 h-2 bg-custom-liquidlava rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
            <span className="w-2 h-2 bg-custom-liquidlava rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-2 h-2 bg-custom-liquidlava rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Loading; 