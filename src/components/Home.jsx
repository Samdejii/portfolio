import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import ReactTyped from 'react-typed'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#131316]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full' >
        <p className='text-yellow-500'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Samuel Adewumi
        </h1>

        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a{" "}
        <ReactTyped
          strings={["Software Engineer", "Developer", "Designer", "Data Analyst"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar="|"
          showCursor={true}
        />
        </h2>

        <p className='text-[#d5d7df] py-4 max-w-[700px]'>
          I’m a frontend developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive web applications.
          </p>
        <div>
        <li className='text-white group border-2  px-6 py-3 my-2 flex items-center
         hover:bg-yellow-500 hover:border-yellow-500 w-40'>
          <a href='/work'>View Work</a>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
        </li>
          {/*<button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-orange-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>*/}
        </div>
        
      </div>
    </div>
  );
};

export default Home;
