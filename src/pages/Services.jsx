import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import ServicesVideo from '../assets/serviceVideo.png'
import HossamImage from '../assets/hossamImageServicesSection.png'
import DiamondIcon from '../assets/Vector.svg'
import { providedServices, secondSectionTitle, serviceDescription, serviceTitle, thirdSectionFirstParagraph, thirdSectionSecondParagraph, thirdSectionTitle } from '../constants';
import Card from '../components/Card';
import NavItem from '../components/NavItem';
const Services = () => {
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
                className="uppercase cursor-default font-clash font-medium text-9xl w-2/3 mb-8"
              >
                {serviceTitle}
              </h1>
              <p className="uppercase font-normal text-3xl w-2/3 pr-20">{serviceDescription}</p>
            </div>
          </div>

          {/* Right section: Empty */}
          <div className="w-1/3"></div>
          
        </div>

        {/* Images below the content */}
        <div className="flex flex-row w-full mt-8">
          <img
            src={ServicesVideo}
            alt="Hossam IMG"
            className="w-full object-cover"
          />

        </div>
      </section>  
      {/* services */}
      <section className="flex flex-col justify-around items-start my-40 min-h-96">
        <h1 className='uppercase font-clash font-medium text-7xl px-10 m-1'>{secondSectionTitle}</h1>
        <div className='flex flex-row'>
          {providedServices.map((service, index) => (
            <Card
              key={index}
              cardTitle={service.title}
              description={service.description}
              imgSrc={service.image }
              imgAlt={service.title}
              bgColor1="bg-[#EFEFEC]"
            />
            ))}  
       </div>
      </section>

      <section className="w-full h-auto overflow-hidden my-10 px-10">
        <div className='flex flex-row gap-20'>
          <div className='flex flex-col justify-around'>
            <div className='w-1/3'>
              <img
                src={DiamondIcon}
                loading="lazy"
                alt=""
                className="w-12 h-12 mb-10"
                />
                <h2 className='text-6xl font-clash font-medium uppercase'>
                  {thirdSectionTitle}
              </h2>
            </div>
            <div className='flex flex-col justify-between gap-8'>
              <p className='font-normal text-lg'>{ thirdSectionFirstParagraph}</p>
              <p className='font-normal text-lg'>{thirdSectionSecondParagraph}</p>
              <div className='flex items-start justify-start'>
                <NavItem
                      to="/contactme"
                      classname="bg-black text-white rounded-full p-20 transition duration-300 hover:bg-gray-500 hover:scale-x-105"
                >
                  Contact Me
                  </NavItem>
              </div>
            </div>
          </div>
             <img src={HossamImage} alt='hossam-img' />
             
          </div>
      </section>
    </main>
  );
};

export default Services;
