import Image from "next/image";
import React from "react";

const Social = ({ imgUrl, title }) => {
  return (
    <>
      <div className="  md:w-fit  md:py-2  md:px-1  flex justify-center items-center  md:gap-2   md:h-auto">
        <Image
          width={22}
          height={22}
          alt="wtsap"
          className="object-contain"
          src={imgUrl}
        />
        <p className="font-bold cursor-pointer   md:px-1  md:text-[11px] text-gray-600 ">
          {title}
        </p>
      </div>
    </>
  );
};

export default Social;
