// import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";
// import { useNavigate, useParams } from "react-router-dom";

// const Doctors = () => {
//   const { speciality } = useParams();

//   const [filterDoc, setFilterDoc] = useState([]);
//   const [showFilter, setShowFilter] = useState(false);
//   const navigate = useNavigate();

//   const { doctors } = useContext(AppContext);

//   const applyFilter = () => {
//     if (speciality) {
//       setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
//     } else {
//       setFilterDoc(doctors);
//     }
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [doctors, speciality]);

//   return (
//     <div>
//       <p className="text-gray-600">Browse through the doctors specialist.</p>
//       <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
//         <button
//           onClick={() => setShowFilter(!showFilter)}
//           className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${
//             showFilter ? "bg-primary text-white" : ""
//           }`}
//         >
//           Filters
//         </button>
//         <div
//           className={`flex-col gap-4 text-sm text-gray-600 ${
//             showFilter ? "flex" : "hidden sm:flex"
//           }`}
//         >
//           <p
//             onClick={() =>
//               speciality === "General physician"
//                 ? navigate("/doctors")
//                 : navigate("/doctors/General physician")
//             }
//             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
//               speciality === "General physician"
//                 ? "bg-[#E2E5FF] text-black "
//                 : ""
//             }`}
//           >
//             General physician
//           </p>
//           <p
//             onClick={() =>
//               speciality === "Gynecologist"
//                 ? navigate("/doctors")
//                 : navigate("/doctors/Gynecologist")
//             }
//             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
//               speciality === "Gynecologist" ? "bg-[#E2E5FF] text-black " : ""
//             }`}
//           >
//             Gynecologist
//           </p>
//           <p
//             onClick={() =>
//               speciality === "Dermatologist"
//                 ? navigate("/doctors")
//                 : navigate("/doctors/Dermatologist")
//             }
//             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
//               speciality === "Dermatologist" ? "bg-[#E2E5FF] text-black " : ""
//             }`}
//           >
//             Dermatologist
//           </p>
//           <p
//             onClick={() =>
//               speciality === "Pediatricians"
//                 ? navigate("/doctors")
//                 : navigate("/doctors/Pediatricians")
//             }
//             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
//               speciality === "Pediatricians" ? "bg-[#E2E5FF] text-black " : ""
//             }`}
//           >
//             Pediatricians
//           </p>
//           <p
//             onClick={() =>
//               speciality === "Neurologist"
//                 ? navigate("/doctors")
//                 : navigate("/doctors/Neurologist")
//             }
//             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
//               speciality === "Neurologist" ? "bg-[#E2E5FF] text-black " : ""
//             }`}
//           >
//             Neurologist
//           </p>
//           <p
//             onClick={() =>
//               speciality === "Gastroenterologist"
//                 ? navigate("/doctors")
//                 : navigate("/doctors/Gastroenterologist")
//             }
//             className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
//               speciality === "Gastroenterologist"
//                 ? "bg-[#E2E5FF] text-black "
//                 : ""
//             }`}
//           >
//             Gastroenterologist
//           </p>
//         </div>
//         <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
//           {filterDoc.map((item, index) => (
//             <div
//               onClick={() => {
//                 navigate(`/appointment/${item._id}`);
//                 scrollTo(0, 0);
//               }}
//               className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
//               key={index}
//             >
//               <img className="bg-[#EAEFFF]" src={item.image} alt="" />
//               <div className="p-4">
//                 <div
//                   className={`flex items-center gap-2 text-sm text-center ${
//                     item.available ? "text-green-500" : "text-gray-500"
//                   }`}
//                 >
//                   <p
//                     className={`w-2 h-2 rounded-full ${
//                       item.available ? "bg-green-500" : "bg-gray-500"
//                     }`}
//                   ></p>
//                   <p>{item.available ? "Available" : "Not Available"}</p>
//                 </div>
//                 <p className="text-[#262626] text-lg font-medium">
//                   {item.name}
//                 </p>
//                 <p className="text-[#5C5C5C] text-sm">{item.speciality}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Doctors;
// //
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();

  // Replace doctors context with hardcoded sample data for testing
  const sampleDoctors = [
    // General physicians
    {
      _id: "gp1",
      name: "Dr. Aritra Banerjee",
      image: "https://via.placeholder.com/300x200",
      speciality: "General physician",
      available: true,
      location: "Kolkata, West Bengal",
    },
    {
      _id: "gp2",
      name: "Dr. Neha Ghosh",
      image: "https://via.placeholder.com/300x200",
      speciality: "General physician",
      available: true,
      location: "Durgapur, West Bengal",
    },
    {
      _id: "gp3",
      name: "Dr. Rajib Sen",
      image: "https://via.placeholder.com/300x200",
      speciality: "General physician",
      available: false,
      location: "Siliguri, West Bengal",
    },
    {
      _id: "gp4",
      name: "Dr. Ananya Mitra",
      image: "https://via.placeholder.com/300x200",
      speciality: "General physician",
      available: true,
      location: "Asansol, West Bengal",
    },
    {
      _id: "gp5",
      name: "Dr. Subham Pal",
      image: "https://via.placeholder.com/300x200",
      speciality: "General physician",
      available: true,
      location: "Howrah, West Bengal",
    },
    {
      _id: "gp6",
      name: "Dr. Rina Das",
      image: "https://via.placeholder.com/300x200",
      speciality: "General physician",
      available: false,
      location: "Malda, West Bengal",
    },
    {
      _id: "gp7",
      name: "Dr. Rakesh Basu",
      image: "https://via.placeholder.com/300x200",
      speciality: "General physician",
      available: true,
      location: "Kharagpur, West Bengal",
    },
    {
      _id: "gp8",
      name: "Dr. Aparna Dey",
      image: "https://via.placeholder.com/300x200",
      speciality: "General physician",
      available: true,
      location: "Burdwan, West Bengal",
    },
    {
      _id: "gp9",
      name: "Dr. Tanmoy Chatterjee",
      image: "https://via.placeholder.com/300x200",
      speciality: "General physician",
      available: true,
      location: "Midnapore, West Bengal",
    },
    {
      _id: "gp10",
      name: "Dr. Sudipta Bhattacharya",
      image: "https://via.placeholder.com/300x200",
      speciality: "General physician",
      available: false,
      location: "Berhampore, West Bengal",
    },

    // Gynecologists
    {
      _id: "gyn1",
      name: "Dr. Soma Das",
      image: "https://via.placeholder.com/300x200",
      speciality: "Gynecologist",
      available: true,
      location: "Kolkata, West Bengal",
    },
    {
      _id: "gyn2",
      name: "Dr. Rituparna Roy",
      image: "https://via.placeholder.com/300x200",
      speciality: "Gynecologist",
      available: true,
      location: "Siliguri, West Bengal",
    },
    {
      _id: "gyn3",
      name: "Dr. Papiya Sinha",
      image: "https://via.placeholder.com/300x200",
      speciality: "Gynecologist",
      available: false,
      location: "Howrah, West Bengal",
    },
    {
      _id: "gyn4",
      name: "Dr. Sucharita Bose",
      image: "https://via.placeholder.com/300x200",
      speciality: "Gynecologist",
      available: true,
      location: "Durgapur, West Bengal",
    },
    {
      _id: "gyn5",
      name: "Dr. Sunita Nandy",
      image: "https://via.placeholder.com/300x200",
      speciality: "Gynecologist",
      available: true,
      location: "Kharagpur, West Bengal",
    },
    {
      _id: "gyn6",
      name: "Dr. Chandrima Halder",
      image: "https://via.placeholder.com/300x200",
      speciality: "Gynecologist",
      available: false,
      location: "Berhampore, West Bengal",
    },
    {
      _id: "gyn7",
      name: "Dr. Debjani Mitra",
      image: "https://via.placeholder.com/300x200",
      speciality: "Gynecologist",
      available: true,
      location: "Midnapore, West Bengal",
    },
    {
      _id: "gyn8",
      name: "Dr. Asha Paul",
      image: "https://via.placeholder.com/300x200",
      speciality: "Gynecologist",
      available: true,
      location: "Asansol, West Bengal",
    },
    {
      _id: "gyn9",
      name: "Dr. Rina Ghosh",
      image: "https://via.placeholder.com/300x200",
      speciality: "Gynecologist",
      available: true,
      location: "Burdwan, West Bengal",
    },
    {
      _id: "gyn10",
      name: "Dr. Priya Dutta",
      image: "https://via.placeholder.com/300x200",
      speciality: "Gynecologist",
      available: false,
      location: "Malda, West Bengal",
    },

    // Dermatologists
    {
      _id: "der1",
      name: "Dr. Ankit Roy",
      image: "https://via.placeholder.com/300x200",
      speciality: "Dermatologist",
      available: true,
      location: "Kolkata, West Bengal",
    },
    {
      _id: "der2",
      name: "Dr. Soumya Dey",
      image: "https://via.placeholder.com/300x200",
      speciality: "Dermatologist",
      available: true,
      location: "Siliguri, West Bengal",
    },
    {
      _id: "der3",
      name: "Dr. Arpita Ghosh",
      image: "https://via.placeholder.com/300x200",
      speciality: "Dermatologist",
      available: true,
      location: "Howrah, West Bengal",
    },
    {
      _id: "der4",
      name: "Dr. Debasree Saha",
      image: "https://via.placeholder.com/300x200",
      speciality: "Dermatologist",
      available: false,
      location: "Durgapur, West Bengal",
    },
    {
      _id: "der5",
      name: "Dr. Madhumita Bhattacharjee",
      image: "https://via.placeholder.com/300x200",
      speciality: "Dermatologist",
      available: true,
      location: "Kharagpur, West Bengal",
    },
    {
      _id: "der6",
      name: "Dr. Tapati Basu",
      image: "https://via.placeholder.com/300x200",
      speciality: "Dermatologist",
      available: true,
      location: "Berhampore, West Bengal",
    },
    {
      _id: "der7",
      name: "Dr. Swagata Dey",
      image: "https://via.placeholder.com/300x200",
      speciality: "Dermatologist",
      available: true,
      location: "Midnapore, West Bengal",
    },
    {
      _id: "der8",
      name: "Dr. Ritu Chakraborty",
      image: "https://via.placeholder.com/300x200",
      speciality: "Dermatologist",
      available: false,
      location: "Asansol, West Bengal",
    },
    {
      _id: "der9",
      name: "Dr. Dipankar Roy",
      image: "https://via.placeholder.com/300x200",
      speciality: "Dermatologist",
      available: true,
      location: "Burdwan, West Bengal",
    },
    {
      _id: "der10",
      name: "Dr. Priyanka Sen",
      image: "https://via.placeholder.com/300x200",
      speciality: "Dermatologist",
      available: true,
      location: "Malda, West Bengal",
    },

    // Pediatricians
    {
      _id: "ped1",
      name: "Dr. Meera Sen",
      image:
        "https://th.bing.com/th/id/OIP.Vhc_WaY3FKiBrdnd5XGAdQHaHa?w=216&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7/300x200",
      speciality: "Pediatricians",
      available: true,
      location: "Kolkata, West Bengal",
    },
    {
      _id: "ped2",
      name: "Dr. Shreya Dutta",
      image: "https://via.placeholder.com/300x200",
      speciality: "Pediatricians",
      available: false,
      location: "Siliguri, West Bengal",
    },
    {
      _id: "ped3",
      name: "Dr. Ranjan Ghosh",
      image: "https://via.placeholder.com/300x200",
      speciality: "Pediatricians",
      available: true,
      location: "Howrah, West Bengal",
    },
    {
      _id: "ped4",
      name: "Dr. Riya Chakraborty",
      image: "https://via.placeholder.com/300x200",
      speciality: "Pediatricians",
      available: true,
      location: "Durgapur, West Bengal",
    },
    {
      _id: "ped5",
      name: "Dr. Anirban Pal",
      image: "https://via.placeholder.com/300x200",
      speciality: "Pediatricians",
      available: true,
      location: "Kharagpur, West Bengal",
    },
    {
      _id: "ped6",
      name: "Dr. Manisha Nandi",
      image: "https://via.placeholder.com/300x200",
      speciality: "Pediatricians",
      available: true,
      location: "Berhampore, West Bengal",
    },
    {
      _id: "ped7",
      name: "Dr. Rahul Mitra",
      image: "https://via.placeholder.com/300x200",
      speciality: "Pediatricians",
      available: false,
      location: "Midnapore, West Bengal",
    },
    {
      _id: "ped8",
      name: "Dr. Aparajita Bhowmick",
      image: "https://via.placeholder.com/300x200",
      speciality: "Pediatricians",
      available: true,
      location: "Asansol, West Bengal",
    },
    {
      _id: "ped9",
      name: "Dr. Sneha Ghosal",
      image: "https://via.placeholder.com/300x200",
      speciality: "Pediatricians",
      available: true,
      location: "Burdwan, West Bengal",
    },
    {
      _id: "ped10",
      name: "Dr. Pratik Dey",
      image: "https://via.placeholder.com/300x200",
      speciality: "Pediatricians",
      available: true,
      location: "Malda, West Bengal",
    },

    // Neurologists
    {
      _id: "neuro1",
      name: "Dr. Rakesh Dutta",
      image: "https://via.placeholder.com/300x200",
      speciality: "Neurologist",
      available: true,
      location: "Kolkata, West Bengal",
    },
    {
      _id: "neuro2",
      name: "Dr. Ritam Chakraborty",
      image: "https://via.placeholder.com/300x200",
      speciality: "Neurologist",
      available: false,
      location: "Siliguri, West Bengal",
    },
    {
      _id: "neuro3",
      name: "Dr. Avik Mukherjee",
      image: "https://via.placeholder.com/300x200",
      speciality: "Neurologist",
      available: true,
      location: "Howrah, West Bengal",
    },
    {
      _id: "neuro4",
      name: "Dr. Saptarshi Roy",
      image: "https://via.placeholder.com/300x200",
      speciality: "Neurologist",
      available: true,
      location: "Durgapur, West Bengal",
    },
    {
      _id: "neuro5",
      name: "Dr. Tanushree Ghosh",
      image: "https://via.placeholder.com/300x200",
      speciality: "Neurologist",
      available: true,
      location: "Kharagpur, West Bengal",
    },
    {
      _id: "neuro6",
      name: "Dr. Kaushik Sen",
      image: "https://via.placeholder.com/300x200",
      speciality: "Neurologist",
      available: true,
      location: "Berhampore, West Bengal",
    },
    {
      _id: "neuro7",
      name: "Dr. Binoy Dey",
      image: "https://via.placeholder.com/300x200",
      speciality: "Neurologist",
      available: false,
      location: "Midnapore, West Bengal",
    },
    {
      _id: "neuro8",
      name: "Dr. Sharmila Saha",
      image: "https://via.placeholder.com/300x200",
      speciality: "Neurologist",
      available: true,
      location: "Asansol, West Bengal",
    },
    {
      _id: "neuro9",
      name: "Dr. Rina Ghoshal",
      image: "https://via.placeholder.com/300x200",
      speciality: "Neurologist",
      available: true,
      location: "Burdwan, West Bengal",
    },
    {
      _id: "neuro10",
      name: "Dr. Animesh Banerjee",
      image: "https://via.placeholder.com/300x200",
      speciality: "Neurologist",
      available: true,
      location: "Malda, West Bengal",
    },

    // Gastroenterologists
    {
      _id: "gas1",
      name: "Dr. Priya Mukherjee",
      image: "https://via.placeholder.com/300x200",
      speciality: "Gastroenterologist",
      available: true,
      location: "Kolkata, West Bengal",
    },
    {
      _id: "gas2",
      name: "Dr. Partha Nandi",
      image: "https://via.placeholder.com/300x200",
      speciality: "Gastroenterologist",
      available: false,
      location: "Siliguri, West Bengal",
    },
    {
      _id: "gas3",
      name: "Dr. Sudipta Sinha",
      image: "https://via.placeholder.com/300x200",
      speciality: "Gastroenterologist",
      available: true,
      location: "Howrah, West Bengal",
    },
    {
      _id: "gas4",
      name: "Dr. Sumana Dey",
      image: "https://via.placeholder.com/300x200",
      speciality: "Gastroenterologist",
      available: true,
      location: "Durgapur, West Bengal",
    },
    {
      _id: "gas5",
      name: "Dr. Sandip Pal",
      image: "https://via.placeholder.com/300x200",
      speciality: "Gastroenterologist",
      available: true,
      location: "Kharagpur, West Bengal",
    },
    {
      _id: "gas6",
      name: "Dr. Arindam Sen",
      image: "https://via.placeholder.com/300x200",
      speciality: "Gastroenterologist",
      available: false,
      location: "Berhampore, West Bengal",
    },
    {
      _id: "gas7",
      name: "Dr. Piyali Dutta",
      image: "https://via.placeholder.com/300x200",
      speciality: "Gastroenterologist",
      available: true,
      location: "Midnapore, West Bengal",
    },
    {
      _id: "gas8",
      name: "Dr. Nishant Ghosh",
      image: "https://via.placeholder.com/300x200",
      speciality: "Gastroenterologist",
      available: true,
      location: "Asansol, West Bengal",
    },
    {
      _id: "gas9",
      name: "Dr. Ipsita Roy",
      image: "https://via.placeholder.com/300x200",
      speciality: "Gastroenterologist",
      available: true,
      location: "Burdwan, West Bengal",
    },
    {
      _id: "gas10",
      name: "Dr. Tanaya Chatterjee",
      image: "https://via.placeholder.com/300x200",
      speciality: "Gastroenterologist",
      available: true,
      location: "Malda, West Bengal",
    },
  ];

  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(
        sampleDoctors.filter((doc) => doc.speciality === speciality)
      );
    } else {
      setFilterDoc(sampleDoctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [speciality]);

  return (
    <div className="px-4 sm:px-8 py-6">
      <p className="text-gray-600">Browse through the doctors specialist.</p>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? "bg-primary text-white" : ""
          }`}
        >
          Filters
        </button>

        <div
          className={`flex-col gap-4 text-sm text-gray-600 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          {[
            "General physician",
            "Gynecologist",
            "Dermatologist",
            "Pediatricians",
            "Neurologist",
            "Gastroenterologist",
          ].map((spec) => (
            <p
              key={spec}
              onClick={() =>
                speciality === spec
                  ? navigate("/doctors")
                  : navigate(`/doctors/${spec}`)
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality === spec ? "bg-[#E2E5FF] text-black" : ""
              }`}
            >
              {spec}
            </p>
          ))}
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6">
          {filterDoc.length > 0 ? (
            filterDoc.map((item) => (
              <div
                key={item._id}
                onClick={() => {
                  navigate(`/appointment/${item._id}`);
                  scrollTo(0, 0);
                }}
                className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 bg-white shadow"
              >
                <img
                  className="bg-[#EAEFFF] w-full h-48 object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div className="p-4">
                  <div
                    className={`flex items-center gap-2 text-sm text-center ${
                      item.available ? "text-green-500" : "text-gray-500"
                    }`}
                  >
                    <p
                      className={`w-2 h-2 rounded-full ${
                        item.available ? "bg-green-500" : "bg-gray-500"
                      }`}
                    ></p>
                    <p>{item.available ? "Available" : "Not Available"}</p>
                  </div>
                  <p className="text-[#262626] text-lg font-medium mt-2">
                    {item.name}
                  </p>
                  <p className="text-[#5C5C5C] text-sm">{item.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No doctors found for this speciality.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
