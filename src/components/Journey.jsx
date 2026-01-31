import React from 'react';

const Journey = () => {
  const timelineEvents = [
    {
      year: "1972",
      title: "The Beginning",
      desc: "Started her culinary journey in a modest kitchen, experimenting with family recipes and discovering her innate passion for flavor.",
      image: "http://googleusercontent.com/image_collection/image_retrieval/2061298185007528651_0"
    },
    {
      year: "1980s",
      title: "Traditional Mastery",
      desc: "Deepened her knowledge of Pathare Prabhu heritage, documenting rare spice blends and traditional cooking techniques.",
      image: "http://googleusercontent.com/image_collection/image_retrieval/3774478272336512437_0"
    },
    {
      year: "1990s",
      title: "Global Expertise",
      desc: "Mastered the delicate art of Sugarcraft at the renowned Wilton School (USA) and PME (UK), bringing international standards to her craft.",
      image: "http://googleusercontent.com/image_collection/image_retrieval/17155889996593745581_0"
    },
    {
      year: "1995",
      title: "Sugarcraft Pioneer",
      desc: "Became one of the first in India to introduce advanced sugar artistry, blending western techniques with local aesthetics.",
      image: "http://googleusercontent.com/image_collection/image_retrieval/7898923137845845329_0"
    },
    {
      year: "2000",
      title: "Cooking Concepts",
      desc: "Launched 'Cooking Concepts,' her signature cooking studio in Mumbai, becoming a hub for aspiring chefs and food enthusiasts.",
      image: "http://googleusercontent.com/image_collection/image_retrieval/4409939920883449570_0"
    },
    {
      year: "2010",
      title: "Culinary Consultant",
      desc: "Began consulting for major hospitality brands, curating heritage menus that celebrate the lost flavors of Maharashtra.",
      image: "http://googleusercontent.com/image_collection/image_retrieval/15131374163653211034_0"
    },
    {
      year: "2018",
      title: "Heritage Guardian",
      desc: "Recognized as a leading voice in preserving community cuisines, conducting high-profile pop-ups across metropolitan India.",
      image: "http://googleusercontent.com/image_collection/image_retrieval/14010106330221640396_0"
    },
    {
      year: "Present",
      title: "Reviving Heritage",
      desc: "Dedicated to preserving lost Pathare Prabhu recipes through workshops, pop-ups, and documentation.",
      image: "http://googleusercontent.com/image_collection/image_retrieval/15949822104570001408_0"
    }
  ];

  return (
    <section className="w-full py-16 md:py-32 bg-white font-serif overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 italic">
            Her Culinary Journey
          </h2>
          <p className="text-[#ef233c] font-sans font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
            Five decades of passion, innovation, and tradition
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Central Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-[1.5px] bg-[#ef233c]/20"></div>

          <div className="space-y-12 md:space-y-24">
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-center w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                
                {/* Text Content Side */}
                <div className="w-full md:w-1/2 flex justify-start md:justify-center pl-10 md:pl-0 px-4 md:px-16">
                  <div className={`flex flex-col ${
                    index % 2 === 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'
                  } mb-8 md:mb-0`}>
                    <span className="text-[#ef233c] font-sans font-bold text-base md:text-lg mb-1 md:mb-2 tracking-widest">
                      {event.year}
                    </span>
                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-sm">
                      {event.desc}
                    </p>
                  </div>
                </div>

                {/* Numbered Central Circle Node */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#ef233c] text-white z-10 shadow-lg border-2 md:border-4 border-white font-sans font-bold text-xs md:text-sm">
                  {index + 1}
                </div>

                {/* Image Side - Static Version (No hover zoom/rotate) */}
                <div className="w-full md:w-1/2 flex justify-start md:justify-center pl-10 md:pl-0 px-4 md:px-16">
                  <div className="relative w-full max-w-[400px]">
                    
                    {/* The Decorative Frame is now fixed/static */}
                    <div className="absolute inset-0 border border-[#ef233c]/20 rounded-2xl md:rounded-3xl -rotate-2 md:-rotate-3 scale-105 pointer-events-none"></div>
                    
                    <div className="relative z-10 overflow-hidden rounded-xl md:rounded-2xl shadow-xl">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-[200px] md:h-[280px] object-cover block" 
                      />
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;