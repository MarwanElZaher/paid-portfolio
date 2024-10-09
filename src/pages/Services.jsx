import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import ServicesVideo from '../assets/serviceVideo.png';
import HossamImage from '../assets/hossamImageServicesSection.png';
import DiamondIcon from '../assets/Vector.svg';
import {
  providedServices,
  secondSectionTitle,
  serviceDescription,
  serviceTitle,
  thirdSectionFirstParagraph,
  thirdSectionSecondParagraph,
  thirdSectionTitle,
} from '../constants';
import Card from '../components/Card';
import NavItem from '../components/NavItem';

const Services = () => {
  const { ref: videoRef, isVisible: videoVisible } = useIntersectionObserver({
    threshold: 0.2,
  });

  return (
    <main>
      <section className="w-full h-auto overflow-hidden my-10">
        <div className="flex flex-col md:flex-row w-full">
          {/* Left section: Title and description */}
          <div className="w-full md:w-2/3 flex flex-col justify-center items-start p-10">
            <div
              className={`transition-all duration-1000 ${videoVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
                }`}
            >
              <h1
                ref={videoRef}
                className="uppercase cursor-default font-custom font-medium text-6xl md:text-9xl w-full mb-4"
              >
                {serviceTitle}
              </h1>
              <p className="uppercase font-normal text-xl md:text-3xl w-full pr-20">{serviceDescription}</p>
            </div>
          </div>

          {/* Right section: Empty */}
          <div className="hidden md:block md:w-1/3"></div>
        </div>

        {/* Images below the content */}
        <div className="flex flex-row w-full mt-8">
          <img
            src={ServicesVideo}
            alt="Service Video"
            className="w-full object-cover h-64 md:h-auto"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="flex flex-col justify-around items-start my-20 min-h-96">
        <h1 className='uppercase font-custom font-medium text-5xl md:text-7xl px-10'>{secondSectionTitle}</h1>
        <div className='flex flex-col md:flex-row md:gap-4'>
          {providedServices.map((service, index) => (
            <Card
              key={index}
              cardTitle={service.title}
              description={service.description}
              imgSrc={service.image}
              imgAlt={service.title}
              bgColor1="bg-[#EFEFEC]"
              className="flex-1" // Ensure cards are responsive
            />
          ))}
        </div>
      </section>

      <section className="w-full h-auto overflow-hidden my-10 px-10">
        <div className='flex flex-col md:flex-row gap-10'>
          <div className='flex flex-col justify-around w-full md:w-2/3'>
            <div className='flex items-center mb-4'>
              <img
                src={DiamondIcon}
                loading="lazy"
                alt=""
                className="w-12 h-12 mr-4"
              />
              <h2 className='text-4xl md:text-6xl font-custom font-medium uppercase'>
                {thirdSectionTitle}
              </h2>
            </div>
            <div className='flex flex-col justify-between gap-4'>
              <p className='font-normal text-base md:text-lg'>{thirdSectionFirstParagraph}</p>
              <p className='font-normal text-base md:text-lg'>{thirdSectionSecondParagraph}</p>
              <div className='flex items-start justify-start mt-4'>
                <NavItem
                  to="/contactme"
                  className="bg-black text-white rounded-full p-4 md:p-6 transition duration-300 hover:bg-gray-500 hover:scale-x-105"
                >
                  Contact Me
                </NavItem>
              </div>
            </div>
          </div>
          <img
            src={HossamImage}
            alt='Hossam'
            className="w-full md:w-1/3 h-auto"
          />
        </div>
      </section>
    </main>
  );
};

export default Services;
