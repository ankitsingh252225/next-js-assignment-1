import Image from "next/image";
import { ProductArray } from "../utilis/constants";
import GradientButton from "./GradientButton";

const OurCollection = () => {
  return (
    <>
      <div className="w-full h-[1258px] px-[6%] mt-[40px] flex flex-col">
        <header className="w-full h-[120px] flex justify-between  items-center">
          <div className="w-[538px] h-[138px]">
            <p className="text-[50px] font-[600]">Hydration Essentia</p>
            <span className="text-[24px] font-[400]">
              Discover Our Range of Premium Water Bottles
            </span>
          </div>
          <GradientButton text="VIEW MORE" />
        </header>
        <div className="grid grid-cols-3 gap-y-2">
          {ProductArray.map((obj, index) => {
            return (
              <div
                key={index}
                className="w-[420px] h-[539px] flex flex-col gap-[6px]"
              >
                <Image
                  src={obj.img}
                  alt="productImage"
                  className="w-[420px] h-[420px] rounded-3xl"
                />
                <p className="text-[28px] font-[400] mt-[3px]">{obj.name}</p>
                <GradientButton text="LEARN MORE" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default OurCollection;
