import chefImage from '../assets/chef.jpeg';

const Bio = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-white overflow-hidden font-serif">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-16">
        
        {/* Right Image Side: Custom Tilted Red Frame */}
        {/* order-1 on mobile puts image at top; md:order-2 puts it right on desktop */}
        <div className="w-full md:w-[55%] flex justify-center items-center order-1 md:order-2">
          <div className="relative inline-block w-full max-w-[350px] md:max-w-[500px]">
            
            {/* The "Light Red" Box Frame behind */}
            <div className="absolute inset-0 border-[1.5px] border-red-200 rounded-[1.5rem] md:rounded-[2rem] -rotate-3 scale-105 pointer-events-none"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10 overflow-hidden rounded-[1.3rem] md:rounded-[1.8rem] shadow-xl md:shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
              <img 
                src={chefImage}
                alt="Chef Bimba Nayak" 
                className="w-full h-auto object-cover block"
              />
            </div>

            {/* Subtle decorative glow */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 md:w-64 md:h-64 bg-red-50 rounded-full -z-10 blur-3xl opacity-60"></div>
          </div>
        </div>

        {/* Left Content Side: Refined Typography */}
        <div className="w-full md:w-[45%] flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          <span className="text-[#ef233c] font-sans font-bold text-[10px] md:text-[11px] uppercase tracking-[0.25em] mb-4">
            About Chef Bimba
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Culinary Artist.<br />
            Sugarcraft Pioneer.<br />
            Heritage Guardian.
          </h2>
          
          <div className="space-y-4 md:space-y-6 text-[#a68b77] text-sm md:text-base leading-relaxed max-w-sm md:max-w-md">
            <p>
              From 1972 to Today: A Life in Flavor. Discover the journey of Chef Bimba Nayak as she bridges the gap between delicate sugar art and robust traditional cuisine.
            </p>
          </div>

          <div className="mt-8 md:mt-10 flex flex-row flex-wrap justify-center md:justify-start gap-4">
            {/* Using deep red (#8B0000) for heritage feel */}
            <button className="btn-primary-red">
              Read Her Story
            </button>
            <button className="btn-outline-red">
              View Portfolio
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Bio;