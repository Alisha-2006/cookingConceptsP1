import { FaGraduationCap, FaUtensils, FaBirthdayCake } from 'react-icons/fa';

const Expertise = () => {
  const services = [
    {
      id: 1,
      title: "Sugarcraft Workshops",
      description: "Hands-on classes ranging from beginner basics to advanced sugar flower techniques designed to elevate your skills.",
      icon: <FaGraduationCap className="text-[#ef233c] text-2xl" />,
    },
    {
      id: 2,
      title: "Culinary Consultancy",
      description: "Expert menu planning and kitchen setup advice for aspiring cafes and bakeries looking for a competitive edge.",
      icon: <FaUtensils className="text-[#ef233c] text-2xl" />,
    },
    {
      id: 3,
      title: "Bespoke Cakes",
      description: "Custom-designed cakes that serve as the centerpiece for your most memorable occasions, crafted with precision.",
      icon: <FaBirthdayCake className="text-[#ef233c] text-2xl" />,
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#fae0e3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-gray-900 mb-4">
            Our Expertise
          </h2>
          <p className="text-gray-500 font-serif max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Discover a world of professional services tailored for enthusiasts and businesses alike.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="expertise-card">
              {/* Icon Circle */}
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-4 text-left">
                {service.title}
              </h3>
              <p className="text-gray-600 font-serif text-sm leading-relaxed text-left mb-6">
                {service.description}
              </p>

              {/* Reusable Link Style */}
              <button className="text-[#ef233c] font-serif font-bold text-sm hover:underline flex items-center gap-2 group">
                Learn More 
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;