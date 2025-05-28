// import React from "react";
// import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";

// const Banner = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="flex bg-primary rounded-lg  px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
//       {/* ------- Left Side ------- */}
//       <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
//         <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
//           <p>Book Appointment</p>
//           <p className="mt-4">With 100+ Trusted Doctors</p>
//         </div>
//         <button
//           onClick={() => {
//             navigate("/login");
//             scrollTo(0, 0);
//           }}
//           className="bg-white text-sm sm:text-base text-[#595959] px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all "
//         >
//           Create account
//         </button>
//       </div>

//       {/* ------- Right Side ------- */}
//       <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
//         <img
//           className="w-full absolute bottom-0 right-0 max-w-md"
//           src={assets.appointment_img}
//           alt=""
//         />
//       </div>
//     </div>
//   );
// };

// export default Banner;
import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl px-6 sm:px-10 md:px-14 lg:px-16 my-20 md:mx-10 shadow-lg">
      {/* ------- Left Side ------- */}
      <div className="flex-1 py-10 sm:py-12 md:py-16 lg:py-24">
        <div className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          <p>
            Your <span className="text-yellow-300">Health</span>, Our{" "}
            <span className="text-green-300">Priority</span>
          </p>
          <p className="mt-4">
            Consult{" "}
            <span className="text-pink-300">100+ Certified Doctors</span>{" "}
            Instantly
          </p>
        </div>
        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="bg-white text-sm sm:text-base text-gray-800 px-8 py-3 rounded-full mt-8 font-medium hover:bg-yellow-300 hover:text-black transition-all duration-300 ease-in-out shadow-md"
        >
          Get Started
        </button>
      </div>

      {/* ------- Right Side ------- */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md drop-shadow-xl"
          src={assets.appointment_img}
          alt="Doctor appointment illustration"
        />
      </div>
    </div>
  );
};

export default Banner;
