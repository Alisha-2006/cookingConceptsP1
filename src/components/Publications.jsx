import React from 'react';

const PublicationSection = ({ data }) => {
  const item = data[0];

  return (
    <div className="px-6 md:px-16 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Decorative Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] flex-grow bg-[#fae0e3]"></div>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 whitespace-nowrap px-4">
            Publications
          </h2>
          <div className="h-[1px] flex-grow bg-[#fae0e3]"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Column */}
          <div className="w-full lg:w-1/2 flex gap-8">
            {/* Red Vertical Bar */}
            <div className="w-1.5 bg-[#ef233c] rounded-full h-auto"></div>
            
            <div className="flex flex-col justify-center">
              {/* 1. Small Red Label */}
              <span className="text-[#ef233c] font-sans font-bold text-[11px] uppercase tracking-[0.2em] mb-2">
                {item.label}
              </span>

              {/* 2. Large Publication Title */}
              <h3 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-4 leading-tight">
                {item.title}
              </h3>

              {/* 3. Description Paragraph */}
              <p className="text-gray-600 leading-relaxed text-lg max-w-xl">
                {item.description}
              </p>
            </div>
          </div>

          {/* Image Column: Vertical Rectangle without Brown Border */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative group">
              {/* Removed bg-[#d2c2ad] and padding to eliminate the brown border */}
              <div className="overflow-hidden rounded-lg shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  /* h-[500px] ensures it remains a vertical rectangle */
                  className="w-72 md:w-72 h-[250px] md:h-[350px] object-cover shadow-lg"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PublicationSection;