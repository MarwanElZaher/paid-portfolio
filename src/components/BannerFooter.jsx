import React from "react";
import { bannerFooterFirstText, bannerFooterSecondText } from "../constants";
import NavItem from "./NavItem";
import Vector from '../assets/Vector.svg';
import footerBG from '../assets/footerBG.png';

const BannerFooter = () => {
    return (
        <section className="relative mt-36">
            <img
                className="rounded-3xl w-full h-auto" // Ensure the image is responsive
                src={footerBG}
                loading="lazy"
                alt="background-img"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white gap-8 md:gap-10"> {/* Adjust gap for smaller screens */}
                <img src={Vector} alt="diamondIcon" className="w-12 h-12 md:w-16 md:h-16" /> {/* Responsive icon size */}
                <h2 className="uppercase font-custom font-medium text-4xl md:text-6xl px-5 md:px-10"> {/* Decreased responsive font size */}
                    {bannerFooterFirstText}
                </h2>
                <p className="font-normal text-lg md:text-2xl mx-4 md:mx-80"> {/* Decreased responsive font size and margin */}
                    {bannerFooterSecondText}
                </p>
                <NavItem
                    to="/contactme"
                    classname="bg-white text-black rounded-full py-3 px-6 transition duration-300 hover:bg-gray-300 text-lg md:text-xl" // Responsive text size
                >
                    Contact Me
                </NavItem>
            </div>
        </section>
    );
};

export default BannerFooter;
