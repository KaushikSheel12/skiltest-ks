import Image from 'next/image'
import React from 'react'
import {FcLike} from "react-icons/fc"


const UniversityBox = ({imgUrl , university}) => {
  return (
   <>
        <div className="w-[432px] mb-4 mx-auto h-[250px] cursor-pointer rounded-lg    relative">
             <Image src={imgUrl} alt="" fill className="object-cover rounded-lg" />
             <div className="w-[120px] px-3  h-[35px] border cursor-pointer bg-white rounded-md  flex items-center  gap-5 absolute top-2 right-2">
        
              <FcLike size={25}/>
              <p className="text-red-600 font-semibold">Like</p>
             </div>
          <h1 className="absolute bottom-7 text-center right-[70px] text-white font-bold  flex self-center text-[20px]">{university}</h1>
           </div>
   </>
  )
}

export default UniversityBox