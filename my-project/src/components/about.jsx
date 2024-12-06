import React from 'react';
import Marquee from 'react-fast-marquee';
import Bootstrap from '../assets/bootstrap.png';
import ReactIcon from '../assets/React-icon.png';
import Vite from '../assets/vite-logo.png';
import Next from '../assets/next-logo.png';
import Zustand from '../assets/zustand.png';

function About({ isDarkMode }) {
  return (
    <>
      <div
        className={`absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_29px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%)]${
          isDarkMode ? '' : ''
        }`}
      >
        <div
          className={`flex justify-end bg-gradient-to-t bx${
            isDarkMode
              ? 'bg-slate-950 from-slate-950 to-transparent'
              : 'bg-white from-white via-white to-transparent'
          }`}
        >
          <div
            className={`lg:w-[75%] md:w-[75%] h-screen sm:w-[70%] overflow-x-hidden px-5 pt-12 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-800'
            }`}
          >
            {/* Judul */}
            <h1 className={`text-2xl font-semibold pb-2 ${isDarkMode ? '' : ''}`}>
              About
            </h1>
            {/* Desk */}
            <p
              className={`font-semibold text-md border-b-2 border-dotted w-[85%] pb-5 ${
                isDarkMode ? 'text-gray-500 border-slate-500' : 'text-gray-700 border-black'
              }`}
            >
              A short story of me
            </p>
            <p className="pt-6 w-[85%]">
              Hi! I am Ardhananta Ibanez, a seasoned software engineer with a deep passion for creating elegant and efficient solutions through code. With a strong foundation in JavaScript and TypeScript, along with a comprehensive understanding of various frontend libraries and frameworks, I have been navigating the ever-evolving landscape of web development with enthusiasm and dedication. Currently, I reside in Semarang, Indonesia 🇮🇩.
            </p>
            <p className="pt-5 w-[85%]">
              As a fast learner and adaptive thinker, I thrive in dynamic environments where innovation is the driving force. My collaborative nature allows me to seamlessly integrate with teams, contributing not only my technical prowess but also a humble attitude that values every member's input.
            </p>
            <br />
            <p className='w-[85%]'>
              This blog is my platform to share insights, experiences, and discoveries from my journey as a software engineer. Join me as we delve into the ever-exciting realm of technology, where each line of code has the potential to shape the digital landscape in remarkable ways.
            </p>
            <br />
            <p className="pb-5 w-[85%]">
              Thank you for visiting, and I look forward to embarking on this knowledge-sharing adventure.
            </p>

            {/* skill */}
            <h1
              className={`text-2xl font-semibold pt-7 border-t-2 w-[85%] border-gray-300 ${
                isDarkMode ? ' text-white' : ' text-black'
              }`}
            >
              {'</> Skill'}
            </h1>
            <p>My coding skills</p>
            {/* Display marquee */}
            <div className="py-5 w-[85%]">
              <Marquee autoFill direction='right'>
                <div className="flex mb-5">
                  <div className={`flex items-center gap-2 mx-3  px-3 p-2 rounded-sm ${isDarkMode ? 'bg-slate-800 shadow-lg shadow-black' : 'bg-slate-100/50 shadow-lg'}`}>
                    <img src={ReactIcon} alt="Bootstrap" width={30} />
                    <p className="font-semibold">React JS</p>
                  </div>
                  <div className={`flex items-center gap-2 mx-3  px-3 p-2 rounded-sm ${isDarkMode ? 'bg-slate-800 shadow-lg shadow-black' : 'bg-slate-100/50 shadow-lg'}`}>
                    <img src={Vite} alt="Bootstrap" width={30} />
                    <p className="font-semibold">Vite JS</p>
                  </div>
                  <div className={`flex items-center gap-2 mx-3  px-3 p-2 rounded-sm ${isDarkMode ? 'bg-slate-800 shadow-lg shadow-black' : 'bg-slate-100/50 shadow-lg'}`}>
                    <img src={Next} alt="Bootstrap" width={28} />
                    <p className="font-semibold">Next JS</p>
                  </div>
                  <div className={`flex items-center gap-2 mx-3  px-3 p-2 rounded-sm ${isDarkMode ? 'bg-slate-800 shadow-lg shadow-black' : 'bg-slate-100/50 shadow-lg'}`}>
                    <img src={Zustand} alt="Bootstrap" width={50} />
                    <p className="font-semibold">Zustand</p>
                  </div>
                </div>
              </Marquee>
              <Marquee autoFill direction='left'>
                <div className="flex mb-5">
                <div className={`flex items-center gap-2 mx-3  px-3 p-2 rounded-sm ${isDarkMode ? 'bg-slate-800 shadow-lg shadow-black' : 'bg-slate-100/50 shadow-lg'}`}>
                    <img src={Bootstrap} alt="Bootstrap" width={40} />
                    <p className="font-semibold">Bootstrap</p>
                </div>  
                <div className={`flex items-center gap-2 mx-3  px-3 p-2 rounded-sm ${isDarkMode ? 'bg-slate-800 shadow-lg shadow-black' : 'bg-slate-100/50 shadow-lg'}`}>
                    <img src={Bootstrap} alt="Bootstrap" width={40} />
                    <p className="font-semibold">Bootstrap</p>
                </div>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
