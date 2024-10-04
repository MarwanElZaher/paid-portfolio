import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import SocialIcons from './SocialIcons';
import BannerFooter from './BannerFooter';

const Footer = () => {
  return (
  <>
    <BannerFooter/>
    <footer className="bg-black p-6 text-center text-white rounded-3xl">
      <div className="container mx-auto flex flex-row justify-between gap-3 p-6 border-b-2 border-gray-500">
        {/* Logo Section */}
        <div className="mb-4">
          <h1 className='font-clash font-clash font-bold text-2xl'>
            <Link to="/">HS</Link>
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="list-none flex flex-col md:flex-row justify-center gap-4 mb-4">
         <NavItem classname="text-white hover:bg-white hover:text-black" to="/portfolio">Portfolio</NavItem>
          <NavItem classname="text-white hover:bg-white hover:text-black"  to="/services">Services</NavItem>
          <NavItem classname="text-white hover:bg-white hover:text-black"  to="/contactme">Contact Me</NavItem>
          <NavItem classname="text-white hover:bg-white hover:text-black"  to="/about">About</NavItem>
        </ul>

            {/* Social Links */}
            <SocialIcons/>
        </div>
        <div>
            {/* Legal Information */}
            <div className="text-gray-500 text-sm font-normal flex flex-row justify-between pt-6">
                <p>© 2024, All Rights Reserved</p>
                <p>Hossam Saieed</p>
            </div>
      </div>
      </footer>
      </>
  );
};

export default Footer;
