import Image from "next/image";
import ProductImage from "../assets/ProductImage.png";
import GradientButton from "./GradientButton";
import { boxContent, boxWidths } from "../utilis/constants";
const OurStory = () => {
  return (
    <>
      <div className="relative w-full h-[762px] pt-[80px]">
        <Image
          src={ProductImage}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          alt="Product Background"
        />

        <div className="relative z-10 flex justify-around w-full h-full">
          <div className="w-[650px] h-[480px] flex flex-col gap-[40px]   text-justify">
            <header className="w-[412px] h-[115px]">
              <h1 className="text-[60px] font-[600] text-white">About Us</h1>
              <p className="text-[20px] font-[400]  text-white">
                HEALTH, HAPPINESS, & SUSTAINABILITY
              </p>
            </header>
            <div className="w-[650px] h-[256px] text-[18px] leading-8 text-white font-[400] ">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <GradientButton text="LEARN MORE" />
          </div>
          <div className="w-[466px] h-[602px] flex flex-col gap-[30px]">
            {boxContent.map((text, index) => (
              <div
                key={index}
                className={`${boxWidths[index]} h-[128px] px-[20px] py-[20px] border border-white rounded-lg shadow-md flex items-center`}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%, rgba(255, 255, 255, 0.2) 100%)",
                }}
              >
                <div className="flex items-center gap-[20px] text-white">
                  <p className="text-[57px] font-[600] leading-none">
                    {index + 1}
                  </p>
                  <p className="text-[30px] font-[600] leading-snug">{text}.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default OurStory;
