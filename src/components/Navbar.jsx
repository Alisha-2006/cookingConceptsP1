import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logo1.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    // Changed bg-white to bg-white/80 and added backdrop-blur
    <nav className='fixed w-full h-[64px] flex justify-between items-center px-6 md:px-16 bg-white/80 backdrop-blur-md text-[#333] z-50 border-b border-white/20 shadow-sm'>
      
      {/* Logo Section */}
      <div className='flex items-center gap-3'>
        <img className='w-20 h-auto' src={logo} alt="logo" />
        <h1 className='text-xl md:text-2xl font-serif font-bold tracking-tight'>
          Chef Bimba Nayak
        </h1>
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center gap-10'>
        <ul className='flex gap-x-8 font-serif text-[15px] text-gray-800'>
          <li className='cursor-pointer hover:text-[#ef233c] transition-colors'>Home</li>
          <li className='cursor-pointer hover:text-[#ef233c] transition-colors'>About</li>
          <li className='cursor-pointer hover:text-[#ef233c] transition-colors'>Classes</li>
          <li className='cursor-pointer hover:text-[#ef233c] transition-colors'>Gallery</li>
          <li className='cursor-pointer hover:text-[#ef233c] transition-colors'>Contact</li>
        </ul>

        {/* Reusable Button */}
        <button className='btn-outline-red py-1.5 px-5 text-sm'>
          Book a Class
        </button>
      </div>

      {/* Mobile Toggle */}
      <div onClick={handleClick} className='md:hidden z-20 cursor-pointer text-gray-800'>
        {!nav ? <AiOutlineMenu size={26} /> : <AiOutlineClose size={26} />}
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-lg flex flex-col justify-center items-center transition-all duration-300'
        }
      >
        <ul className='flex flex-col gap-8 text-center font-serif text-2xl'>
          <li onClick={handleClick} className='cursor-pointer'>Home</li>
          <li onClick={handleClick} className='cursor-pointer'>About</li>
          <li onClick={handleClick} className='cursor-pointer'>Classes</li>
          <li onClick={handleClick} className='cursor-pointer'>Contact</li>
          <button onClick={handleClick} className='btn-outline-red mt-4'>
            Book a Class
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;