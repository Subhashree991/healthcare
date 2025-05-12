import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-10 md:pb-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 px-6 md:px-10 lg:px-20">
        {/* --------- Brand Section --------- */}
        <div>
          <img className="mb-5 w-36" src={assets.logo} alt="Carepoint Logo" />
          <p className="text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has been the industry's standard dummy text since the
            1500s.
          </p>
        </div>

        {/* --------- Company Links --------- */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-gray-900 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-gray-900 cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-gray-900 cursor-pointer transition">
              Delivery
            </li>
            <li className="hover:text-gray-900 cursor-pointer transition">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* --------- Contact Info --------- */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Get in Touch
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-gray-900 transition">
              📞 +1-212-456-7890
            </li>
            <li className="hover:text-gray-900 transition">
              ✉️ example@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* --------- Footer Bottom --------- */}
      <div className="mt-10 border-t border-gray-200">
        <p className="text-center text-sm text-gray-500 pt-5">
          © 2024 Carepoint.com — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
