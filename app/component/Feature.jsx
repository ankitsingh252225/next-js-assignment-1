import { featureArray } from "../utilis/constants";
import Image from "next/image";
import rightSectionImage from "../assets/bottlefea.png";

const FeatureComponent = () => {
  return (
    <div className="relative w-full mt-6 grid grid-cols-1 md:grid-cols-2">
      <div className="w-full order-1 h-full">
        <Image
          src={rightSectionImage}
          alt="rightSectionImage"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full h-full bg-black flex justify-center items-center py-8 md:py-0">
        <div className="w-full max-w-[460px] flex flex-col gap-6 px-4">
          {featureArray.map((obj, index) => (
            <div
              key={index}
              className="w-full flex items-center gap-4 md:gap-6"
            >
              <div className="w-14 h-14 md:w-[70px] md:h-[70px] rounded-full bg-white flex justify-center items-center">
                <Image
                  src={obj.img}
                  alt="imageFeatureComponent"
                  className="w-10 h-10 md:w-[56px] md:h-[56px]"
                />
              </div>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-[37px] text-white font-medium">
                {obj.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;

