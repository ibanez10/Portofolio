import React from 'react';
import { ReactTyped } from 'react-typed';
import { GrArticle } from "react-icons/gr";
import { FaServicestack } from "react-icons/fa";

function Section({ isDarkMode }) {
  return (
      <>
        <div className={`absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_29px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%)]${isDarkMode ? '' : ''}`}>
        <div className={`flex justify-end bg-gradient-to-t b${isDarkMode ? 'bg-slate-950 from-slate-950 to-transparent' : 'bg-white from-white via-white to-transparent'}`}>
          <div className={`lg:w-[75%] overflow-x-hidden md:w-[72%] h-screen sm:w-[70%] px-5 pt-12 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            {/* Type js */}
            <h1 className="text-3xl font-bold pb-2">
              Hello I'm{' '}
              <span>
                <ReactTyped
                  strings={['Ardhananta Ibanez', 'Front-end Developer']}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                  className={isDarkMode ? 'text-blue-500' : 'text-blue-700'}
                />
              </span>
            </h1>
            {/* Status */}
            <a href="#" className={`text-gray-400 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Student | Programmer <span className='text-sm px-1.5 font-mono'>ID</span>
            </a>
            {/* Description about me */}
            <p className={`font-sans font-semibold pt-3 pb-6 leading-8 border-b-2 border-gray-600 border-dotted md:max-w-[80%] sm:max-w-full max-w-[85%] ${isDarkMode ? 'text-gray-300 border-gray-500' : 'text-gray-900'}`}>
              Hello Everyone I'm Ardhananta Ibanez, a student from Vocational School SMKN8 Semarang
              <span className={`px-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                Passionate and seasoned Software Engineer with a strong focus on frontend development.
                Collaborative team player dedicated to delivering efficient, scalable, and visually appealing web applications.
              </span>
            </p>
            {/* My Article */}
            <div className="pt-8 lg:max-w-[80%] md:w-[95%]">
              <h1 className={`font-semibold flex items-center gap-3 ${isDarkMode ? 'text-gray-300 text-xl' : 'text-gray-800 text-xl'}`}><GrArticle />My Article</h1>
              <p className={`font-semibold py-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}>My article from knowledge</p>
              {/* List Article */}
              <div className="placeholder flex-col pt-3 border-b border-gray-400 pb-7">
                <div className="columns-3">
                  <div className="">
                    <img src="https://placehold.co/650x300/black/gray" alt="" className={`hover:backdrop-blur-3xl shadow-md ${isDarkMode ? 'shadow-slate-900' : 'shadow-black'} shadow-lg rounded-md hover:scale-90 ease-out duration-300`}/>
                    <p className={`font-semibold pt-2 ${isDarkMode ?'text-gray-400' : 'text-gray-700'}`}>Nice try didy</p>
                    <p className='text-xs text-gray-500'>Nov 12, 2024</p>
                  </div>
                  <div className="">
                    <img src="https://placehold.co/650x300/black/gray" alt="" className={`hover:backdrop-blur-3xl shadow-md ${isDarkMode ? 'shadow-slate-900' : 'shadow-black'} shadow-lg rounded-md hover:scale-90 ease-out duration-300`}/>
                    <p className={`font-semibold pt-2 ${isDarkMode ?'text-gray-400' : 'text-gray-700'}`}>Nice try didy</p>
                    <p className='text-xs text-gray-500'>Nov 12, 2024</p>
                  </div>
                  <div className="">
                    <img src="https://placehold.co/650x300/black/gray" alt="" className={`hover:backdrop-blur-3xl shadow-md ${isDarkMode ? 'shadow-slate-900' : 'shadow-black'} shadow-lg rounded-md hover:scale-90 ease-out duration-300`}/>
                    <p className={`font-semibold pt-2 ${isDarkMode ?'text-gray-400' : 'text-gray-700'}`}>Nice try didy</p>
                    <p className='text-xs text-gray-500'>Nov 12, 2024</p>
                  </div>
                  {/* Done */}
                </div>
              </div>
                  {/* Service */}
                  <div className="Service pt-6">
                    <h1 className='text-xl flex gap-2 items-center pb-2'>
                      <FaServicestack /> Service
                    </h1>
                    <p className={`font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}>I can do the following services</p>
                  </div>
                  <div className="table">
        
                  </div>
            </div>
          </div>
        </div>
       </div>
      </>
  );
}

export default Section;
