// import Logo from "../assets/logoFooter.png";
// import Image from "next/image";
// import { navLinks, Footertext, FooterIcon } from "../utilis/constants";

// const SiteFooter = () => {
//   return (  
//       <>
//       <div className="w-full h-[265px] flex flex-col">
//         <div className="w-full h-[216px] bg-black flex flex-col gap-[30px] justify-center items-center">
//           <div className="w-[1320px] h-[50px] flex justify-between">
//             <Image src={Logo} alt="logoImage" className="w-[174px] h-[40px]" />
//             <div className="w-[471px] h-[20px] text-white flex justify-around text-[20px] font-[400px]">
//               {navLinks.map((obj, index) => {
//                 return <p key={index}>{obj}</p>;
//               })}
//             </div>
//           </div>
//           <div className="w-[1314px] h-[34px] flex justify-between">
//             <div className="flex gap-[10px]">
//               {FooterIcon.map((obj, index) => {
//                 <Image src={obj} alt={"footer" + index} />;
//               })}
//             </div>
//             <div className="w-[705px] h-[20px] text-white flex justify-around text-[20px] font-[400px]">
//               {Footertext.map((obj, index) => {
//                 return <p key={index}>{obj}</p>;
//               })}
//             </div>
//           </div>
//         </div>
//         <div className="w-full h-[40px] bg-black/80 text-[17px]">
//           <p className="text-center mt-[2px]">
//             Copyright © 2023 BOTOL. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };
// export default SiteFooter;




import Logo from "../assets/logoFooter.png";
import Image from "next/image";
import { navLinks, Footertext, FooterIcon } from "../utilis/constants";

const SiteFooter = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-black flex flex-col gap-6 md:gap-8 justify-center items-center py-6 md:py-8">
        <div className="w-full max-w-[1320px] flex flex-col md:flex-row justify-between items-center px-4 md:px-0">
          <div className="mb-4 md:mb-0">
            <Image
              src={Logo}
              alt="logoImage"
              className="w-[140px] sm:w-[174px] h-auto"
            />
          </div>

          <div className="flex flex-wrap justify-center md:justify-around gap-4 md:gap-6 text-white text-[16px] md:text-[20px] font-[400]">
            {navLinks.map((obj, index) => (
              <p key={index}>{obj}</p>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[1314px] flex flex-col md:flex-row justify-between items-center px-4 md:px-0 mt-4 md:mt-6 gap-4 md:gap-0">
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {FooterIcon.map((obj, index) => (
              <Image key={index} src={obj} alt={"footer" + index} />
            ))}
          </div>

          <div className="flex flex-wrap justify-center md:justify-around gap-2 md:gap-4 text-white text-[16px] md:text-[20px] font-[400]">
            {Footertext.map((obj, index) => (
              <p key={index}>{obj}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-black/80 text-[14px] md:text-[17px] py-2">
        <p className="text-center">Copyright © 2023 BOTOL. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default SiteFooter;
