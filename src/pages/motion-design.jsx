import React from "react";
import { Apps } from "@/components/kreativetools/Apps";
import { FontCard } from "@/components/kreativetools/FontCard";
import { UiCard } from "@/components/kreativetools/UiCard";
import { SidebarHome } from "@/components/kreativetools/sidebar/SidebarHome";
import { Toptitle } from "@/components/kreativetools/sidebar/Toptitle";
import { BsArrowUpRight } from "react-icons/Bs";
import Image from "next/image";
import { fontBoxImg } from "@/data/frontBoxImg";

const MotionDesign = () => {
  return (
    <div className="w-full h-screen relative flex items-center px-6 py-1 ] ">
      <div className="w-[240px] h-full  fixed  left-6 top-6 ">
        <SidebarHome />
      </div>
      <div className="w-[60%]  h-full  absolute right-[270px] px-2 ">
        <Toptitle
          heading="Motion Design"
          paraGraph="Find your next favorite motion design tool here"
        />

        <div id="Apps" className="w-full h-fit mt-7 ">
          <h2 className="text-[26px] font-semibold">Apps</h2>
          <div className="grid grid-cols-2 gap-3 mt-4">
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

        <div id="Script-Plugin" className="w-full h-fit mt-7  ">
          <h2 className="text-[26px]  font-semibold">Script & Plugin</h2>

          <div className="grid grid-cols-3 gap-3 mt-4">
            <UiCard />
            <UiCard />
            <UiCard />
            <UiCard />
            <UiCard />
            <UiCard />
          </div>
        </div>

        <div id="Sound-Design" className="w-full h-fit mt-7  ">
          <h2 className="text-[26px]  font-semibold">Sound Design</h2>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {fontBoxImg?.map((el, index) => (
              <FontCard key={index} img={el} />
            ))}
          </div>
        </div>


        <div className="w-full h-[250px] border border-gray-600   shadow-lg mt-5 rounded-md  flex   items-center ">
          <div className="w-[70%] h-full px-14  grid place-content-center">
            <h3 className="text-[28px] ">Join the newsletter</h3>
            <p className="text-[16px] text-gray-500">
              Receive an email when tools are added! Discover the future nugget
              of design in advance! No spam, we promise
            </p>
            <div className="flex items-center w-[309px] border-gray-500 border rounded-lg px-3 gap-3  h-fit mt-3 ">
              <input type="email" placeholder="Enter your email" />
              <div className="px-4 bg-gray-200 rounded-lg py-1">Subscribe</div>
            </div>
          </div>
          <div className="w-[35%] h-[250px] relative">
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

export default MotionDesign
