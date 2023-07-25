import React from "react";
import ScrollingText from "./ScrollingText";
import Image from "next/image";
import Intro from "./Intro";
import { BsArrowDown } from "react-icons/Bs";
import { aboutBoxData } from "./data/data";
import AboutBox from "./AboutBox";
import OverviewBox from "./OverviewBox";

const TopHeroSection = () => {
  return (
    <>
      <div className="h-screen">
        <div className="  py-1  bg-[#edfbed] h-[550px] relative">
          {/* Your page content here */}

          <div className="  w-[90%] h-[550px] px-4 mx-auto py-1 relative  flex gap-2 justify-around items-center">
            <div className="w-[35%]  h-full py-2 px-2  ">
              <div className="w-fit h-fit px-2   uppercase   rounded-lg  border flex text-sm font-semibold bg-[#68dd68] text-[#1e451e] leading-6  ">
                Business
              </div>

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

          <div className=" absolute w-full  flex justify-between  h-28  bg-[#dbf2db] bottom-0 -z-1">
            <div className="w-[42%] h-full flex    ml-[180px]">
              <div className="  w-[50%] h-full ">
                <div className="flex w-full h-full ">
                  <div className="img relative w-[50%] h-[138px] top-[-26px] ">
                    <Image
                      fill
                      alt="smallimg"
                      src="https://assets.website-files.com/647650ba58f7bcb914cadd85/64768d4255e7eda07b1aa83b_Hero-girl.png"
                      className="object-contain"
                    />
                  </div>
                  <div className="txt w-[50%] h-full">
                    <h3 className="font-bold text-md">Who We Are</h3>
                    <p className="font-semibold text-sm text-gray-600 ">
                      Learn how to become a sales machine
                    </p>
                    <p className="font-semibold text-[12px] cursor-pointer hover:text-blue-500 ">
                      Learn more
                    </p>
                  </div>
                </div>
              </div>

              <div className=" w-[50%] h-full ">
                <div className="flex w-full h-full ">
                  <div className="img relative w-[50%] h-[138px] top-[-26px] ">
                    <Image
                      fill
                      alt="smallimg"
                      src="https://assets.website-files.com/647650ba58f7bcb914cadd85/64768d42449bbb066bd6d5c0_Hero-guy.png"
                      className="object-contain"
                    />
                  </div>

                  <div className="txt w-[50%] h-full">
                    <h3 className="font-bold text-md">Small Business</h3>

                    <p className="font-semibold text-sm text-gray-600 ">
                      See how can we help your business
                    </p>
                    <p className="font-semibold text-[12px] cursor-pointer hover:text-blue-500 ">
                      Learn more
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <BsArrowDown
              size={45}
              className="  h-20 mr-16 mt-20 bg-[#8ae48a] animate-bounce  rounded-full"
            />
          </div>
        </div>

        <Intro
          toptext="INTRO"
          headtext="Let's build your next big idea with Skillzen a Non Code Template"
          paragraph="As easy as just double click and type to edit"
        />

        <div className="w-fit h-fit    mx-auto  py-2 px-2 grid grid-cols-3  justify-between items-center  gap-3">
          {aboutBoxData.map((el, index) => {
            return (
              <div key={index}>
                <AboutBox
                  text={el.text}
                  paragraph={el.paragraph}
                  icon={el.icon}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-[-30px]">
          <Intro
            toptext="OVERVIEW"
            headtext="Welcome to Skillzen"
            paragraph="An overview of Skillzen benefits"
          />

          <OverviewBox />

          <Intro
            toptext="BENEFITS"
            headtext="Our Rock and Roll"
            paragraph="We bring ideas to life by combining years of"
          />
        </div>
      </div>

      <div className=" w-full h-screen">
        <ScrollingText />
      </div>
    </>
  );
};

export default TopHeroSection;
