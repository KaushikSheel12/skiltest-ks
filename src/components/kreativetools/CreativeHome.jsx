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
<div className="w-[500px] h-[700px] mx-auto grid place-content-center border-red-500 border"><h1>Hero</h1></div>
    </div>
  );
};
