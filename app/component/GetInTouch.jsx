import Image from "next/image";
import CntactImage from "../assets/ContactImage.png";
import GradientButton from "./GradientButton";

const GetInTouch = () => {
  return (
    <div className="w-full flex justify-center items-center py-12 px-4">
      <div
        className="w-full max-w-[1326px] rounded-2xl border grid grid-cols-1 md:grid-cols-2 gap-8"
        style={{
          background:
            "linear-gradient(90deg, rgba(32, 31, 31, 0.8) 0%, #201F1F 100%)",
        }}
      >
        <div className="order-2 md:order-1 flex justify-center md:justify-start items-center  mt-[10px]">
          <Image
            src={CntactImage}
            alt="ContactImage"
            className="w-full max-w-[490px] h-auto rounded-2xl object-cover"
          />
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end items-start px-4 py-6">
          <div className="w-full max-w-[500px] flex flex-col gap-4 md:py-[20px] pr-[30px]">
            <h2 className="text-[32px] md:text-[40px] font-[600] text-white text-center md:text-left">
              Get in touch with us
            </h2>
            <p className="text-[14px] text-white text-center md:text-left max-w-[364px]">
              Hi, I’m Amanda. Need help? Use the form below or email me at
              hello@xyz.com
            </p>

            <div className="flex flex-col gap-6 mt-5">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-white">Name</label>
                <input
                  type="text"
                  placeholder="Ankit Singh"
                  className="w-full h-[53px] rounded-[5.15px] text-gray-400 text-[12px] border-[0.86px] border-[#8D8D8D] px-4 py-2 bg-[#343333] placeholder:text-[#5e5c5c] outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-white">Email</label>
                <input
                  type="text"
                  placeholder="Ankit@gmail.com"
                  className="w-full h-[53px] rounded-[5.15px] text-gray-400 text-[12px] border-[0.86px] border-[#8D8D8D] px-4 py-2 bg-[#343333] placeholder:text-[#5e5c5c] outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[14px] text-white">Message</label>
                <textarea
                  type="text"
                  placeholder="Type your query here"
                  className="w-full h-[89px] rounded-[5.15px] text-gray-400 text-[12px] border-[0.86px] border-[#8D8D8D] px-4 py-2 bg-[#343333] placeholder:text-[#5e5c5c] outline-none resize-none"
                />
              </div>

              <GradientButton text="SUBMIT" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
