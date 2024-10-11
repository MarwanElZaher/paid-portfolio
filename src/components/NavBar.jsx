import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MarqueeBar from './MarqueeBar';
import NavItem from './NavItem';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();  // Get the current route
  console.log(location, "co")
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className='flex flex-row justify-between items-center p-8 bg-white'>
        <div>
          <h1 className='font-custom font-bold text-2xl'>
            <Link to="/">HS</Link>
          </h1>
        </div>

        {/* Hamburger Icon */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {/* Icon (could be SVG or FontAwesome) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`list-none flex flex-row gap-3 md:flex md:gap-5 ${isMenuOpen ? 'flex-col absolute top-16 left-0 bg-white shadow-md p-4 w-full z-50' : 'hidden'}`}>
          <NavItem onClick={toggleMenu} to="/portfolio" isActive={location.pathname === '/portfolio'}>Portfolio</NavItem>
          <NavItem onClick={toggleMenu} to="/about" isActive={location.pathname === '/about'}>About</NavItem>
          <NavItem onClick={toggleMenu} to="/services" isActive={location.pathname === '/services'}>Services</NavItem>
          <NavItem onClick={toggleMenu} to="/contactme" isActive={location.pathname === '/contactme'}>Contact Me</NavItem>
        </ul>
      </nav>
      <MarqueeBar />
    </>
  );
};

export default Navbar;
