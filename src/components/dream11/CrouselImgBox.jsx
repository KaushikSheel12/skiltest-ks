import Image from "next/image";
import React from "react";

const CrouselImgBox = ({ ImgUrl }) => {
  return (
    <>
      <div className="md:w-[150px] w-[80%] md:h-[100px] h-[100px] mx-auto relative  border rounded-2xl">
        <Image fill alt="" src={ImgUrl} className="object-contain" />
      </div>
    </>
  );
};

export default CrouselImgBox;
