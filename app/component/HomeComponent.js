"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { navLinks } from "../utilis/constants";
import Logo from '../assets/logo.png'
import Export2 from '../assets/export2.png'
import Export3 from '../assets/export3.png'
import ButtonImage from "../assets/button.png"
const MotionImage = motion(Image);
const HomeComponent = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center  ">
        <div className="flex w-[1320px] h-[80px] mt-[15px]   items-center justify-between">
          <Image src={Logo} alt="logoImage" className="w-[174px] h-[40px]" />
          <div className="w-[706px] h-[49px]  flex  items-center justify-between">
            <div className="w-[471px] h-[25px] flex justify-around text-[20px] font-[400px]">
              {navLinks.map((obj, index) => {
                return <p key={index}>{obj}</p>;
              })}
            </div>
            <Image src={ButtonImage} alt="buttonImage" className="w-[196px] h-[49px]" />
          </div>
        </div>
        <div className="relative w-full">
          <div className="relative inset-0 flex items-center justify-center z-10">
            <div className="text-[80px] font-[600] top-[90px] absolute w-[1083px] h-[150px] text-center px-[20px] leading-[100px]">
              The Ultimate Companion for Hydration
            </div>
            <div className="w-[489px] h-[76px] bottom-[190px] absolute text-[30px] text-center">
              we believe in the power of hydration. Our mission is simple yet
              vital
            </div>
            <Image
              src={ButtonImage}
              alt="buttonImage"
              className="absolute bottom-[110px] w-[193px] h-[49px]"
            />
            <div className="w-[550px] h-[550px] mt-[20px] rounded-full p-[8px] bg-gradient-to-b from-[#4DFBFB] to-[#788EFF]">
              <div className="w-full h-full rounded-full bg-white" />
            </div>
            <MotionImage
              src={Export2}
              alt="image"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-[150px] h-[150px] absolute left-[90px] bottom-[35px]"
            />

            <MotionImage
              src={Export3}
              alt="image"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-[150px] h-[150px] absolute right-[90px] bottom-[35px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
