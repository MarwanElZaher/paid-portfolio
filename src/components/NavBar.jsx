import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MarqueeBar from './MarqueeBar';
import NavItem from './NavItem';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();  // Get the current route

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className='flex flex-row justify-between items-center p-8 bg-white'>
        <div>
          <h1 className='font-custom font-bold text-2xl'>
            <Link to="/paid-portfolio">HS</Link>
          </h1>
        </div>

        {/* Hamburger Icon (visible only on mobile) */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
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

        {/* Navigation Links (visible on larger screens, hidden on mobile) */}
        <ul className={`hidden md:flex flex-row gap-3 md:gap-5`}>
          <NavItem to="/paid-portfolio/portfolio" isActive={location.pathname === '/paid-portfolio/portfolio'}>Portfolio</NavItem>
          <NavItem to="/paid-portfolio/about" isActive={location.pathname === '/paid-portfolio/about'}>About</NavItem>
          <NavItem to="/paid-portfolio/services" isActive={location.pathname === '/paid-portfolio/services'}>Services</NavItem>
          <NavItem to="/paid-portfolio/contactme" isActive={location.pathname === '/paid-portfolio/contactme'}>Contact Me</NavItem>
        </ul>

        {/* Mobile Menu (visible only on small screens) */}
        <ul className={`list-none flex flex-col gap-3 absolute top-16 left-0 bg-white shadow-md p-4 w-full z-50 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <NavItem onClick={closeMenu} to="/paid-portfolio/portfolio" isActive={location.pathname === '/paid-portfolio/portfolio'}>Portfolio</NavItem>
          <NavItem onClick={closeMenu} to="/paid-portfolio/about" isActive={location.pathname === '/paid-portfolio/about'}>About</NavItem>
          <NavItem onClick={closeMenu} to="/paid-portfolio/services" isActive={location.pathname === '/paid-portfolio/services'}>Services</NavItem>
          <NavItem onClick={closeMenu} to="/paid-portfolio/contactme" isActive={location.pathname === '/paid-portfolio/contactme'}>Contact Me</NavItem>
        </ul>
      </nav>
      <MarqueeBar />
    </>
  );
};

export default Navbar;
