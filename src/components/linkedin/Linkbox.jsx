import Image from 'next/image'
import React from 'react'

const Linkbox = ({imgUrl , text , pTag}) => {
  return (
    <>
      <div className=" px-2 py-2  w-[250px] h-[250px] ">
            <div className="w-[100px] h-[100px] relative  rounded-full ">
              <Image
                src={imgUrl}
                alt="people"
                fill
                className="object-cover  rounded-full"
              />
            </div>
            <h1 className="text-[30px] font-semibold text-gray-600 ">
             {text}
            </h1>
            <p className="text-gray-500  md:text-lg mt-[-8px] ">{pTag}</p>
          </div>

    </>
  )
}

export default Linkbox