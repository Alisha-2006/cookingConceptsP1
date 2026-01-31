import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Import routing components
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logo1.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // Helper function to handle active link styling
  const navLinkStyles = ({ isActive }) => (
    isActive 
      ? 'text-[#ef233c] border-b-2 border-[#ef233c] pb-1 font-bold' 
      : 'text-gray-800 hover:text-[#ef233c] transition-colors'
  );

  return (
    <nav className='fixed w-full h-[64px] flex justify-between items-center px-6 md:px-16 bg-white/80 backdrop-blur-md text-[#333] z-50 border-b border-white/20 shadow-sm'>
      
      {/* Logo Section - Uses Link to return Home */}
      <Link to="/" className='flex items-center gap-3'>
        <img className='w-20 h-auto' src={logo} alt="logo" />
        <h1 className='text-xl md:text-2xl font-serif font-bold tracking-tight'>
          Chef Bimba Nayak
        </h1>
      </Link>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center gap-10'>
        <ul className='flex gap-x-8 font-serif text-[15px]'>
          <li>
            <NavLink to="/" className={navLinkStyles}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkStyles}>About</NavLink>
          </li>
          <li>
            <NavLink to="/recipes" className={navLinkStyles}>Recipes</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkStyles}>Contact</NavLink>
          </li>
        </ul>

        <button className='btn-primary-red'>
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
          <li onClick={handleClick}>
            <NavLink to="/" className={navLinkStyles}>Home</NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to="/about" className={navLinkStyles}>About</NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to="/recipes" className={navLinkStyles}>Recipes</NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to="/contact" className={navLinkStyles}>Contact</NavLink>
          </li>
          <button onClick={handleClick} className='btn-primary-red mt-6'>
            Book a Class
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;