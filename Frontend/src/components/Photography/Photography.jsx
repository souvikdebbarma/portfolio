import { useState } from 'react';

const Photography = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    {
      title: "Mountain Sunrise",
      location: "Sikkim, India",
      date: "March 2024",
      camera: "Sony A7III",
      settings: "f/2.8, 1/1000s, ISO 100",
      description: "Captured during sunrise at the peaks of Sikkim, showcasing the natural beauty of the Himalayas.",
      image: "/photography/mountain.jpg", // Add your photo path
      category: "Landscape"
    },
    {
      title: "Urban Life",
      location: "Bangalore, India",
      date: "February 2024",
      camera: "Sony A7III",
      settings: "f/1.8, 1/200s, ISO 400",
      description: "A glimpse into the bustling street life of Bangalore's tech hub.",
      image: "/photography/urban.jpg",
      category: "Street"
    },
    // Add more photos
  ];

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  return (
    <section id="photography" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold text-custom-darkvoid dark:text-custom-snow">
            /
          </h2>
          <h2 className="text-4xl font-bold text-custom-darkvoid dark:text-custom-snow">
            photography
          </h2>
          <div className="flex-grow h-[1px] bg-custom-darkvoid/20 dark:bg-custom-snow/20"></div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => handlePhotoClick(photo)}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                  <h3 className="text-xl font-bold text-white">{photo.title}</h3>
                  <div className="flex items-center gap-2 text-white/80">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">{photo.location}</span>
                  </div>
                  <span className="px-3 py-1 text-xs bg-custom-liquidlava/20 text-custom-liquidlava rounded-full inline-block">
                    {photo.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Modal */}
        {showModal && selectedPhoto && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <div 
              className="max-w-7xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Photo Display */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Image */}
                <div className="relative aspect-square md:aspect-auto">
                  <img
                    src={selectedPhoto.image}
                    alt={selectedPhoto.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Photo Details */}
                <div className="text-white space-y-6 p-4">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedPhoto.title}</h2>
                    <div className="flex items-center gap-2 text-white/80">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{selectedPhoto.location}</span>
                    </div>
                  </div>

                  <p className="text-white/80">{selectedPhoto.description}</p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-custom-liquidlava" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{selectedPhoto.camera}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-custom-liquidlava" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{selectedPhoto.settings}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-custom-liquidlava" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{selectedPhoto.date}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <span className="px-4 py-2 bg-custom-liquidlava/20 text-custom-liquidlava rounded-full">
                      {selectedPhoto.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Photography; 