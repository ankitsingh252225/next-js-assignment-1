"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { navLinks } from "../utilis/constants";
import Logo from "../assets/logo.png";
import Export2 from "../assets/export2.png";
import Export3 from "../assets/export3.png";
import GradientButton from "./GradientButton";
import BottleDown from "../assets/bottleDown.png";
import BottleCap from "../assets/Bottle-Cap.png";
import { useScroll, useTransform } from "framer-motion";

const MotionImage = motion(Image);
const IntroBanner = () => {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    scrollYProgress.onChange((v) => console.log("Scroll:", v));
  }, [scrollYProgress]);

  const [menuOpen, setMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const circleProps = isMobile
    ? {
        initial: { width: 300, height: 300, scale: 0.7 },
        animate: { width: 410, height: 410, scale: 0.9 },
      }
    : isTablet
    ? {
        initial: { width: 350, height: 350, scale: 0.8 },
        animate: { width: 480, height: 480, scale: 1 },
      }
    : {
        initial: { width: 370, height: 370, scale: 0.8 },
        animate: { width: 500, height: 500, scale: 1 },
      };

  const imageBottelY = isMobile ? -123 : -90;
  const imageCapY = isMobile ? -29 : 120;
  console.log("imageCapY----", imageCapY);

  const animationYBottel = isMobile ? -18 : 80;

  const bottleScrollY = isMobile ? useTransform(scrollYProgress, [0, 0.04], [0,75]) : useTransform(scrollYProgress, [0, 0.09], [80, 456]);

  const CapScrolly = isMobile ? useTransform(scrollYProgress, [0, 0.04], [-55, 311]) : useTransform(scrollYProgress, [0, 0.09], [-55, 665]);




  console.log("CapScrolly----", CapScrolly);

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center relative">
      
        <div className="flex w-full max-w-[1320px] h-[80px] mt-[15px] items-center justify-between px-4 md:px-0">
          <Image
            src={Logo}
            alt="logoImage"
            className=" w-[110px] lg:w-[174px] lg:h-[40px]"
          />

        
          <div className="hidden md:flex  w-[706px] h-[49px] items-center justify-between">
            <div className="w-[471px] h-[25px] flex justify-around text-[20px] font-[400]">
              {navLinks.map((obj, index) => (
                <p key={index}>{obj}</p>
              ))}
            </div>
            <GradientButton text="INQUIRY NOW" />
          </div>

       
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black font-bold text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

       
        {menuOpen && (
          <div className="absolute top-0 left-0 w-[70%] h-[100vh]  bg-white shadow-md flex flex-col items-start px-5 py-4 gap-5 md:hidden z-500 transition-all duration-300">
            {navLinks.map((obj, index) => (
              <p key={index} className="text-black text-lg font-medium">
                {obj}
              </p>
            ))}
            <GradientButton text="INQUIRY NOW" />
          </div>
        )}

        <div className="relative w-full h-screen flex items-center justify-center">
          <motion.div
            {...circleProps}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="relative rounded-full p-[8px] bg-gradient-to-b from-[#4DFBFB] to-[#788EFF] flex items-center justify-center"
          >
            <div className="w-full h-full rounded-full bg-white" />

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="text-[27px] sm:text-[29px] md:text-[65px] font-[600] md:w-[906px] top-[70px] md:top-[130px] absolute  h-[150px] flex flex-col justify-center items-center text-center px-[20px] md:leading-[80px] leading-[40px]"
            >
              The Ultimate Companion for Hydration
              <p className=" text-[18px] sm:text-[20px] md:text-[27px] font-[400] leading-8 md:leading-10 md:mx-[188px] mt-[10px]">
                {" "}
                we believe in the power of hydration. Our mission is simple yet
                vital
              </p>
              <GradientButton
                text="INQUIRY NOW"
                className="absolute mt-[230] md:mt-[300px]"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: imageBottelY }}
            animate={{ y: isMobile ? -5 : animationYBottel }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={ { y: bottleScrollY }} 
            className="absolute flex justify-center items-center md:z-[100]"
          >
            <Image
              src={BottleDown}
              alt="Bottle"
              width={isMobile ? 150 :  isTablet ? 150: 186}
              height={793}
              className="pointer-events-none select-none mt-[700px]"
            />
          </motion.div>

          <motion.div
            initial={{ y: imageCapY }}
            animate={{ y: isMobile ? -40 : -55 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={ { y: CapScrolly }} 
            className="absolute flex justify-center items-center md:z-[100] okok  "
          >
            <Image
              src={BottleCap}
              alt="Cap"
               width={isMobile ? 150 :  isTablet ? 150: 186}
              height={200}
              className="pointer-events-none select-none mt-[3px]"
            />
          </motion.div>
        </div>

        <MotionImage
          src={Export2}
          alt="image"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className={`absolute left-[2%] bottom-[3%] w-[70px] h-[70px] sm:w-[70px] sm:h-[70px] md:w-[150px] md:h-[150px]`}
        />

        <MotionImage
          src={Export3}
          alt="image"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className={`absolute right-[2%] bottom-[3%] w-[70px] h-[70px]  sm:w-[70px] sm:h-[70px] md:w-[150px] md:h-[150px]`}
        />
      </div>
    </>
  );
};

export default IntroBanner;
