import React from 'react';

const ChefMission = ({ 
  quote = "Preserving our culinary heritage is a labor of love; it's about keeping the soul of our community alive for future generations.",
  label = "Her Mission"
}) => {
  return (
    <section className="w-full py-20 mb-0 bg-[#fae0e3] block overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Decorative Quote Icon - Fixed Red */}
        <div className="mb-6 opacity-20">
          <svg width="45" height="35" viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M13.125 0H0V13.125H8.75C8.75 19.3375 5.6875 22.4 0 22.4V31.5C10.675 31.5 17.5 24.675 17.5 13.125V4.375C17.5 1.96875 15.5312 0 13.125 0ZM40.625 0H27.5V13.125H36.25C36.25 19.3375 33.1875 22.4 27.5 22.4V31.5C38.175 31.5 45 24.675 45 13.125V4.375C45 1.96875 43.0312 0 40.625 0Z" 
              fill="#ef233c" 
            />
          </svg>
        </div>

        {/* The Quote */}
        <h2 className="text-xl md:text-4xl lg:text-[2.6rem] font-serif font-medium italic text-gray-900 leading-[1.3] mb-12 tracking-tight">
          "{quote}"
        </h2>

        {/* Bottom Label Section - Fixed Red */}
        <div className="flex items-center gap-4 w-full justify-center">
          <div className="h-[1px] w-12 md:w-20 bg-[#ef233c]"></div>
          <span className="text-[#ef233c] font-sans font-bold text-[11px] md:text-xs uppercase tracking-[0.3em] whitespace-nowrap">
            {label}
          </span>
          <div className="h-[1px] w-12 md:w-20 bg-[#ef233c]"></div>
        </div>

      </div>
    </section>
  );
};

export default ChefMission;