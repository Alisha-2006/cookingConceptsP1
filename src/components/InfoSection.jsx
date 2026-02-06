

const InfoSection = ({ tag, title, description, image, reverse = false }) => {
  return (
    <section className="w-full py-16 md:py-24 bg-white font-serif overflow-hidden">
      <div className={`max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-12 md:gap-20 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        
        {/* Content Side */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#ef233c]"></div>
            <span className="text-[#ef233c] font-sans font-bold text-[10px] uppercase tracking-[0.3em]">
              {tag}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 leading-tight mb-4">
            {title}
          </h2>
          
          <div className="text-gray-600 text-base md:text-lg leading-relaxed">
            {description}
          </div>
        </div>

        {/* Image Side with Decorative Tilted Frame */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative inline-block w-full max-w-[450px]">
            {/* Tilted Frame */}
            <div className={`absolute inset-0 border-[1.5px] border-[#ef233c]/20 rounded-[2rem] scale-105 pointer-events-none ${reverse ? 'rotate-3' : '-rotate-3'}`}></div>
            
            {/* Main Image Container */}
            <div className="relative z-10 overflow-hidden rounded-[1.8rem] shadow-2xl">
              <img 
                src={image}
                alt={title} 
                className="w-full h-[300px] md:h-[400px] object-cover block"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfoSection;