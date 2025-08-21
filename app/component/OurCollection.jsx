import Image from "next/image";
import { ProductArray } from "../utilis/constants";
import GradientButton from "./GradientButton";

const OurCollection = () => {
  return (
    <div className="w-full my-[40px] px-4 md:px-[6%] flex flex-col ">
      <header className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 md:gap-0">
        <div className="flex flex-col gap-2">
          <p className="text-3xl md:text-[50px] font-[600]">
            Hydration Essentia
          </p>
          <span className="text-base md:text-[24px] font-[400]">
            Discover Our Range of Premium Water Bottles
          </span>
        </div>
        <GradientButton text="VIEW MORE" className="self-start md:self-auto" />
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {ProductArray.map((obj, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 md:gap-4"
          >
            <div className="w-full">
              <Image
                src={obj.img}
                alt={obj.name}
                className="w-full h-auto rounded-3xl object-cover"
              />
            </div>
            <p className="text-lg md:text-[28px] font-[400]">
              {obj.name}
            </p>
            <GradientButton text="LEARN MORE" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCollection;
