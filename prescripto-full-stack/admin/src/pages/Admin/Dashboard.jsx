// import React, { useContext, useEffect } from "react";
// import { assets } from "../../assets/assets";
// import { AdminContext } from "../../context/AdminContext";
// import { AppContext } from "../../context/AppContext";

// const Dashboard = () => {
//   const { aToken, getDashData, cancelAppointment, dashData } =
//     useContext(AdminContext);
//   const { slotDateFormat } = useContext(AppContext);

//   useEffect(() => {
//     if (aToken) {
//       getDashData();
//     }
//   }, [aToken]);

//   return (
//     dashData && (
//       <div className="m-5">
//         <div className="flex flex-wrap gap-3">
//           <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
//             <img className="w-14" src={assets.doctor_icon} alt="" />
//             <div>
//               <p className="text-xl font-semibold text-gray-600">
//                 {dashData.doctors}
//               </p>
//               <p className="text-gray-400">Doctors</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
//             <img className="w-14" src={assets.appointments_icon} alt="" />
//             <div>
//               <p className="text-xl font-semibold text-gray-600">
//                 {dashData.appointments}
//               </p>
//               <p className="text-gray-400">Appointments</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
//             <img className="w-14" src={assets.patients_icon} alt="" />
//             <div>
//               <p className="text-xl font-semibold text-gray-600">
//                 {dashData.patients}
//               </p>
//               <p className="text-gray-400">Patients</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white">
//           <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//             <img src={assets.list_icon} alt="" />
//             <p className="font-semibold">Latest Bookings</p>
//           </div>

//           <div className="pt-4 border border-t-0">
//             {dashData.latestAppointments.slice(0, 5).map((item, index) => (
//               <div
//                 className="flex items-center px-6 py-3 gap-3 hover:bg-gray-100"
//                 key={index}
//               >
//                 <img
//                   className="rounded-full w-10"
//                   src={item.docData.image}
//                   alt=""
//                 />
//                 <div className="flex-1 text-sm">
//                   <p className="text-gray-800 font-medium">
//                     {item.docData.name}
//                   </p>
//                   <p className="text-gray-600 ">
//                     Booking on {slotDateFormat(item.slotDate)}
//                   </p>
//                 </div>
//                 {item.cancelled ? (
//                   <p className="text-red-400 text-xs font-medium">Cancelled</p>
//                 ) : item.isCompleted ? (
//                   <p className="text-green-500 text-xs font-medium">
//                     Completed
//                   </p>
//                 ) : (
//                   <img
//                     onClick={() => cancelAppointment(item._id)}
//                     className="w-10 cursor-pointer"
//                     src={assets.cancel_icon}
//                     alt=""
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default Dashboard;
import React, { useContext, useEffect } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { aToken, getDashData, cancelAppointment, dashData } =
    useContext(AdminContext);
  const { slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getDashData();
    }
  }, [aToken]);

  const StatCard = ({ icon, count, label }) => (
    <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border shadow hover:scale-[1.02] transition-all min-w-[200px]">
      <img className="w-14 h-14 object-contain" src={icon} alt={label} />
      <div>
        <p className="text-2xl font-bold text-gray-700">{count}</p>
        <p className="text-gray-500">{label}</p>
      </div>
    </div>
  );

  return (
    dashData && (
      <main className="p-6 space-y-10 w-full max-w-7xl mx-auto">
        {/* Top Stats */}
        <div className="flex flex-wrap gap-5 justify-between">
          <StatCard
            icon={assets.doctor_icon}
            count={dashData.doctors}
            label="Doctors"
          />
          <StatCard
            icon={assets.appointments_icon}
            count={dashData.appointments}
            label="Appointments"
          />
          <StatCard
            icon={assets.patients_icon}
            count={dashData.patients}
            label="Patients"
          />
        </div>

        {/* Latest Bookings - Full Width */}
        <div className="bg-white rounded-2xl border shadow w-full">
          <div className="flex items-center gap-3 px-6 py-5 border-b">
            <img src={assets.list_icon} alt="List Icon" className="w-5 h-5" />
            <h2 className="text-lg font-semibold text-gray-700">
              Latest Bookings
            </h2>
          </div>

          <div className="divide-y">
            {dashData.latestAppointments.slice(0, 5).map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition"
              >
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={item.docData.image}
                  alt="Doctor"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">
                    {item.docData.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    Booking on {slotDateFormat(item.slotDate)}
                  </p>
                </div>
                {item.cancelled ? (
                  <span className="text-xs font-semibold text-red-500">
                    Cancelled
                  </span>
                ) : item.isCompleted ? (
                  <span className="text-xs font-semibold text-green-600">
                    Completed
                  </span>
                ) : (
                  <img
                    onClick={() => cancelAppointment(item._id)}
                    className="w-8 h-8 cursor-pointer hover:opacity-80"
                    src={assets.cancel_icon}
                    alt="Cancel"
                    title="Cancel Appointment"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    )
  );
};

export default Dashboard;
