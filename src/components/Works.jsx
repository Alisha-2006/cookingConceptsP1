import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';


const RecentMasterpieces = () => {
  const scrollRef = useRef(null);

  const projects = [
    { id: 1, title: "Wedding Creations", category: "Bespoke Design", image:"https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80" },
    { id: 2, title: "Classroom Moments", category: "Hands-on Learning", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80" },
    { id: 3, title: "Gourmet Chocolates", category: "Artisan Flavors", image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?q=80" },
    { id: 4, title: "Patisserie Art", category: "French Techniques", image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80" },
    { id: 5, title: "Sugar Artistry", category: "Masterclass", image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80" },
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    // Responsive scroll amount: smaller on mobile, larger on desktop
    const scrollAmount = window.innerWidth < 768 ? 260 : 420; 
    if (direction === 'left') {
      current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-8 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        {/* Header: Centered on all screens */}
        <div className="relative flex flex-col items-center mb-8 md:mb-16">
          <div className="text-center">
            <h2 className="text-2xl md:text-5xl font-serif font-medium text-gray-900 mb-1 md:mb-2">
              Recent Masterpieces
            </h2>
            <p className="text-gray-500 font-serif text-xs md:text-base italic">
              A glimpse into our kitchen.
            </p>
          </div>

          {/* Desktop Arrows: Hidden on Mobile */}
          <div className="hidden md:flex gap-3 absolute right-0 bottom-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2.5 border border-gray-200 rounded-full hover:bg-gray-50 transition-all shadow-sm active:scale-90"
            >
              <HiOutlineArrowLeft size={20} className="text-gray-700" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2.5 border border-gray-200 rounded-full hover:bg-gray-50 transition-all shadow-sm active:scale-90"
            >
              <HiOutlineArrowRight size={20} className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 md:gap-8 pb-6 no-scrollbar snap-x snap-mandatory"
        >
          {projects.map((item) => (
            <motion.div 
              key={item.id}
              // Card width scales from 240px (mobile) to 380px (desktop)
              className="min-w-[240px] md:min-w-[380px] flex-shrink-0 snap-center md:snap-start group"
            >
              {/* Image box scales height proportionally */}
              <div className="relative h-48 md:h-60 overflow-hidden rounded-xl md:rounded-2xl mb-3 md:mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="text-left px-2 md:px-0">
                <p className="text-[#ef233c] font-serif text-sm font-bold italic uppercase tracking-widest mt-0.5">
                  {item.category}
                </p>
                <h3 className="text-base md:text-xl font-serif font-medium text-gray-900 leading-tight">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Hint (Optional) */}
        <p className="md:hidden text-center text-[10px] text-gray-400 font-serif uppercase tracking-widest mt-2">
          ← Swipe to explore →
        </p>
      </div>
    </section>
  );
};

export default RecentMasterpieces;