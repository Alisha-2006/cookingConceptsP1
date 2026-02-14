import  { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from 'react-icons/ai';
import logo from '../assets/logoNew.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setMobileDropdown(false);
  };

  // Desktop active styling
  const navLinkStyles = ({ isActive }) => (
    isActive 
      ? 'text-[#ef233c] border-b-2 border-[#ef233c] pb-1 font-bold flex items-center gap-1' 
      : 'text-gray-800 hover:text-[#ef233c] transition-colors flex items-center gap-1'
  );

  const desktopDropdownStyles = ({ isActive }) => (
    `block px-6 py-4 transition-all ${
      isActive 
        ? 'bg-red-50 text-[#ef233c] font-bold border-l-4 border-[#ef233c]' 
        : 'text-gray-700 hover:bg-gray-50 hover:text-[#ef233c]'
    }`
  );

  // Mobile Sidebar active styling
  const mobileNavLinkStyles = ({ isActive }) => (
    `flex items-center w-full px-12 py-5 text-2xl transition-all ${
      isActive 
        ? 'text-[#ef233c] font-bold bg-white/10 border-r-4 border-[#ef233c]' 
        : 'text-gray-800 hover:bg-white/5'
    }`
  );

  return (
    <nav className='fixed w-full h-[64px] flex justify-between items-center px-6 md:px-16 bg-white/80 backdrop-blur-md text-[#333] z-50 border-b border-white/20 shadow-sm'>
      
      {/* Logo Section */}
      <Link to="/" className='flex items-center gap-3'>
        <img className='w-16 h-auto md:w-20' src={logo} alt="logo" />
        <h1 className='text-lg md:text-2xl font-serif font-bold tracking-tight'>Chef Bimba Nayak</h1>
      </Link>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center gap-10 h-full'>
        <ul className='flex items-center gap-x-10 font-serif text-[15px] h-full'>
          <li><NavLink to="/" className={navLinkStyles}>Home</NavLink></li>
          <li 
            className='relative h-full flex items-center group cursor-pointer'
            onMouseEnter={() => setDesktopDropdown(true)}
            onMouseLeave={() => setDesktopDropdown(false)}
          >
            <div className={`flex items-center gap-1 transition-colors ${desktopDropdown ? 'text-[#ef233c]' : 'text-gray-800'}`}>
              About <AiOutlineDown size={12} className={`transition-transform duration-300 ${desktopDropdown ? 'rotate-180' : ''}`} />
            </div>
            <div className={`absolute top-[64px] left-0 w-56 bg-white shadow-2xl rounded-b-xl overflow-hidden border-t-2 border-[#ef233c] transition-all duration-300 ${desktopDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <ul className='flex flex-col'>
                <li><NavLink to="/journey" className={desktopDropdownStyles} onClick={() => setDesktopDropdown(false)}>Her Journey</NavLink></li>
                <li><NavLink to="/awards" className={desktopDropdownStyles} onClick={() => setDesktopDropdown(false)}>Awards & Recognition</NavLink></li>
              </ul>
            </div>
          </li>
          <li><NavLink to="/gallery" className={navLinkStyles}>Gallery</NavLink></li>
          <li><NavLink to="/contact" className={navLinkStyles}>Contact</NavLink></li>
        </ul>
        <button className='btn-primary-red'>Book a Class</button>
      </div>

      {/* Mobile Toggle Icon */}
      <div onClick={handleNav} className='md:hidden z-20 cursor-pointer text-gray-800'>
        {!nav ? <AiOutlineMenu size={26} /> : <AiOutlineClose size={26} />}
      </div>

      {/* Mobile Sidebar Overlay */}
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#d0d4d5] z-10'}>
        <div className="flex flex-col pt-24 h-full overflow-y-auto">
          <ul className='flex flex-col w-full font-serif'>
            
            <li onClick={handleNav}>
              <NavLink to="/" className={mobileNavLinkStyles}>Home</NavLink>
            </li>
            
            {/* About Dropdown: Sidebar Style */}
            <li className='flex flex-col w-full'>
              <button 
                onClick={() => setMobileDropdown(!mobileDropdown)}
                className='flex items-center justify-between w-full px-12 py-5 text-2xl text-gray-800 hover:bg-white/5 transition-colors'
              >
                <span>About</span>
                <AiOutlineDown size={20} className={`transition-transform duration-300 ${mobileDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Nested Sub-links */}
              <div className={`flex flex-col bg-black/5 overflow-hidden transition-all duration-500 ${mobileDropdown ? 'max-h-60' : 'max-h-0'}`}>
                <NavLink 
                  to="/journey" 
                  onClick={handleNav} 
                  className={({isActive}) => `pl-20 py-4 text-xl ${isActive ? 'text-[#ef233c] font-bold' : 'text-gray-600'}`}
                >
                  Her Journey
                </NavLink>
                <NavLink 
                  to="/awards" 
                  onClick={handleNav} 
                  className={({isActive}) => `pl-20 py-4 text-xl ${isActive ? 'text-[#ef233c] font-bold' : 'text-gray-600'}`}
                >
                  Awards
                </NavLink>
              </div>
            </li>

            <li onClick={handleNav}>
              <NavLink to="/gallery" className={mobileNavLinkStyles}>Gallery</NavLink>
            </li>
            <li onClick={handleNav}>
              <NavLink to="/contact" className={mobileNavLinkStyles}>Contact</NavLink>
            </li>
          </ul>

          {/* Book a Class Button */}
          <div className="px-12 mt-8 pb-12">
            <button onClick={handleNav} className='btn-primary-red w-full py-4 text-xl shadow-lg'>
              Book a Class
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;