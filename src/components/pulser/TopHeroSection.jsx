import React from "react";
import ScrollingText from "./ScrollingText";
import Image from "next/image";
import Intro from "./Intro";
import { FaHandshake, FaServicestack } from "react-icons/Fa";
import AboutBox from "./AboutBox";
import { RiMoneyDollarBoxLine } from "react-icons/Ri";
import { BsArrowDown } from "react-icons/Bs";

const aboutBoxData = [
  {
    text: "About Us",
    pharagraf: "Pulsar template boasts a visually striking and modern design",
    icon: (
      <FaHandshake
        size={70}
        color="teal"
        className="border rounded-full bg-[#99c299] mx-auto py-1 px-2 "
      />
    ),
  },

  {
    text: "Our Services",
    pharagraf: "Fully responsive, adapting to different screen sizes",
    icon: (
      <FaServicestack
        size={70}
        color="teal"
        className="border rounded-full bg-[#99c299] mx-auto py-1 px-2 "
      />
    ),
  },

  {
    text: "Contact Us",
    pharagraf: "Pulsar offers a wide array of thoughtfully designed sections",
    icon: (
      <RiMoneyDollarBoxLine
        size={70}
        color="teal"
        className="border rounded-full bg-[#99c299] mx-auto py-1 px-2 "
      />
    ),
  },
];

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
          headtext="Let's build your next big idea with Pulsar a Non Code Template"
          paragraph="As easy as just double click and type to edit"
        />

        <div className="w-fit h-fit    mx-auto  py-2 px-2 grid grid-cols-3  justify-between items-center  gap-3">
          {aboutBoxData.map((el, index) => {
            return (
              <div key={index}>
                <AboutBox
                  text={el.text}
                  pharagraf={el.pharagraf}
                  icon={el.icon}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-[-30px]">
          <Intro
            toptext="OVERVIEW"
            headtext="Welcome to Pulsar"
            paragraph="An overview of Pulsar benefits"
          />

          <div className="  w-[1010px] mx-auto">
            <div className="container-top flex gap-4">
              <div className=" h-[330px] bg-[#e6fde6] flex-1 flex gap-6   rounded-[40px]">
                <div className="imgdiv   w-[35%] mt-7  h-[300px] relative">
                  <Image
                    fill
                    className="object-contain"
                    alt="girlimg"
                    src="https://assets.website-files.com/647650ba58f7bcb914cadd85/64768d420209ae0560604b43_Grid-girl.png"
                  />
                </div>
                <div className="txtdiv  w-[65%] h-full">
                  <h1 className="font-bold text-[50px]  text-[#2f622f]  mt-20">
                    97%
                  </h1>
                  <p className="font-bold text-[30px]  text-[#2f622f]  leading-9 ">
                    Focus on what is more important to you and be more
                    productive
                  </p>
                </div>
              </div>

              <div className="border bg-[#e6fde6]  h-[330px] w-[360px]   rounded-[40px] ">
                <div className="w-fill h-36  relative">
                  <Image
                    src="https://assets.website-files.com/647650ba58f7bcb914cadd85/64768d42e9439559ed4cb298_iMac-grid.png"
                    fill
                    alt="ledimg"
                  />
                </div>
                <p className="font-semibold px-4 text-[#2f622f]">BENEFITS</p>
                <p className="font-bold text-[30px] px-4  text-[#2f622f]  leading-9 ">
                  With Pulsar you save time, money and stress
                </p>
                <div className="w-fit h-8 px-2 border cursor-pointer  text-[#235123] font-semibold  border-[#246824] rounded-full flex items-center ml-3 mt-4 hover:bg-[#176217] hover:text-white ">
                  Read More
                </div>
              </div>
            </div>
            <div className="container-bottom flex gap-4 mt-3">
              <div className="border border-black h-[300px] w-[360px]  rounded-[40px] ">
                das
              </div>
              <div className="border border-black h-[300px] flex-1 rounded-[40px] ">
                dsa
              </div>
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
