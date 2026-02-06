import React from 'react';
import { FaAward } from 'react-icons/fa';

const RecognitionCard = ({ image, badge, title, organization, description }) => {
  return (
    /* The main container handles the shadow, border-radius, and hover lift */
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:-translate-y-2 duration-300 h-full flex flex-col font-serif">
      
      {/* Image styling: Fixed height with object-cover to prevent distortion */}
      <div className="h-72 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Content styling: Padding and relative positioning for the icon */}
      <div className="p-8 relative flex-grow flex flex-col">
        
        {/* Absolute positioned icon to match design */}
        <div className="absolute top-8 right-8 text-[#ef233c] text-xl opacity-80">
          <FaAward />
        </div>

        {/* Badge: Custom pink bg with red text */}
        <div className="mb-4">
          <span className="inline-block bg-[#fae0e3] text-[#ef233c] font-sans font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full italic">
            {badge}
          </span>
        </div>
        
        {/* Typography: Serif for titles, italic for organization */}
        <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
          {title}
        </h3>
        
        <p className="text-[#ef233c] italic text-sm mb-5">
          {organization}
        </p>
        
        {/* Description: Leading-relaxed for better readability */}
        <p className="text-gray-600 text-[15px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default RecognitionCard;