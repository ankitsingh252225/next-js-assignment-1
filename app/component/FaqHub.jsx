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
    <div className="w-full flex justify-center items-center mt-10 sm:mt-8 px-4 md:px-6 lg:px-0" style={{ background: "#F3F5F6" }}>
      <div className="w-full max-w-[1326px] flex flex-col py-[30px] md:py-[50px]">
        {FAQData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="w-full overflow-hidden transition-all duration-500 ease-in-out border border-gray-300 rounded-lg bg-white shadow-md"
              style={{ height: isOpen ? "auto" : "162px" }}
            >
              <div
                className={`flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 cursor-pointer transition-transform duration-300 ${
                  isOpen ? "-translate-y-1" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-3 sm:gap-6">
                  <span className="text-[32px] sm:text-[48px] font-bold text-gray-500">
                    {item.number}
                  </span>
                  <span className="text-[20px] px-[13px] sm:text-[32px] font-semibold text-gray-800">
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
                  className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] rounded-full flex items-center justify-center text-[24px] sm:text-[32px] font-bold text-gray-800 shadow-md"
                >
                  +
                </motion.div>
              </div>

              <div
                className={`px-[calc(36px+1rem)] sm:px-[calc(48px+1.5rem)] pr-6 sm:pr-8 transition-opacity duration-500 ${
                  isOpen ? "opacity-100 pt-2 pb-4" : "opacity-0 h-0"
                }`}
              >
                <p className="text-[16px] sm:text-[20px] text-gray-700 leading-relaxed">
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
