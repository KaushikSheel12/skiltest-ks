import Image from 'next/image'
import React from 'react'

const CaboutBox = ({imgUrl , title}) => {
  return (
 <>
       <div className="md:w-[400px] w-full  h-[265px] border mx-auto relative px-4 mb-2 text-left gap-5  border-black flex items-center justify-between  z-[-10px]  py-4   ">
          
          <div className='relative w-[100px] h-[100px] ml-5 '>
        <Image src={imgUrl} alt="img" fill className='object-contain'/>
          </div>


          <div>
           <h1 className='font-semibold text-[32px]'>{title}</h1>
           <p className='text-[17px] text-gray-700 leading-6'>Our towering structures redefine skylines and leave a lasting impression.</p>
          </div>
     
             </div> 
 </>
  )
}

export default CaboutBox