import React from "react";
import { SidebarHome } from "./sidebar/SidebarHome";
import { Toptitle } from "./sidebar/Toptitle";
import { Apps } from "./Apps";
import { UiCard } from "./UiCard";
import { FontCard } from "./FontCard";
import { elements } from "chart.js";

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
      <div className="w-[60%]  h-full  absolute right-[270px] px-2 ">
        <Toptitle />

        <div className="w-full h-fit mt-7 ">
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

        <div className="w-full h-fit mt-7  ">
          <h2 className="text-[26px]  font-semibold">Color</h2>

          <div className="grid grid-cols-3 gap-3 mt-4">
            <UiCard />
            <UiCard />
            <UiCard />
            <UiCard />
            <UiCard />
            <UiCard />
          </div>
        </div>

        <div className="w-full h-fit mt-7  ">
          <h2 className="text-[26px]  font-semibold">Font</h2>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {fontBoxImg?.map((el, index) => {
              return <FontCard key={index} img={el} />;
            })}
          </div>
        </div>

        <div className="w-full h-fit mt-7  ">
          <h2 className="text-[26px]  font-semibold">Mockup</h2>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {fontBoxImg?.map((el, index) => {
              return <FontCard key={index} img={el} />;
            })}
          </div>
        </div>






      </div>
    </div>
  );
};
