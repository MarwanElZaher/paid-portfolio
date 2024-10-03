import React from 'react';
import { Link } from 'react-router-dom';
import MarqueeBar from './MarqueeBar';
import NavItem from './NavItem';

const Navbar = () => {
  return (
    <>
      <nav className='flex flex-row justify-between items-center p-8'>
        <div>
          <h1 className='font-bold text-2xl'>
            <Link to="/">HS</Link>
          </h1>
        </div>

        <ul className="list-none flex flex-row gap-3">
          <NavItem to="/portfolio">Portfolio</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/contactme">Contact Me</NavItem>
          <NavItem to="/about">About</NavItem>
        </ul>
      </nav>
      <MarqueeBar />
    </>
  );
};
export default Navbar;
