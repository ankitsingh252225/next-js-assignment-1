import { featureArray } from "../utilis/constants";
import Image from "next/image";
import rightSectionImage from "../assets/bottlefea.png"
const FeatureComponent = () => {
  return (
    <>
      <div className="relative w-full mt-[30px] grid grid-cols-2 gap-0">
        <div className="w-full h-full">
          <Image src={rightSectionImage} alt="rightSectionImage" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-full bg-black flex justify-center items-center">
          <div className="w-[460px] h-[505px]  flex flex-col justify-around">
            {featureArray.map((obj, index) => {
              return (
                <div key={index} className="w-full h-[70px]  flex ">
                  <div className="w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center">
                    <Image src={obj.img} alt="imagefetureComponent" className="w-[56px] h-[56px]" />
                  </div>
                  <p className="text-[37px] text-white font-[400] ml-[25px]">
                    {obj.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default FeatureComponent;
