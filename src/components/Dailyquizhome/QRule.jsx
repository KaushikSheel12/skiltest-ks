import Image from "next/image";
import React from "react";

export const QRule = ({ imgSrc, title }) => {
  return (
    <div className="flex gap-2 md:px-2 md:py-1">
      <Image
        width={18}
        height={18}
        alt="first"
        className="object-contain"
        src={imgSrc}
      />
      <h3 className="font-bold  md:px-1  md:text-[13px] text-gray-600 ">
        {title}
      </h3>
    </div>
  );
};
