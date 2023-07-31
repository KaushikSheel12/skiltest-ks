import Image from "next/image";
import React from "react";

const Yearbox = ({ text, imgUrl, ptag }) => {
  return (
    <>
    
        <div className="w-fit  h-full  px-2 py-2    flex  items-center gap-4  ">
          <Image src={imgUrl} width={55} height={55} alt="smlimg" />
          <div>
            <h1 className="text-[40px] font-bold ">{text}</h1>
            <p className="text-gray-500 text-[16px] font-semibold px-1 mt-[-2px] ">
              {ptag}
            </p>
          </div>
        </div>
  
    </>
  );
};

export default Yearbox;
