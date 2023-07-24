import React from "react";
import ScrollingText from "./ScrollingText";
import Image from "next/image";

const TopHeroSection = () => {
  return (
    <>
      <div className="h-screen">
        <div className="   bg-[#edfbed] h-[550px] border border-black relative">
          {/* Your page content here */}

          <div className="  w-[90%] h-[550px] px-4 mx-auto py-1 relative  flex gap-2 justify-around items-center">
            <div className="w-[35%]  h-full py-2 px-2  ">
              <h1 className="text-[60px] text-[#275527]  font-bold leading-[80px] ">
                Grow Your Business With Our Help
              </h1>
              <p className="text-gray-500 text-[21px] px-2 py-2">
                The ultimate Webflow template for professionals in the business
                industry
              </p>
              <div className="relative w-[80%] h-9 px-2 py-2 mt-2  ">
                <Image
                  src="https://assets.website-files.com/647650ba58f7bcb914cadd85/648a05c579c011cf465ae0d8_Underline.png"
                  alt="abc"
                  fill
                  className="object-fill"
                />
              </div>
            </div>

            <div className="w-[27%]  relative  h-full z-[2]">
              <Image
                src="https://assets.website-files.com/647650ba58f7bcb914cadd85/64768d439191deb839cd5398_Guy-Tablet%20.png"
                alt="professional-men"
                fill
                className="object-fill"
              />
            </div>
          </div>

          <div className=" absolute w-full   h-28  bg-[#576757] bottom-0 -z-1">
            <div className="w-[50%] h-full border flex  border-red-600  ml-[170px]">
              <div className="border border-green-500 w-[50%] h-full ">
                <div className="flex w-full h-full ">
                  <div className="img relative w-[50%] h-[134px] top-[-26px] ">
                    <Image
                      fill
                      alt="smallimg"
                      src="https://assets.website-files.com/647650ba58f7bcb914cadd85/64768d4255e7eda07b1aa83b_Hero-girl.png"
                      className="object-contain"
                    />
                  </div>
                  <div className="txt"></div>
                </div>
              </div>

              <div className="border border-green-500 w-[50%] h-full "></div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full h-screen">
        <ScrollingText />
      </div>
    </>
  );
};

export default TopHeroSection;
