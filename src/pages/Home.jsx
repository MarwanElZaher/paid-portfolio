import React from 'react';
import Video from "../assets/Video.png";
import DiamondIcon from '../assets/Vector.svg';
import { homePageSecondSectionSecondText, homePageSecondSectionText, recentProjectsTitleFirstPart, recentProjectsTitleSecondPart } from '../constants';
import CustomButton from '../components/CustomButton';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import Card from '../components/Card';

const Home = () => {
  const { ref: videoRef, isVisible: videoVisible } = useIntersectionObserver({
    threshold: 0.2,
  });

  const { ref: textRef, isVisible: textVisible } = useIntersectionObserver({
    threshold: 0.2,
  });

  return (
    <main>
      <section>
        <div className='w-full h-auto overflow-hidden'>
          <div className='flex flex-col justify-center items-center'>
            <div className={` transition-all duration-1000                   ${
              videoVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            
              <h1
                ref={videoRef}
                className="uppercase cursor-default font-bold text-[11rem] hover:font-light duration-200 "
              >
                Hossam Saieed
                </h1>
              </div>
            <img className='z-10' src={Video} alt="video" />
          </div>
        </div>
      </section>
      
      <section className="flex flex-col justify-center items-center min-h-screen">
      <div className={`flex flex-col items-center text-center gap-3 max-w-6xl transition-all duration-1000 ${textVisible ? 'scale-95' : 'scale-75'}`}>
      <img src={DiamondIcon} alt='diamondIcon' />
          <h1 ref={textRef} className='uppercase font-medium text-7xl px-10'>{homePageSecondSectionText}</h1>
          <img src={DiamondIcon} alt='diamondIcon' />
          <h2 className='font-normal text-3xl mx-52'>{homePageSecondSectionSecondText }</h2>
          <CustomButton
            className='uppercase rounded-full bg-black text-white p-4 font-medium hover:bg-[#6e6e6b] hover:scale-110 transition-all duration-300'
            text="Learn More"
            to="/about"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center min-h-screen">
        <div className="gap-[56px] border-t border-b border-grey-800 flex flex-col items-center pt-[80px] pb-[80px]">
           <div className='flex flex-col items-center'>
             <p className='uppercase font-medium text-7xl px-10 m-1'>{recentProjectsTitleFirstPart}</p>
            <p className='uppercase font-medium text-7xl px-10 m-1'>{recentProjectsTitleSecondPart}</p>
          </div>
          <Card/>
          <CustomButton
            className='uppercase rounded-full bg-black text-white p-4 font-medium hover:bg-[#6e6e6b] hover:scale-110 transition-all duration-300'
            text="Learn More"
            to="/about"
          />
        </div>
      
      </section>
    </main>
  );
};

export default Home;
