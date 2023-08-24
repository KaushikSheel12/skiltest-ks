import Image from 'next/image'
import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import {CiLocationOn} from "react-icons/ci"

const Dreamjob = () => {
  return (
 <>
 <div className='w-full h-screen px-2 py-2 flex border justify-around'>
   
 <div className=" w-[50%]  h-[600px] grid place-content-center border border-red-400 ">

<h1 className='text-[48px] font-semibold leading-[1.4]'>Let&apos;s find your <br /> dream <span className='text-[#5B4BDA]'>University</span> with <span className='text-[#5B4BDA]'>CM</span></h1>
<div className="flex h-[56px] justify-between items-center w-[663px] border border-black rounded-md py-1 p-2 mt-10">
    <div className="w-full flex  px-2  space-x-2">
        <AiOutlineSearch size={22}/>
        <input type="text" className='h-full w-full text-md focus:outline-none' placeholder='Job Title'/>
    </div>
    <div className="w-full flex  px-2 items-center space-x-2 border-l-2 border-black">
        <CiLocationOn size={22}/>
        <input type="text" className='h-full w-full text-md focus:outline-none'  placeholder='Location'/>
    </div>
    <button className='bg-[#5B4BDA] text-white px-10 py-2 rounded-md font-semibold'>Search</button>
</div>
</div>


<div className='border border-red-600 w-[600px] h-full'></div>


 </div>
 </>
  )
}

export default Dreamjob