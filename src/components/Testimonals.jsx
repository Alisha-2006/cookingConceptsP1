import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import { AiFillStar } from 'react-icons/ai';

const Testimonials = () => {
  const scrollRef = useRef(null);

  // 1. Added a "rating" property to each review object
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Pastry Chef & Owner",
      initials: "SJ",
      rating: 5, // 5 stars
      text: "Taking the advanced sugarcraft course was the best investment for my career. Chef Bimba's attention to detail is unmatched.",
    },
    {
      id: 2,
      name: "Michael Ross",
      role: "Happy Client",
      initials: "MR",
      rating: 4, // 4 stars
      text: "The wedding cake Chef Bimba created for us was simply magical. The flavors were exquisite and our guests loved it!",
    },
    {
      id: 3,
      name: "Anita Lee",
      role: "Workshop Student",
      initials: "AL",
      rating: 5, // 5 stars
      text: "As a hobby baker, I was intimidated at first, but Bimba's teaching style is so encouraging and easy to follow.",
    },
    {
      id: 4,
      name: "David Chen",
      role: "Aspiring Baker",
      initials: "DC",
      rating: 3, // 3 stars
      text: "The expertise shared is great. I moved from basic sponges to multi-tiered masterpieces in just a few months.",
    },
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 420;
    if (direction === 'left') {
      current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-[#fdfaf8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="relative flex flex-col items-center mb-12 md:mb-16">
          <div className="text-center">
            <span className="inline-block px-4 py-1 rounded-full border border-red-100 bg-red-50 text-[#ef233c] text-[10px] font-bold uppercase tracking-widest mb-4">
              ★ Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-gray-900">
              Stories from the Kitchen
            </h2>
          </div>

          <div className="hidden md:flex gap-3 absolute right-0 bottom-0">
            <button onClick={() => scroll('left')} className="p-3 border border-gray-200 rounded-full hover:bg-white hover:shadow-md transition-all active:scale-90">
              <HiOutlineArrowLeft size={20} className="text-gray-700" />
            </button>
            <button onClick={() => scroll('right')} className="p-3 border border-gray-200 rounded-full hover:bg-white hover:shadow-md transition-all active:scale-90">
              <HiOutlineArrowRight size={20} className="text-gray-700" />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex overflow-x-auto gap-8 pb-10 no-scrollbar snap-x snap-mandatory">
          {reviews.map((review) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="min-w-[300px] md:min-w-[380px] max-w-[380px] flex-shrink-0 snap-center bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-[350px] justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {/* 2. Replace hardcoded 5 with review.rating */}
                  {[...Array(review.rating)].map((_, i) => (
                    <AiFillStar key={i} className="text-[#ef233c]" size={18} />
                  ))}
                  {/* 3. Optional: Add grey stars for the remaining score out of 5 */}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <AiFillStar key={i} className="text-gray-200" size={18} />
                  ))}
                </div>
                <p className="text-gray-700 font-serif italic leading-relaxed text-base md:text-lg">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#ef233c] font-bold text-sm">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-gray-900 text-sm md:text-base">{review.name}</h4>
                  <p className="text-gray-400 text-xs font-serif uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;