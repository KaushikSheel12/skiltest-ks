import React from 'react'
import Image from 'next/image'

const RelationBox = ({imgUrl , text}) => {
  return (
  <>
     <div className="md:w-[295px] w-[85%] h-[270px] mx-auto relative px-4 mb-10 md:mb-2 mt-10 py-4 border md:border-black  ">
     <div className="w-full h-16 border md:hidden absolute inset-0 top-[-55px] border-t-2  border-black  border-l-2  border-r-2 text-center grid place-content-center  font-semibold ">{text}</div>

            <h2 className='text-[19px] font-semibold md:block hidden text-gray-700 '>{text}</h2>
            
            <div className="md:flex items-center   absolute bottom-[2px] gap-[73px]  ">
                <p className='text-gray-400 md:block hidden text-[23px] mt-[90px]'>interior</p>

                <div className="relative w-[350px] h-[250px]  hidden md:block  mx-auto  md:w-[130px] md:h-[130px]">
                    <Image  src={imgUrl} alt="img" fill className='  object-contain'/>
                </div>
               
            </div>
            <Image  src={imgUrl} alt="img" fill className='object-fill md:hidden  block'/>
            <div className="w-full h-16 border bg-black md:hidden absolute inset-0 top-[205px] flex justify-center text-white font-semibold items-center">VIEW PROJECT</div>

        </div> 
  </>
  )
}

export default RelationBox