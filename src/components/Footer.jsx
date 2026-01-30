import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#f8f8f8] pt-16 pb-8 font-serif">
      {/* Container max-width reduced to 6xl to prevent elements from drifting too far apart */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Branding */}
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-bold mb-6 tracking-tight">Chef Bimba Nayak</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Mastering the art of sugarcraft and culinary excellence through 
              professional workshops and bespoke creations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#ef233c] hover:border-[#ef233c] transition-all duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#ef233c] hover:border-[#ef233c] transition-all duration-300">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#ef233c] hover:border-[#ef233c] transition-all duration-300">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Centered) */}
          <div className="flex flex-col md:items-center">
            <div className="w-fit">
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">About the Chef</li>
                <li className="hover:text-white transition-colors cursor-pointer">Upcoming Classes</li>
                <li className="hover:text-white transition-colors cursor-pointer">Bespoke Gallery</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact Us</li>
              </ul>
            </div>
          </div>

          {/* Column 3: Get in Touch (Right Aligned to fill the edge) */}
          <div className="flex flex-col md:items-end">
            <div className="w-fit">
              <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-[#ef233c]" />
                  info@chefbimba.com
                </li>
                <li className="flex items-center gap-3 leading-relaxed">
                  <FaMapMarkerAlt className="text-[#ef233c]" />
                  Mumbai, Maharashtra, India
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest">
          <p>© 2026 Chef Bimba Nayak. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;