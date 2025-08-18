import React from "react";
import headerImageLogo from "../asset/headerLogo.png"; 

const HomeSection = () => {
  return (
    <div className="w-[1512px] ">
      <div className="relative w-[1320px] h-[80px] mt-[21px] ml-[96px] bg-white flex items-center justify-between px-4 ">
        
        <div className="w-[706px] h-[49px] flex items-center justify-start ml-[0px]">
          <p className="text-lg font-medium text-gray-700">Left Side Content</p>
        </div>

        <div className="w-[174px] h-[40px] flex items-center justify-end">
          <img
            src={headerImageLogo}
            alt="Logo"
            className="w-[174px] h-[40px] object-contain"
          />
        </div>

      </div>

      <div className="mt-10">
      </div>
    </div>
  );
};

export default HomeSection;

