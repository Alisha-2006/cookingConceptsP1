
import chefImage from '../assets/chef.jpeg';

const AboutChef = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content Side */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <span className="text-[#ef233c] font-serif font-bold text-xs uppercase tracking-widest mb-4">
            About the Chef
          </span>
          
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-gray-900 leading-tight mb-6">
            Meet <span className='italic'>Chef Bimba <br className="hidden md:block" /> Nayak</span>
          </h2>
          
          <div className="space-y-4 text-gray-600 font-serif leading-relaxed text-base md:text-lg">
            <p>
              With over two decades of culinary expertise, Chef Bimba Nayak is a 
              pioneer in the world of sugarcraft. Her passion lies in transforming 
              simple ingredients into edible masterpieces and empowering students 
              to find their own artistic voice in baking.
            </p>
            <p>
              Known for her meticulous attention to detail and innovative teaching 
              methods, she has mentored hundreds of aspiring bakers who have 
              gone on to start successful businesses.
            </p>
          </div>

          <div className="mt-10">
            {/* Using your existing outline button class */}
            <button className="btn-outline-red px-8">
              Read Full Bio
            </button>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            <img 
              src={chefImage}
              alt="Chef Bimba Nayak" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Subtle background decorative element to match the "minimal" aesthetic */}
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gray-50 rounded-full -z-10 blur-3xl opacity-60"></div>
        </div>

      </div>
    </section>
  );
};

export default AboutChef;