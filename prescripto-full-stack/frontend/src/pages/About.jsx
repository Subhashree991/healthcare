import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="px-5 md:px-20 lg:px-32 py-10 text-gray-600">
      {/* Title Section */}
      <div className="text-center text-2xl font-semibold text-gray-700 mb-10">
        <p>
          ABOUT <span className="text-primary">US</span>
        </p>
      </div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16 animate-fadeIn">
        <img
          className="w-full md:max-w-[360px] rounded-lg shadow-lg"
          src={assets.about_image}
          alt="About Carepoint"
        />
        <div className="flex flex-col gap-6 md:w-2/4 text-[15px]">
          <p>
            Welcome to{" "}
            <span className="font-semibold text-gray-800"> Carepoint</span>,
            your trusted partner in managing your healthcare needs conveniently
            and efficiently. At Carepoint , we understand the challenges
            individuals face when it comes to scheduling doctor appointments and
            managing their health records.
          </p>
          <p>
            Carepoint is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Carepoint is here to support you every step of the
            way.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="text-xl text-center font-semibold text-gray-700 mb-10">
        <p>
          OUR <span className="text-primary">MISSION</span>
        </p>
      </div>
      <div className="text-center mb-20 animate-slideInUp">
        <p className="text-gray-700 text-lg">
          "To provide seamless healthcare accessibility for everyone,
          everywhere."
        </p>
      </div>

      {/* Team Members Section */}
      <div className="text-xl text-center font-semibold text-gray-700 mb-10">
        <p>
          MEET OUR <span className="text-primary">TEAM</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-slideInUp">
        {[
          { name: "Dr. Sophia Lane", role: "Chief Medical Officer" },
          { name: "James Carter", role: "Head of Technology" },
          { name: "Emma Johnson", role: "Customer Relations Lead" },
        ].map((member, index) => (
          <div
            key={index}
            className="border px-6 py-8 text-center text-[15px] text-gray-600 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="mx-auto mb-2 text-primary text-3xl">👤</div>
            <b className="text-lg text-gray-800">{member.name}</b>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Reviews Section with Animation */}
      <div className="text-xl text-center font-semibold text-gray-700 mb-10">
        <p>
          WHAT OUR <span className="text-primary">CLIENTS SAY</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          {
            feedback:
              " Carepoint has revolutionized how I book my appointments!",
            name: "John Doe",
          },
          {
            feedback:
              "The convenience of managing my health records is unmatched.",
            name: "Jane Smith",
          },
          {
            feedback: "Quick, efficient, and incredibly user-friendly!",
            name: "Michael Johnson",
          },
        ].map((review, index) => (
          <div
            key={index}
            className="border px-6 py-8 text-center text-[15px] text-gray-600 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-slideInUp"
          >
            <p className="mb-2">"{review.feedback}"</p>
            <b className="text-gray-800">- {review.name}</b>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
