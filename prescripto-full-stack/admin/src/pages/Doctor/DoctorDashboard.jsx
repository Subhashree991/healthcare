import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const DoctorDashboard = () => {
  const {
    dToken,
    dashData,
    getDashData,
    cancelAppointment,
    completeAppointment,
  } = useContext(DoctorContext);
  const { slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken]);

  return (
    dashData && (
      <div className="p-5 w-full">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
          <div className="flex items-center gap-4 bg-white p-6 rounded-lg border shadow hover:scale-[1.02] transition-all">
            <img className="w-16" src={assets.earning_icon} alt="Earnings" />
            <div>
              <p className="text-2xl font-semibold text-gray-700">
                {currency} {dashData.earnings}
              </p>
              <p className="text-gray-500">Earnings</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white p-6 rounded-lg border shadow hover:scale-[1.02] transition-all">
            <img
              className="w-16"
              src={assets.appointments_icon}
              alt="Appointments"
            />
            <div>
              <p className="text-2xl font-semibold text-gray-700">
                {dashData.appointments}
              </p>
              <p className="text-gray-500">Appointments</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white p-6 rounded-lg border shadow hover:scale-[1.02] transition-all">
            <img className="w-16" src={assets.patients_icon} alt="Patients" />
            <div>
              <p className="text-2xl font-semibold text-gray-700">
                {dashData.patients}
              </p>
              <p className="text-gray-500">Patients</p>
            </div>
          </div>
        </div>

        {/* Latest Bookings */}
        <div className="bg-white rounded-lg border shadow">
          <div className="flex items-center gap-3 px-6 py-4 border-b">
            <img src={assets.list_icon} alt="List" className="w-5 h-5" />
            <p className="text-lg font-semibold text-gray-700">
              Latest Bookings
            </p>
          </div>

          <div className="divide-y">
            {dashData.latestAppointments.slice(0, 5).map((item, index) => (
              <div
                className="flex items-center px-6 py-4 gap-4 hover:bg-gray-50 transition"
                key={index}
              >
                <img
                  className="rounded-full w-12 h-12 object-cover"
                  src={item.userData.image}
                  alt={item.userData.name}
                />
                <div className="flex-1">
                  <p className="text-gray-800 font-medium">
                    {item.userData.name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    Booking on {slotDateFormat(item.slotDate)}
                  </p>
                </div>
                {item.cancelled ? (
                  <p className="text-red-500 text-sm font-medium">Cancelled</p>
                ) : item.isCompleted ? (
                  <p className="text-green-600 text-sm font-medium">
                    Completed
                  </p>
                ) : (
                  <div className="flex gap-2">
                    <img
                      onClick={() => cancelAppointment(item._id)}
                      className="w-8 cursor-pointer"
                      src={assets.cancel_icon}
                      alt="Cancel"
                    />
                    <img
                      onClick={() => completeAppointment(item._id)}
                      className="w-8 cursor-pointer"
                      src={assets.tick_icon}
                      alt="Complete"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorDashboard;
