import React from 'react'

function notFound({isDarkMode}) {
  return (
   <>
    <div className={`absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_29px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%)]${isDarkMode ? '' : ''}`}>
        <div className={`flex justify-end bg-gradient-to-t b${isDarkMode ? 'bg-slate-950 from-slate-950 to-transparent' : 'bg-white from-white via-white to-transparent'}`}>
          <div className={`lg:w-[85%] md:w-[75%] h-screen sm:w-[70%] px-5 pt-12 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                <h1 className='text-7xl font-semibold text-center pt-44'>Page Not Found</h1>
          </div>
        </div>
       </div>
   </>
  )
}

export default notFound;