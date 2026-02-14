import React from 'react';
import { FaAward } from 'react-icons/fa';

const RecognitionCard = ({ image, badge, title, organization, description }) => {
  return (
    /* 1. Static Vertical Container */
    /* Removed hover translation and reduced shadow for a cleaner look */
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 h-full flex flex-col font-serif">
      
      {/* 2. Scaled Image Container */}
      {/* Fixed vertical height: 400px on desktop, 320px on mobile */}
      <div className="h-80 sm:h-[350px] lg:h-[400px] w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          /* object-cover ensures a perfect fit in the vertical rectangle */
          className="w-full h-full object-cover" 
        />
      </div>

      {/* 3. Refined Content Section */}
      <div className="p-8 md:p-10 relative flex-grow flex flex-col">
        
        {/* Award Icon */}
        <div className="absolute top-8 right-8 text-[#ef233c] text-2xl opacity-80 hidden sm:block">
          <FaAward />
        </div>

        {/* Badge */}
        <div className="mb-4">
          <span className="inline-block bg-[#fae0e3] text-[#ef233c] font-sans font-bold text-[10px] md:text-[11px] uppercase tracking-[0.2em] px-3 py-1 rounded-full italic">
            {badge}
          </span>
        </div>
        
        {/* Typography: Scaled for a tighter vertical profile */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight tracking-tight">
          {title}
        </h3>
        
        <p className="text-[#ef233c] italic text-base font-medium mb-4">
          {organization}
        </p>
        
        {/* Description */}
        <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default RecognitionCard;