import { useState, useEffect } from 'react';
import { galleryCategories, galleryImages } from '../info/GalleryData';

const GalleryContent = () => {
  const [filter, setFilter] = useState("All");
  const [displayImages, setDisplayImages] = useState([]);

  useEffect(() => {
    if (filter === "All") {
      const shuffled = [...galleryImages].sort(() => Math.random() - 0.5);
      setDisplayImages(shuffled);
    } else {
      const filtered = galleryImages.filter(img => img.category === filter);
      setDisplayImages(filtered);
    }
  }, [filter]);

  return (
    <div className="w-full py-12 md:py-20 px-4 sm:px-8 md:px-16 bg-white">
      
      {/* 1. Refined Tab Container */}
      <div className="flex flex-wrap justify-center items-center gap-3 mb-12 md:mb-20">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-lg font-serif text-sm sm:text-base transition-all duration-300 ${
              filter === cat 
                ? 'bg-[#ef233c] text-white shadow-md' 
                : 'bg-transparent text-gray-500 border border-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 2. Responsive Grid (Vertical Rectangles) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {displayImages.map((image) => (
          <div 
            key={image.id} 
            className="relative overflow-hidden rounded-2xl shadow-sm aspect-[3/4] transition-all duration-500"
          >
            {/* Removed transition-transform and group-hover:scale-105 */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            
            {/* Mobile & Desktop category mention */}
            {/* Removed opacity-0 and group-hover classes to keep it visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
              <span className="text-white font-sans font-bold text-[10px] sm:text-xs uppercase tracking-widest bg-[#ef233c] px-3 py-1.5 rounded-md shadow-lg">
                {image.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryContent;