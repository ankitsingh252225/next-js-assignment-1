"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FAQData } from "../utilis/constants";

export default function FaqHub() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="w-full flex justify-center items-center mt-[40px] h-[886px]"
      style={{ background: "#F3F5F6" }}
    >
      <div className="w-[1326px] h-[726px] mt-[50px] flex flex-col">
        {FAQData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="w-[1320px] overflow-hidden transition-all duration-500 ease-in-out border border-gray-300 rounded-lg bg-white shadow-md"
              style={{ height: isOpen ? "auto" : "162px" }}
            >
              <div
                className={`flex justify-between items-center px-6 py-4 cursor-pointer transition-transform duration-300 ${
                  isOpen ? "-translate-y-1" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-6">
                  <span className="text-[48px] font-bold text-gray-500">
                    {item.number}
                  </span>
                  <span className="text-[32px] font-semibold text-gray-800">
                    {item.question}
                  </span>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    background: isOpen
                      ? "linear-gradient(90deg, #00D1FF 0%, #1A83FF 100%)"
                      : "#F3F5F6",
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-[48px] h-[48px] rounded-full flex items-center justify-center text-[32px] font-bold text-gray-800 shadow-md"
                >
                  +
                </motion.div>
              </div>

              <div
                className={`px-[calc(48px+1.5rem)] pr-[2rem] transition-opacity duration-500 ${
                  isOpen ? "opacity-100 pt-2 pb-4" : "opacity-0 h-0"
                }`}
              >
                <p className="text-[20px] text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
