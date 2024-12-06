import React, { useEffect } from 'react';
import Profile from '../assets/Wa.png';
import { BsCloudMoon, BsCloudSun  } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { GiButterflyFlower } from 'react-icons/gi';
import { PiPencilSimpleLine } from 'react-icons/pi';
import { GoProjectRoadmap } from 'react-icons/go';
import { RiMindMap } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function Navbar({ isDayMode, toggleMode }) {
  useEffect(() => {
    document.body.style.backgroundColor = isDayMode ? '#f1f5f9' : '#1f2937';
  }, [isDayMode]);

  return (
    <div id="background" className={`md:w-[23%] absolute lg:w-[17%] md:block hidden lg:block sm:block z-50 h-screen p-5 rounded-e-2xl shadow-2xl shadow-black ${isDayMode ? 'bg-slate-100 shadow-black' : 'bg-slate-900 text-white shadow-black'}`}>
      <div className="block bg-gradient-to-tl h-[15%] mb-10 from-gray-500 via-gray-400 to-gray-300 p-2 rounded-md">
      {/* Mode toggle */}
      <div 
        className="block p-1" 
        onClick={toggleMode} 
        style={{ cursor: 'pointer' }} 
        aria-label={isDayMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      >
        {isDayMode ? <BsCloudMoon  size={25} /> : <BsCloudSun  size={25} />}
      </div>

      {/* Profile */}
      <div className="flex justify-center">
        <div className={`rounded-full border-2 w-[100px] ${isDayMode ? '' : ''}`}>
          <img
            src={Profile}
            alt="Profile Picture"
            className="rounded-full w-full"
          />
        </div>
      </div>
      </div>

      {/* Name and verification */}
      <div className="flex gap-2 pt-5 items-center justify-center">
        <h1 className="font-sans font-semibold md:text-lg text-center sm:text-lg">Ardhananta Ibanez</h1>
      </div>

      {/* Instagram */}
      <div className={`flex justify-center border-b-2 pb-3 ${isDayMode ? 'border-black' : 'border-white'}`}>
        <a href="https://instagram.com/codeiben" className="text-gray-500" target="_blank" rel="noopener noreferrer">@codeiben</a>
      </div>

      {/* Links */}
      <Link to="/My-porto">
        <div className={`flex p-3 gap-5 items-center rounded-md duration-300 mt-5 ${isDayMode ? 'hover:bg-gray-300' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
          <AiOutlineHome size={20} />
          <span className="font-semibold">Home</span>
        </div>
      </Link>

      <Link to="/About">
        <div className={`flex p-3 gap-5 items-center rounded-md duration-300 ${isDayMode ? 'hover:bg-gray-300' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
          <GiButterflyFlower size={20} />
          <span className="font-semibold">About</span>
        </div>
      </Link>

      <Link to="/NotFound">
        <div className={`flex p-3 gap-5 items-center rounded-md duration-300 ${isDayMode ? 'hover:bg-gray-300' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
          <PiPencilSimpleLine size={20} />
          <span className="font-semibold">Blog</span>
        </div>
      </Link>

      <Link to="/NotFound">
        <div className={`flex p-3 gap-5 items-center rounded-md duration-300 ${isDayMode ? 'hover:bg-gray-300' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
          <GoProjectRoadmap size={20} />
          <span className="font-semibold">Project</span>
        </div>
      </Link>

      <Link to="/NotFound">
        <div className={`flex p-3 gap-5 items-center rounded-md duration-300 ${isDayMode ? 'hover:bg-gray-300' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
          <RiMindMap size={20} />
          <span className="font-semibold">Roadmap</span>
        </div>
      </Link>
      <div className="flex justify-center pt-48">
        <p className='text-xs'>© 2024 width ❤️ by codeIben</p>
      </div>
    </div>
  );
}

export default Navbar;
