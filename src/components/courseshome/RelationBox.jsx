import React from 'react'
import Image from 'next/image'

const RelationBox = ({imgUrl , text}) => {
  return (
  <>
     <div className="md:w-[295px] w-full h-[270px] mx-auto relative px-4 mb-2  py-4 border border-black  ">
            <h2 className='text-[19px] font-semibold text-gray-700 '>{text}</h2>
            <div className="flex items-center   absolute bottom-[2px] gap-[73px]  ">
                <p className='text-gray-400 text-[23px] mt-[90px]'>interior</p>

                <div className="relative w-[130px] h-[130px]">
                    <Image  src={imgUrl} alt="img" fill className='object-contain'/>
                </div>
            </div>
        </div> 
  </>
  )
}

export default RelationBox