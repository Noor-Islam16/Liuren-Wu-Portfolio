import React from "react";
import { Button } from "@/components/ui/button";
import background from "../assets/background.png";
import profile from "../assets/LiurenWu.png";

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-r from-[#D0E7FF] to-[#FFF] relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
        {/* Left Content */}
        <div className="flex flex-col justify-center text-left">
          <nav className="flex space-x-6 text-gray-600 text-lg mb-6">
            <a href="#" className="hover:text-blue-600">
              About
            </a>
            <a href="#" className="hover:text-blue-600">
              Publications
            </a>
            <a href="#" className="hover:text-blue-600">
              Classes
            </a>
            <Button className="bg-blue-600 text-white px-6">Contact</Button>
          </nav>

          <h1 className="text-6xl font-bold text-gray-900">Liuren Wu</h1>
          <p className="text-xl text-gray-600 mt-2">
            <span className="text-blue-600 font-semibold">
              Wollman Distinguished
            </span>{" "}
            Professor of Finance
          </p>
        </div>

        {/* Right Content (Image) */}
        <div className="relative flex justify-end items-end bg-white">
          <div className="relative w-full max-w-lg ">
            <img
              src={profile}
              alt="Liuren Wu"
              className="w-full h-screen object-cover rounded-full "
            />
            <div className="absolute top-10 left-10 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg shadow-lg">
              50+ Articles
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
