import React from "react";
import { SidebarHome } from "./sidebar/SidebarHome";
import { Toptitle } from "./sidebar/Toptitle";
import { Apps } from "./Apps";
import { UiCard } from "./UiCard";
import { FontCard } from "./FontCard";
import { elements } from "chart.js";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/Bs";

export const CreativeHome = () => {
  const fontBoxImg = [
    "https://framerusercontent.com/images/1DWkcLk5VUmAbyaI0gRgD5mlCo.png?scale-down-to=512",
    "https://framerusercontent.com/images/CQx8zinMidmU16as7XKJlZ3gro.jpg?scale-down-to=512",
    "https://framerusercontent.com/images/H8ni2KmQGnbgizf56RKpKoLZQ4.png?scale-down-to=512",
    "https://framerusercontent.com/images/f0q3iKTRdYvGFZj7VswSLYscCQc.png?scale-down-to=512",
    "https://framerusercontent.com/images/I1z2dnuJU6q5QeXevDWWY1ab94.jpg?scale-down-to=512",
    "https://framerusercontent.com/images/snEhXMwBqVCb3QLp5UobpXOA1TE.jpg?scale-down-to=512",
    "https://framerusercontent.com/images/ngyHnLWyhbcFoiOYYAxS4S49h6I.jpg?scale-down-to=512",
  ];
  return (
    <div className="w-full h-screen relative flex items-center px-6 py-1 ] ">
      <div className="w-[240px] h-full  fixed  left-6 top-6 ">
        <SidebarHome />
      </div>
      <div className="md:w-[70%] w-full  h-full pl-2 md:ml-[230px] px-2 ">
        <Toptitle
          heading="Innovative Resources for Designers"
          paraGraph="Discover a curated collection of essential tools and resources for designers, empowering your creative journey"
        />

        <div id="Apps" className="w-full h-fit mt-2 ">
          <h2 className="md:text-[26px] text-[24px] font-semibold">Apps</h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-2">
            <Apps
              title="LLLustrator"
              img="https://framerusercontent.com/images/e4CdGqrGik2HInsyc5ADUMiasvo.png?scale-down-to=512"
            />
            <Apps
              title="Photohop"
              img="https://framerusercontent.com/images/oPasot6czxqps2QTUc8LeBuORc.png?scale-down-to=512"
            />
            <Apps
              title="Inesign"
              img="https://framerusercontent.com/images/Y2UEwNZFUYH0cOPjNPTbZwX6Li4.png?scale-down-to=512"
            />
            <Apps
              title="Affinity Designer"
              img="https://framerusercontent.com/images/TQWgmWwraX4fH0X9HlFOLRLkvQ0.png?scale-down-to=512"
            />
          </div>
        </div>

        <div className="w-full h-fit mt-2  ">
          <h2 className="md:text-[26px] text-[24px]  font-semibold">
            Fonts of the week
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-4">
            {fontBoxImg?.map((el, index) => (
              <FontCard key={index} img={el} />
            ))}
          </div>
        </div>

        <div className="w-full h-fit mt-2  ">
          <h2 className="md:text-[26px] text-[24px]  font-semibold">
            Featured tools
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-4">
            {fontBoxImg?.map((el, index) => {
              return <FontCard key={index} img={el} />;
            })}

            <div className="w-fit h-fit border-2 border-gray-400 hidden px-3 py-2 shadow-lg mb-3  relative rounded-lg ">
              <div className="w-full h-fit ">
                <div className="w-[320px] h-[200px] relative bg-red-600 cursor-pointer rounded-md  ">
                  <Image
                    src="https://framerusercontent.com/images/1DWkcLk5VUmAbyaI0gRgD5mlCo.png?scale-down-to=512"
                    fill
                    alt="img"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between py-1 gap-3">
                  <div className="w-fit border border-gray-400 h-fit px-2 cursor-pointer py-[4px] rounded-md  shadow-lg ">
                    <p className="">Craftwork</p>
                  </div>
                  <div className="w-fit border border-gray-400 h-fit px-2 cursor-pointer py-[2px] rounded-md  flex items-center gap-2 shadow-lg ">
                    <p>Free & Paid</p>
                    <BsArrowUpRight />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-fit h-fit border-2 border-gray-400 hidden px-3 py-2 shadow-lg mb-3  relative rounded-lg ">
              <div className="w-full h-fit ">
                <div className="w-[320px] h-[200px] relative bg-red-600 cursor-pointer rounded-md  ">
                  <Image
                    src="https://framerusercontent.com/images/1DWkcLk5VUmAbyaI0gRgD5mlCo.png?scale-down-to=512"
                    fill
                    alt="img"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between py-1 gap-3">
                  <div className="w-fit border border-gray-400 h-fit px-2 cursor-pointer py-[4px] rounded-md  shadow-lg ">
                    <p className="">Craftwork</p>
                  </div>
                  <div className="w-fit border border-gray-400 h-fit px-2 cursor-pointer py-[2px] rounded-md  flex items-center gap-2 shadow-lg ">
                    <p>Free & Paid</p>
                    <BsArrowUpRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:h-[250px] h-fit  px-2 py-4 border-gray-600 border    shadow-lg mt-5 rounded-md  md:flex    items-center ">
          <div className="md:w-[70%]  w-full h-full md:px-14  grid place-content-center">
            <h3 className="md:text-[28px] text-[20px] ">Join the newsletter</h3>
            <p className="md:text-[16px] leading-5 text-[14px] text-gray-500">
              Receive an email when tools are added! Discover the future nugget
              of design in advance! No spam, we promise
            </p>
            <div className="flex items-center w-[230px] md:w-[309px] border-gray-500 border rounded-lg px-3 md:gap-3  gap-12 h-fit mt-3 ">
              <input type="email" placeholder="Enter your email" />
              <div className="px-4 bg-gray-200 rounded-lg py-1">Subscribe</div>
            </div>
          </div>
          <div className="md:w-[35%] hidden md:block md:h-[250px] relative">
            <Image
              src="https://framerusercontent.com/images/vF1ErqZTpfGoJaHHEr6nGNcccYM.png"
              alt="img"
              fill
              className="object-cove rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
