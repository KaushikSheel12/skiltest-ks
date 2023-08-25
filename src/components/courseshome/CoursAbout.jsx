import Image from 'next/image'
import React from 'react'

import CaboutBox from './CaboutBox'
import { AboutData } from './data/data'
import WhatisNext from './WhatisNext'

const CoursAbout = () => {
  return (
  <>
     {/* <div className="md:w-[70%] w-[85%] mx-auto mt-[40px] md:mt-[95px] md:h-[90px]   h-fit border-4 border-[#184132] px-4 py-2 md:flex items-center justify-between ">
        <h1 className="font-semibold text-gray-700  text-[25px] md:text-[33px]"> ABOUT</h1>

        <div className="flex items-center gap-5">
    <h3 className="font-semibold text-gray-700 text-sm leading-[17px] md:text-[17px]">Architects with a passion for exceptional design.</h3>
    <div className="relative w-[90px] h-[90px] hidden md:block ">
        <Image src="https://uploads-ssl.webflow.com/644fad3d02297941c3f293f2/644faf4b54f3ddf6d169c129_module-title-img-p-500.png " alt="img" fill className="object-contain" />
    </div>
        </div>
       </div> */}
       <WhatisNext/>


       <div className="md:w-[70%] w-full mx-auto mt-10 grid md:grid-cols-3 grid-cols-1  h-full  py-2">
       




       <div className="md:w-[400px] w-full h-[265px] mx-auto relative px-4 mb-2 text-center  z-[-10px]  py-4   ">
          
<Image src="https://uploads-ssl.webflow.com/644fad3d02297941c3f293f2/644faf4ba9dbd97ee2fb24a2_Crafted-Environments.jpg" fill className='object-contain' />
<h2 className='absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-30 text-[20px]'>CRAFTED ENVIRONMENTS</h2>

<div className='w-[90%] h-10 border rounded-md absolute text-sm font-semibold inset-0 grid whitespace-nowrap  left-[20px] top-[150px] items-center text-white bg-black bg-opacity-30 text-[20px] '>
Architecture is the intersection of art and science.
</div>

        </div> 

        {AboutData.map((el,index)=>{
          return (
            <div key={index}> 
            <CaboutBox  imgUrl={el.url} title={el.title} para={el.para}/>
            </div>
          )
        })}






     




  
          





      </div>
  </>
  )
}

export default CoursAbout