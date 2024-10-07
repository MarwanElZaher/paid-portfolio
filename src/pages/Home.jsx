import React from 'react';
import Video from "../assets/Video.png";
import DiamondIcon from '../assets/Vector.svg';
import { homePageSecondSectionSecondText, homePageSecondSectionText, providedServices, recentProjects, recentProjectsTitleFirstPart, recentProjectsTitleSecondPart, whatIcanDoTitle } from '../constants';
import CustomButton from '../components/CustomButton';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import ProjectList from '../components/ProjectsList';
import Card from '../components/Card';

const Home = () => {
  const { ref: videoRef, isVisible: videoVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: textRef, isVisible: textVisible } = useIntersectionObserver({ threshold: 0.2 });
  const { ref: projectsRef, isVisible: recentProjectsVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <main className="overflow-hidden"> {/* Add overflow-hidden to the main */}
      <section>
        <div className='w-full h-auto'>
          <div className='flex flex-col justify-center items-center'>
            <div className={`transition-all duration-1000 ${videoVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h1
                ref={videoRef}
                className="uppercase cursor-default font-clash font-bold text-9xl hover:font-light duration-200 md:text-[8rem] sm:text-[5rem] text-[3rem]"
              >
                Hossam Saieed
              </h1>
            </div>
            <img className='z-10 w-full object-cover' src={Video} alt="video" />
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center min-h-screen">
        <div className={`flex flex-col items-center text-center gap-3 max-w-6xl transition-all duration-1000 ${textVisible ? 'scale-95' : 'scale-75'}`}>
          <img src={DiamondIcon} alt='diamondIcon' className="w-16 sm:w-8" />
          <h1 ref={textRef} className='uppercase font-clash font-medium text-7xl px-10 md:text-5xl sm:text-[8rem] text-[2rem] mx-10'>{homePageSecondSectionText}</h1>
          <img src={DiamondIcon} alt='diamondIcon' className="w-16 sm:w-8" />
          <h2 className='font-normal text-3xl mx-52 md:mx-20 sm:text-[5rem] text-[3rem] sm:mx-10'>{homePageSecondSectionSecondText}</h2>
          <CustomButton
            className='uppercase rounded-full bg-black text-white p-4 font-clash font-medium hover:bg-[#6e6e6b] hover:scale-110 transition-all duration-300'
            text="Learn More"
            to="/about"
          />
        </div>
      </section>

      <section className="flex flex-col justify-center items-center min-h-screen">
        <div className={`gap-[56px] border-t border-b border-grey-800 flex flex-col items-center pt-[80px] pb-[80px] transition-all duration-1000 ${recentProjectsVisible ? 'scale-90' : 'scale-75'}`}>
          <div className='flex flex-col items-center'>
            <p className='uppercase font-clash font-medium text-7xl px-10 m-1 md:text-5xl sm:text-2xl'>{recentProjectsTitleFirstPart}</p>
            <p className='uppercase font-clash font-medium text-7xl px-10 m-1 md:text-5xl sm:text-2xl'>{recentProjectsTitleSecondPart}</p>
          </div>
          <div ref={projectsRef} className={`flex flex-col justify-center items-center gap-10 transition-all duration-1000 ${recentProjectsVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <ProjectList RecentProjects={recentProjects} />
            <CustomButton
              className='uppercase rounded-full bg-black text-white p-4 font-clash font-medium hover:bg-[#6e6e6b] hover:scale-110 transition-all duration-300'
              text="View More"
              to="/portfolio"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-around items-start my-12 min-h-96">
        <h1 className='uppercase font-clash font-medium text-7xl px-10 m-1 md:text-5xl sm:text-4xl'>{whatIcanDoTitle}</h1>
        <div className='flex flex-row flex-wrap justify-center'>
          {providedServices.map((service, index) => (
            <Card
              key={index}
              cardTitle={service.title}
              description={service.description}
              imgSrc={service.image}
              imgAlt={service.title}
              bgColor1="bg-gray-200"
              className="w-full sm:w-1/2 lg:w-1/3"
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
