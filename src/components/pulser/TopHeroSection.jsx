import React from "react";
import ScrollingText from "./ScrollingText";
import Image from "next/image";

const TopHeroSection = () => {
  return (
    <>
      <div>
        <div className="h-screen  bg-[#edfbed] ">
          {/* Your page content here */}

          <div className="  w-[90%] h-[550px] px-4 mx-auto py-2  flex gap-2 justify-around items-center">
            <div className="w-[35%]  h-full py-2 px-2  ">
              <h1 className="text-[60px] text-[#275527]  font-bold leading-[80px] ">
                Grow Your Business With Our Help
              </h1>
              <p className="text-gray-500 text-[21px] px-2 py-2">The ultimate Webflow template for professionals in the business industry</p>
              <div className="relative w-[80%] h-9 px-2 py-2 mt-2">
                <Image src="https://assets.website-files.com/647650ba58f7bcb914cadd85/648a05c579c011cf465ae0d8_Underline.png" 
                alt="abc"
                fill
                className="object-fill"
                />
              </div>
            </div>

            <div className="w-[27%]  relative  h-full ">
              <Image
                src="https://assets.website-files.com/647650ba58f7bcb914cadd85/64768d439191deb839cd5398_Guy-Tablet%20.png"
                alt="professional-men"
                fill
                className="object-fill"
              />
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
