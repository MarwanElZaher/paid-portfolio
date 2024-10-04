import React from "react";
import { bannerFooterFirstText, bannerFooterSecondText } from "../constants";
import NavItem from "./NavItem";
import Vector from '../assets/Vector.svg'
import footerBG from '../assets/footerBG.png'
const BannerFooter = () => {
    return (
        <section className="relative mt-36">
            <img className="rounded-3xl"
                src={footerBG}
                loading="lazy"
                alt="background-img"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white gap-20">
                <img src={Vector} alt="diamondIcon"/>
                <h2 className="uppercase font-clash font-medium text-7xl px-10">
                    {bannerFooterFirstText}
                </h2>
                <p className="font-normal text-3xl mx-80">
                    {bannerFooterSecondText}
                </p>
                <NavItem
                    to="/contactme"
                    classname="bg-white text-black rounded-full py-3 px-6 transition duration-300 hover:bg-gray-300"
                >Contact Me</NavItem>
            </div>
        </section>
    );
};

export default BannerFooter;
