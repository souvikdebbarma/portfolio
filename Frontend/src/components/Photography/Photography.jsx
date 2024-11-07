import { useState } from 'react';
import Masonry from 'react-masonry-css';
import { FiX } from 'react-icons/fi';

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Add your photography items here
  const photos = [
    {
      id: 1,
      src: "/assets/canvas/buildings1.jpg",
      title: "Buildings",
      description: "and everything else turned to grey."
    },
    {
      id: 2,
      src: "/assets/canvas/clubs1.jpg",
      title: "Clubs",
      description: "in this crowded place, i am still alone."
    },
    {
      id: 3,
      src: "/assets/canvas/codes1.jpg",
      title: "Codes",
      description: "ambition is a good thing."
    },
    {
      id: 4,
      src: "/assets/canvas/red1.jpg",
      title: "Red",
      description: "red is mischievious."
    },
    {
      id: 5,
      src: "/assets/canvas/street1.jpg",
      title: "Street",
      description: "every night, i walk alone."
    },
    {
      id: 6,
      src: "/assets/canvas/street2.jpg",
      title: "orange?",
      description: "orange is the color of the night."
    },
    // Add more photos...
  ];

  // Breakpoints for responsive layout
  const breakpointColumns = {
    default: 4, // Default number of columns
    1536: 4,    // 2xl
    1280: 3,    // xl
    1024: 3,    // lg
    768: 2,     // md
    640: 2,     // sm
    480: 1      // xs
  };

  return (
    <section id="photography" className="py-12 bg-custom-snow dark:bg-custom-darkvoid">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold text-custom-darkvoid dark:text-custom-snow">
            /
          </h2>
          <h2 className="text-4xl font-bold text-custom-darkvoid dark:text-custom-snow">
            photography
          </h2>
          <div className="flex-grow h-[1px] bg-custom-darkvoid/20 dark:bg-custom-snow/20"></div>
        </div>

        {/* Masonry Grid */}
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex w-auto -ml-4" // Negative margin to counteract item padding
          columnClassName="pl-4 bg-clip-padding" // Padding for columns
        >
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="mb-4 break-inside-avoid cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            >
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay with title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {photo.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Masonry>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-custom-liquidlava transition-colors"
            >
              <FiX size={24} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Photography; 