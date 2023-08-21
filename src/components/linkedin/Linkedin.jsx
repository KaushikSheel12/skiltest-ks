import Image from "next/image";
import React from "react";
import Linkbox from "./Linkbox";

const Linkedin = () => {
  return (
    <>
      <div className="mt-20 border md:w-fit  w-full mx-auto h-[500px] px-10 py-2  bg-[#fffbef] ">
        <h3 className="font-semibol text-gray-600 md:text-[23px] px-10 py-4">
          LinkedIn is thriving everywhere
        </h3>
        <div className="flex justify-around items-center py-8  gap-40">

        <Linkbox imgUrl="https://cdn-icons-png.flaticon.com/512/3437/3437306.png" text="706 millon+" pTag="members"/>

        <Linkbox imgUrl="https://monsterppc.com/wp-content/uploads/2015/04/NavigationIcon-01.png" text="200+" pTag="countries & territories"/>

        <Linkbox imgUrl="https://png.pngtree.com/element_our/png/20181228/building-vector-icon-png_296032.jpg" text="55 millon+" pTag="companies"/>


        </div>
      </div>
    </>
  );
};

export default Linkedin;
