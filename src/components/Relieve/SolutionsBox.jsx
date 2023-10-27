import Image from "next/image";
import React from "react";

export const SolutionsBox = () => {
  return (
    <div className="w-full h-fit">
      <div className="w-full h-[435px]  rounded-md relative ">
        <Image
          src="https://www.relievefurniture.com/_next/image?url=%2Fstatic%2Fimages%2Fv3%2Fconsultations.jpg&w=828&q=75"
          alt="img"
          fill
          className="object-cover rounded-md"
          loading="lazy"
        />
      </div>
      <div className="w-full h-[150px] ">
        <div className="w-[140px] mt-5 h-[1px] bg-black"></div>
        <h2 className="ml-16">1.</h2>
        <h1 className="text-[30px] text-green-900">Consultations</h1>
        <p className="text-[18px] text-[#777474]">
          Get help from a qualified member of the Relieve team to design and
          plan any office space with items we have in stock and arriving soon.
        </p>
      </div>
    </div>
  );
};
