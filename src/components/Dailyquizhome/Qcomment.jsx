import Image from "next/image";
import React from "react";

const Qcomment = ({ imgSrc, title }) => {
  return (
    <>
      <div className="flex gap-2 md:px-2 md:py-[3px]">
        <Image
          width={18}
          height={18}
          className="object-contain"
          alt="cmnt"
          src={imgSrc}
        />
        <p className="font-bold cursor-pointer  hover:text-purple-700  md:px-1  md:text-[12px] text-black ">
          {title}
        </p>
      </div>
    </>
  );
};

export default Qcomment;
