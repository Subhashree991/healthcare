// import React from "react";
// import Navbar from "./components/Navbar";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Doctors from "./pages/Doctors";
// import Login from "./pages/Login";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Appointment from "./pages/Appointment";
// import MyAppointments from "./pages/MyAppointments";
// import MyProfile from "./pages/MyProfile";
// import Footer from "./components/Footer";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Verify from "./pages/Verify";

// const App = () => {
//   return (
//     <div className="mx-4 sm:mx-[10%]">
//       <ToastContainer />
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/doctors" element={<Doctors />} />
//         <Route path="/doctors/:speciality" element={<Doctors />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/appointment/:docId" element={<Appointment />} />
//         <Route path="/my-appointments" element={<MyAppointments />} />
//         <Route path="/my-profile" element={<MyProfile />} />
//         <Route path="/verify" element={<Verify />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default App;
import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import MyAppointments from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify";
import { AppContext } from "./context/AppContext";

const App = () => {
  const { darkMode } = useContext(AppContext);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:speciality" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
          <Route path="/my-appointments" element={<MyAppointments />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
