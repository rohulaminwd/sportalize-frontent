import React from "react";
import logo from "../assets/image/quran.png";
import Image from "next/image";
import { IconBallVolleyball } from '@tabler/icons-react';

const PrimaryFooter = () => {
  return (
    <div className="w-full h-full sidebar-bg bg-cover">
      <div className="bg-[#1e0e79e5]">
        <div className="text-center max-w-7xl mx-auto w-full pt-5 gap-x-3">
          <div className="flex cursor-pointer my-5 justify-center items-center gap-x-2 text-[22px] font-extrabold font-Oswald">
            <span className='text-white'><IconBallVolleyball size={28} /></span>
            <span className='text2 py-1'>Sportalize</span>
          </div>
        </div>
        <div className="w-full font-all max-w-7xl mx-auto grid grid-clos-1 sm:grid-cols-2 p-5 text-white gap-5">
          <div className="text-center md:text-left">
            <h1
              className="text-[24px] font-Oswald font-extrabold py-2 mt-5 font-all pt-2 sm:mb-5 sm:text-4xl md:text-[36px] text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-600 "
              data-aos="zoom-in-up"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              FIND YOUR PLAY
            </h1>
            <p
              className=" font-Oswald  font-bold sm:text-xl md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#e6a9f5] lg:my-4 "
              data-aos="zoom-in-up"
              data-aos-delay="500"
              data-aos-duration="800"
            >
              Find sports facilities from football pitches to tennis courts in a range of cities across the UK and Ireland
            </p>

          </div>
          <div className="flex items-center justify-between">
            <div className="mx-auto">
              <ul>
                <li className="cursor-pointer text bg-gradient-to-r from-white to-purple-600 hover:text-green-500 duration-200 my-2 hover:translate-x-2">
                  Home
                </li>
                <li className="cursor-pointer text bg-gradient-to-r from-white to-purple-600 hover:text-green-500 duration-200 my-2 hover:translate-x-2">
                  About
                </li>
                <li className="cursor-pointer text bg-gradient-to-r from-white to-purple-600 hover:text-green-500 duration-200 my-2 hover:translate-x-2">
                  Contact
                </li>
              </ul>
            </div>
            <div className="mx-auto">
              <ul>
                <li className="cursor-pointer text bg-gradient-to-r from-white to-purple-600 hover:text-green-500 duration-200 my-2 hover:translate-x-2">
                  Support              </li>
                <li className="cursor-pointer text bg-gradient-to-r from-white to-purple-600 hover:text-green-500 duration-200 my-2 hover:translate-x-2">
                  Booking
                </li>
                <li className="cursor-pointer text bg-gradient-to-r from-white to-purple-600 hover:text-green-500 duration-200 my-2 hover:translate-x-2">
                  Blogs
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text bg-gradient-to-r from-white to-purple-600 py-3 font-all text-center">
          {new Date().getFullYear()} &copy; Sportalize
        </p>
      </div>

    </div>
  );
};

export default PrimaryFooter;
