import React from "react";
import { bannerFooterFirstText, bannerFooterSecondText } from "../constants";
import NavItem from "./NavItem";
import Vector from '../assets/Vector.svg'
const BannerFooter = () => {
    return (
        <section className="relative">
            <img
                src="https://cdn.prod.website-files.com/65b3cf0d9a526d4a210827f2/65b7be53a2a2630025311120_joshua-oluwagbemiga-Z6HQ0EhoD6g-unsplash.webp"
                loading="lazy"
                srcSet="
                    https://assets-global.website-files.com/65b3cf0d9a526d4a210827f2/65b7be53a2a2630025311120_joshua-oluwagbemiga-Z6HQ0EhoD6g-unsplash-p-500.webp 500w,
                    https://assets-global.website-files.com/65b3cf0d9a526d4a210827f2/65b7be53a2a2630025311120_joshua-oluwagbemiga-Z6HQ0EhoD6g-unsplash-p-800.webp 800w,
                    https://assets-global.website-files.com/65b3cf0d9a526d4a210827f2/65b7be53a2a2630025311120_joshua-oluwagbemiga-Z6HQ0EhoD6g-unsplash-p-1080.webp 1080w,
                    https://assets-global.website-files.com/65b3cf0d9a526d4a210827f2/65b7be53a2a2630025311120_joshua-oluwagbemiga-Z6HQ0EhoD6g-unsplash-p-1600.webp 1600w,
                    https://assets-global.website-files.com/65b3cf0d9a526d4a210827f2/65b7be53a2a2630025311120_joshua-oluwagbemiga-Z6HQ0EhoD6g-unsplash.webp 2000w"
                alt="background-img"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white gap-20">
                <img src={Vector} alt="diamondIcon"/>
                <h2 className="uppercase font-medium text-7xl px-10">
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
