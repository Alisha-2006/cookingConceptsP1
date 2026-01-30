import heroBg from '../assets/sugarcraft.jpg'; 

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image using local file path */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Minimal Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 px-6 max-w-4xl text-center text-white">
        <h1 className="text-3xl md:text-5xl font-serif font-medium leading-tight mb-4 tracking-tight">
          Mastering the Art of <br /> Sugarcraft & Culinary Excellence
        </h1>
        
        <p className="text-sm md:text-base font-light leading-relaxed mb-8 max-w-xl mx-auto opacity-90">
          Join us on a journey of flavor, artistry, and professional 
          baking techniques that transform ingredients into masterpieces.
        </p>

        {/* Buttons using the shared Navbar style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="btn-primary-red w-full sm:w-auto">
            Explore Classes
          </button>
          <button className="btn-ghost-white w-full sm:w-auto">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;