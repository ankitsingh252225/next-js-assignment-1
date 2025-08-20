import Image from "next/image";
import CntactImage from "../assets/ContactImage.png";
import GradientButton from "./GradientButton";

const GetInTouch = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center  h-[886px]">
        <div
          className="w-[1326px] h-[726px] border rounded-2xl grid grid-cols-2"
          style={{
            background:
              "linear-gradient(90deg, rgba(32, 31, 31, 0.8) 0%, #201F1F 100%)",
          }}
        >
          <Image
            src={CntactImage}
            alt="ContactImage"
            className="w-[459px] h-[690px] mt-[34px] rounded-2xl"
          />
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-[500px] h-[600px]  flex flex-col gap-[10px]">
              <h2 className="text-[40px] font-[600] text-white">
                Get in touch with us
              </h2>
              <div className="w-[364px] h-[42px] text-[14px] font-[400] text-white">
                <p>
                  Hi, I’m Amanda. Need help? Use the form below or email me at
                  hello@xyz.com
                </p>
              </div>

              <div className="flex flex-col gap-[30px] mt-[20px]">
                <div className="flex flex-col gap-[10px]">
                  <label className="text-[14px] text-white">Name</label>
                  <input
                    type="text"
                    placeholder="Ankit Singh"
                    className="w-[537px] h-[53px] rounded-[5.15px] text-gray-400 text-[12px] border-[0.86px] border-[#8D8D8D] px-[27.49px] py-[17.18px] bg-[#343333] placeholder:text-[#5e5c5c] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <label className="text-[14px] text-white">Email</label>
                  <input
                    type="text"
                    placeholder="Ankit@gmail.com"
                    className="w-[537px] h-[53px] rounded-[5.15px] text-gray-400 text-[12px] border-[0.86px] border-[#8D8D8D] px-[27.49px] py-[17.18px] bg-[#343333] placeholder:text-[#5e5c5c] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <label className="text-[14px] text-white">Message</label>
                  <textarea
                    type="text"
                    placeholder="Type your query here"
                    className="w-[537px] h-[89px] rounded-[5.15px] text-gray-400 text-[12px] border-[0.86px] border-[#8D8D8D] px-[27.49px] py-[17.18px] bg-[#343333] placeholder:text-[#5e5c5c] outline-none"
                  />
                </div>
                <GradientButton text="SUBMIT"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default GetInTouch;
