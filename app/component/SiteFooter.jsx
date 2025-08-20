import Logo from "../assets/logoFooter.png";
import Image from "next/image";
import { navLinks, Footertext, FooterIcon } from "../utilis/constants";

const SiteFooter = () => {
  return (
    <>
      <div className="w-full h-[265px] flex flex-col">
        <div className="w-full h-[216px] bg-black flex flex-col gap-[30px] justify-center items-center">
          <div className="w-[1320px] h-[50px] flex justify-between">
            <Image src={Logo} alt="logoImage" className="w-[174px] h-[40px]" />
            <div className="w-[471px] h-[20px] text-white flex justify-around text-[20px] font-[400px]">
              {navLinks.map((obj, index) => {
                return <p key={index}>{obj}</p>;
              })}
            </div>
          </div>
          <div className="w-[1314px] h-[34px] flex justify-between">
            <div className="flex gap-[10px]">
              {FooterIcon.map((obj, index) => {
                <Image src={obj} alt={"footer" + index} />;
              })}
            </div>
            <div className="w-[705px] h-[20px] text-white flex justify-around text-[20px] font-[400px]">
              {Footertext.map((obj, index) => {
                return <p key={index}>{obj}</p>;
              })}
            </div>
          </div>
        </div>

        <div className="w-full h-[40px] bg-black/80 text-[17px]">
          <p className="text-center mt-[2px]">
            Copyright © 2023 BOTOL. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};
export default SiteFooter;
