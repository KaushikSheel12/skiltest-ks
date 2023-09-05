// import Image from 'next/image'
// import React from 'react'
// import {FcLike} from "react-icons/fc"


// const UniversityBox = ({imgUrl , university}) => {
//   return (
//    <>
//         <div className="md:w-[432px] w-full  mb-4 mx-auto h-[250px] cursor-pointer rounded-lg    relative">
//              <Image src={imgUrl} alt="" fill className="object-cover rounded-lg" />
//              <div className="w-[120px] px-3  h-[35px] border cursor-pointer bg-white rounded-md  flex items-center  gap-5 absolute top-2 right-2">
        
//               <FcLike size={25}/>
//               <p className="text-red-600 font-semibold">Like</p>
//              </div>
//           <h1 className="absolute bottom-7 text-center right-[35px] md:right-[70px] text-white font-bold  flex self-center text-[17px]  md:text-[20px]">{university}</h1>
//            </div>
//    </>
//   )
// }

// export default UniversityBox

import Image from 'next/image';
import React, { useState } from 'react';
import { FcLike } from 'react-icons/fc';

const UniversityBox = ({ imgUrl, university }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <>
      <div
        className={`md:w-[432px] w-full mb-4 mx-auto h-[250px] cursor-pointer rounded-lg relative  hover:transform ${
          isZoomed ? 'hover:scale-105' : 'hover:scale-300'
        }`}
        onMouseEnter={toggleZoom}
        onMouseLeave={toggleZoom}
      >
        <Image src={imgUrl} alt="" fill className="object-cover rounded-lg" />
        <div className="w-[120px] px-3 h-[35px] border cursor-pointer bg-white rounded-md flex items-center gap-5 absolute top-2 right-2">
          <FcLike size={25} />
          <p className="text-red-600 font-semibold">Like</p>
        </div>
        <h1 className="absolute bottom-7 text-center right-[35px] md:right-[70px] text-white font-bold flex self-center text-[17px] md:text-[20px]">
          {university}
        </h1>
      </div>
    </>
  );
};

export default UniversityBox;
