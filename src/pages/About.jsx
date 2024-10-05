import React from "react";
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import firstAboutImg from '../assets/firstAbout.png';
import secondAboutImg from '../assets/secondAbout.png';
import { aboutDescription, aboutTitle, companyName, hossamSignature, lastPositionDescription, lastPositionTitle, positionDuration, positionDuties, positionDutiesExamples, positionTitle, secondSectionAbout, statistics, statisticsCaption, statisticsTitle, valuedClients } from "../constants";
import DiamondIcon from '../assets/Vector.svg'
import Card from "../components/Card";
import VideoAboutTwo from "../assets/videoTwoAbout.png"
const About = () => {
  const { ref: videoRef, isVisible: videoVisible } = useIntersectionObserver({
    threshold: 0.2,
  });

  return (
    <main>
      <section className="w-full h-auto overflow-hidden my-10">
        <div className="flex flex-row w-full">
          
          {/* Left section: Title and description */}
          <div className="w-2/3 flex flex-col justify-center items-start p-10">
            <div
              className={`transition-all duration-1000 ${
                videoVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
            >
              <h1
                ref={videoRef}
                className="uppercase cursor-default font-clash font-medium text-9xl mb-10"
              >
                {aboutTitle}
              </h1>
              <p className="uppercase font-normal text-2xl w-2/3 pr-20">{aboutDescription}</p>
            </div>
          </div>

          
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
      <section className="w-full h-auto overflow-hidden mt-36">
            <div className="flex flex-col p-10">
              <div className="text-5xl font-normal w-2/3 mb-12">{secondSectionAbout}</div>
              <div className="text-gray-600 text-2xl font-clash font-medium">{hossamSignature}</div>
            </div>
      </section>
      {/* Tech stach section */}
      <section className="bg-black px-10 py-32 mt-36 rounded-3xl">
      <div className="container mx-auto mb-20 px-4">
        <div className="flex flex-col items-center pb-16 border-b border-gray-800">
          <img
            src={DiamondIcon}
            loading="lazy"
            alt=""
            className="w-12 h-12 mb-10"
          />
          <div className="max-w-3xl text-center">
              <h2 className="text-white text-6xl font-clash font-medium uppercase mb-6">{statisticsTitle}</h2>
            <p className="text-[#F8F8F599] text-3xl font-light max-w-xl mx-auto mb-6">
              {statisticsCaption}
              </p>
          </div>
        </div>
        
          {/* Statistics Wrapper */}
          {statistics.map((statistic, index ) => (
            <Card cardType="about"
              key={index}
              cardTitle={statistic.title}
              description={statistic.description}
            />
          ))}
        </div>
        <div className="flex flex-col items-center pb-16 border-b border-[#E6E6E3]">
        <img
            src={DiamondIcon}
            loading="lazy"
            alt=""
            className="w-12 h-12 mb-10"
          />
         <h2 className="text-white text-6xl font-clash font-medium uppercase mb-6">{lastPositionTitle}</h2>
        </div>
        <div className="flex flex-row mt-10 gap-20">
          <div className="w-2/3 flex flex-col">
              <div className="flex flex-row items-end">
                <h2 className="text-white text-7xl font-normal"> {positionTitle} </h2>
                 <p className="text-white text-3xl font-medium">{companyName}</p>
            </div>
            <p className="text-white font-clash text-lg font-medium py-4">{positionDuration}</p>
            <div className="flex flex-col justify-between items-start my-4 ">
              <p className="text-white font-medium text-3xl">{positionDuties}</p>
              <ul className="grid grid-cols-5 gap-2 text-center my-4">
                {positionDutiesExamples.map((duity, index) => (
                  <li className="whitespace-nowrap flex items-center justify-center text-white uppercase rounded-full text-sm px-16 py-2 border-2 border-[#E6E6E3]" key={index}>{duity}</li>
                ) )}
              </ul>
            </div>
          </div>
          <div className="w-1/3 flex items-center px-4">
            <p className="text-lg text-center text-[#F8F8F599] font-clash font-normal">{lastPositionDescription}</p>
          </div>
        </div>
      </section>
      <img className='w-full h-auto' src={VideoAboutTwo} alt="video" />
      <section className="w-full h-auto overflow-hidden my-36 px-10">
        <div className="flex flex-col">
          <div className="flex justify-center items-center">
            <p className="font-clash font-medium text-6xl uppercase mb-12">{valuedClients}</p>
          </div>
          <div className="flex flex-row border-y-2 border-[#E6E6E3]">
            <img src="" alt=""/>
            <img src="" alt=""/>
            <img src="" alt=""/>
            <img src="" alt=""/>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
