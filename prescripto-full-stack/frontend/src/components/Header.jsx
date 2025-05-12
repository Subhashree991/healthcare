// import React from 'react'
// import { assets } from '../assets/assets'

// const Header = () => {
//     return (
//         <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 '>

//             {/* --------- Header Left --------- */}
//             <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
//                 <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
//                     Book Appointment <br />  With Trusted Doctors
//                 </p>
//                 <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
//                     <img className='w-28' src={assets.group_profiles} alt="" />
//                     <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
//                 </div>
//                 <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
//                     Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
//                 </a>
//             </div>

//             {/* --------- Header Right --------- */}
//             <div className='md:w-1/2 relative'>
//                 <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
//             </div>
//         </div>
//     )
// }

// export default Header
import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl px-6 md:px-10 lg:px-20 py-12 my-16 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* --------- Header Left --------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-5 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </h1>
        <div className="flex items-center gap-4 mt-4">
          <img
            className="w-30 h-20 "
            src={assets.group_profiles}
            alt="Profiles"
          />
          <p className="text-lg">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="mt-8 bg-white text-gray-800 px-8 py-3 rounded-full text-base flex items-center gap-2 hover:bg-gray-100 hover:scale-105 transition-all duration-300"
        >
          Book Appointment
          <img className="w-4" src={assets.arrow_icon} alt="Arrow" />
        </a>
      </div>

      {/* --------- Header Right --------- */}
      <div className="md:w-1/2 flex justify-center relative mt-10 md:mt-0">
        <img
          className="w-full max-w-md rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
          src={assets.header_img}
          alt="Doctors"
        />
      </div>
    </div>
  );
};

export default Header;
