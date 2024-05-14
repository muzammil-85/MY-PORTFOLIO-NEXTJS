/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Hero() {
  return (
    <div className="relative w-full  container px-4 mx-auto flex flex-col justify-center items-center h-screen -mt-20 ">
      <div className="bg-[#60A5FA] h-[120px] top-36 right-20 absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <div className="bg-[#60A5FA] h-[120px] top-[200px] right-[200px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <div className="flex flex-col items-start relative ">
        <div className="flex flex-col items-start SpaceGroteskBold text-[28px] md:text-[50px] lg:text-[64px] ">
          <h1>Hello!👋🏻</h1>
          <h1>My name is Muhammed Muzammil</h1>
          <h1>
            I'm a Full Stack <span className="text">Developer</span>
          </h1>
        </div>
        <div className="bg-[#60A5FA] h-[120px] top-[200px] left-[5px] absolute w-[120px] rounded-full blur-[90px] filter "></div>

        <div className="SpaceGroteskRegular text-[16px] md:text-[20px] lg:text-[24px] py-5">
        <div className="flex items-center">
  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
    <FaGithub className="text-3xl mr-4" />
  </a>
  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="text-3xl" />
  </a>
</div>

        </div>
        <>
          <div className="relative block group  my-7 ml-4 cursor-pointer">
            <span className="absolute inset-0 border-2  border-[#188AEC] rounded-lg"></span>
            <div className="transition bg-[#188AEC] text-white rounded-lg group-hover:-translate-x-0  group-hover:-translate-y-0 -translate-x-3 translate-y-2">
              <div className="py-3 px-10 ">
                <a href = "/cv.pdf" className="mt-1 text-xl">View Resume</a>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
