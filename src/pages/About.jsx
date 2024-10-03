import React from "react";
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import firstAboutImg from '../assets/firstAbout.png';
import secondAboutImg from '../assets/secondAbout.png';
import { aboutDescription, aboutTitle } from "../constants";

const About = () => {
  const { ref: videoRef, isVisible: videoVisible } = useIntersectionObserver({
    threshold: 0.2,
  });

  return (
    <main>
      <section className="w-full h-auto overflow-hidden">
        <div className="flex flex-row w-full">
          
          {/* Left section: Title and description */}
          <div className="w-2/3 flex flex-col justify-center items-start p-8">
            <div
              className={`transition-all duration-1000 ${
                videoVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
            >
              <h1
                ref={videoRef}
                className="uppercase cursor-default font-medium text-9xl"
              >
                {aboutTitle}
              </h1>
              <p className="uppercase font-normal text-2xl mr-48 mt-10">{aboutDescription}</p>
            </div>
          </div>

          {/* Right section: Empty */}
          <div className="w-1/3"></div>
          
        </div>

        {/* Images below the content */}
        <div className="flex flex-row w-full mt-8">
          <img
            src={firstAboutImg}
            alt="Hossam IMG"
            className="w-2/3 object-cover"
          />
          <img
            src={secondAboutImg}
            alt="Hossam small IMG"
            className="rounded-3xl w-1/3 object-cover"
          />
        </div>
      </section>
    </main>
  );
};

export default About;
