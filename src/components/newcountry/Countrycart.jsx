import Image from 'next/image'
import React from 'react'

const Countrycart = ({imgSrc , text ,heading ,contryno}) => {
  return (
  <>

<div>
            <div className="flex items-center w-full  h-fit px-4   justify-around mx-auto mt-4 ">
              <div className="w-[200px]  h-[130px] relative">
                <Image
                  src={imgSrc}
                  fill
                  alt="mapimg"
                  className='object-contain'
                />
              </div>

              <div className="font-bold text-[32px] text-center  w-[50%] leading-9">
             
                <h1> {contryno}<br />{heading}</h1>
              </div>
            </div>

            <p className="px-8  md:text-lg text-md text-gray-700  leading-10">
             {text}
            </p>
  
            </div>
  </>
  )
}

export default Countrycart