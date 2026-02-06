import colorsMarathi from '../assets/colorsMarathi.png';
import saamTV from '../assets/saamTv.png';
import doordarshan from '../assets/doordarshan.png';
import midDay from '../assets/midday.png';

const MediaPresence = () => {
  // Define the data for each media partner
  const mediaLogos = [
    { src: colorsMarathi, alt: 'Colors Marathi' },
    { src: saamTV, alt: 'Saam TV' },
    { src: doordarshan, alt: 'Doordarshan' },
    { src: midDay, alt: 'Mid-Day' }
  ];

  return (
    <div className="px-6 md:px-16 py-12">
      {/* Rounded container with your brand pink */}
      <div className="bg-[#fae0e3] rounded-[40px] py-16 px-8 text-center shadow-sm">
        
        {/* Header Section */}
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2">
          Media Presence
        </h2>
        <p className="text-[#ef233c] font-serif text-medium md:text-base opacity-80 mb-12 tracking-widest">
          Featured across major television networks and publications.
        </p>

        {/* Logo Flex Container */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
          {mediaLogos.map((logo, index) => (
            <div key={index} className="w-32 md:w-48 transition-all duration-500 hover:scale-110">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="w-full h-auto object-contain max-h-20 md:max-h-32 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaPresence;