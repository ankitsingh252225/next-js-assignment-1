"use client";
import React, { useEffect } from "react";
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
  const bottleScrollY = useTransform(scrollYProgress, [0, 0.09], [80, 456]);

  const CapScrolly = useTransform(scrollYProgress, [0, 0.09], [-55, 665]);

  useEffect(() => {
    scrollYProgress.onChange((v) => console.log("Scroll:", v));
  }, [scrollYProgress]);

  return (
    <>
      <div className="w-full h-screen  flex flex-col items-center  ">
        <div className="flex w-[1320px] h-[80px] mt-[15px]   items-center justify-between">
          <Image src={Logo} alt="logoImage" className="w-[174px] h-[40px]" />
          <div className="w-[706px] h-[49px]  flex  items-center justify-between">
            <div className="w-[471px] h-[25px] flex justify-around text-[20px] font-[400px]">
              {navLinks.map((obj, index) => {
                return <p key={index}>{obj}</p>;
              })}
            </div>
            <GradientButton text="INQUIRY NOW" />
          </div>
        </div>
        <div className="relative w-full h-screen flex items-center justify-center">
          <motion.div
            initial={{ width: 370, height: 370, scale: 0.8 }}
            animate={{ width: 500, height: 500, scale: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="relative rounded-full p-[8px] bg-gradient-to-b from-[#4DFBFB] to-[#788EFF] flex items-center justify-center"
          >
            <div className="w-full h-full rounded-full bg-white" />

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="text-[65px] font-[600] top-[90px] absolute w-[906px] h-[150px] text-center px-[20px] leading-[70px]"
            >
              The Ultimate Companion for Hydration
              <p className="text-[27px] font-[400] leading-10 mx-[188px] mt-[10px]">
                {" "}
                we believe in the power of hydration. Our mission is simple yet
                vital
              </p>
              <GradientButton
                text="INQUIRY NOW"
                className="absolute left-[360px] mt-[20px]"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: -90 }}
            animate={{ y: 80 }}
            style={{ y: bottleScrollY }} 
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute flex justify-center items-center z-[100]"
          >
            <Image
              src={BottleDown}
              alt="Bottle"
              width={186}
              height={793}
              className="pointer-events-none select-none mt-[700px]"
            />
          </motion.div>

          <motion.div
            initial={{ y: 120 }}
            animate={{ y: -55 }}
            style={{ y: CapScrolly }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute flex justify-center items-center z-[100]"
          >
            <Image
              src={BottleCap}
              alt="Cap"
              width={186}
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
          className="w-[150px] h-[150px] absolute left-[90px] bottom-[35px]"
        />

        <MotionImage
          src={Export3}
          alt="image"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-[150px] h-[150px] absolute right-[90px] bottom-[35px]"
        />
      </div>
    </>
  );
};

export default IntroBanner;
