import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { contactFormSectionTitle, contactMeDescription, ContactMeSecondSectionTitle, contactMeSlogan, contactMeTitle, contactMeWays } from '../constants';
import hossamContactMe from '../assets/hossamContactMe.png'
import contactMeBesideForm from '../assets/contactMeBesideForm.png'
import DiamondIcon from '../assets/Vector.svg'
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';
const ContactMe = () => {
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
                className="uppercase cursor-default font-clash font-medium text-9xl mb-8"
              >
                {contactMeTitle}
              </h1>
              <div className='pr-48'>
                <p className="uppercase font-normal text-3xl">{contactMeDescription}</p>
                </div>
            </div>
          </div>

      
        </div>

        {/* Images below the content */}
        <div className="flex flex-row w-full mt-8">
          <img
            src={hossamContactMe}
            alt="Hossam IMG"
            className="w-full object-cover"
          />

        </div>
      </section>  
      <section className="w-full h-auto overflow-hidden my-36 px-10">
        <div className='flex flex-row items-center justify-center'>
        <h1
          className="w-1/3 uppercase cursor-default text-center font-clash font-medium text-6xl mb-10"
        >
          {ContactMeSecondSectionTitle}
          </h1>
          </div>
        <div className='flex flex-row'>
          {contactMeWays.map((way, index) => (
            <Card
              key={index}
              cardType="verticalSmall"
              cardTitle={way.title}
              description={way.description}
              imgSrc={way.image }
              imgAlt={`${way.title} img`}
              bgColor1="bg-[#E6E6E3]"
            />
            ))}  
       </div>
      </section>
      <section className="w-full h-auto overflow-hidden my-36">
        <div className='flex justify-center items-center'>
          <h1
          className='w-1/3 uppercase cursor-default text-center font-clash font-medium text-6xl mb-10'
            >
              {contactFormSectionTitle}
            </h1>
          </div>
        <div className='flex flex-row justify-between'>
          <div className='p-10 bg-black rounded-3xl flex flex-col justify-center'>
              <ContactForm/>
          </div>
          <img className='w-2/3' src={contactMeBesideForm} alt='cubes-img'/>
        </div>
      </section>
      <section className="w-full h-auto overflow-hidden my-36">
        <div className='flex flex-col justify-center items-center m-10 p-10 '>
        <img
            src={DiamondIcon}
            loading="lazy"
            alt=""
            className="w-12 h-12 mb-10"
          />
        <h1
          className='w-4/5 uppercase cursor-default text-center font-clash font-medium text-7xl mb-10'
        >
          {contactMeSlogan}
          </h1>
          </div>
      </section>
    </main>
  );
};

export default ContactMe;
