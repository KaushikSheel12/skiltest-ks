import Image from 'next/image'
import React from 'react'
import Chooseclg from './Chooseclg'
import Courses from './Courses'
import Weoffer from './Weoffer'
import SpeakForUs from './SpeakForUs'
import Updates from './Updates '

const Allexams = () => {
  return (
   <>
   <div className='relative w-full bg-orange-600  mt-20 flex gap-0 
   border h-[350px]  justify-between'>
    <div className='px-8 py-8  '> 
    <h1 className='text-[white] font-semibold text-[42px]'>Collage mentor's Exam Prep</h1>
    <p className='text-[white] font-semibold text-[23px]'>The Most Comprehensive Preparation App for All Exams</p>

    <div  className='text-[white] rounded w-64 bg-orange-800  font-semibold py-2 px-2 mt-4'><p >Trusted by 3 Crore+ Students</p></div>
    </div>

    <div className=' mr-8 absolute right-0 md:w-96 md:h-96 h-48 w-48 -bottom-10 hidden md:block '>
      <Image src="https://grdp.co/cdn-cgi/image/quality=100,width=720,f=auto/https://gs-post-images.grdp.co/2023/3/home_creative_web-img1680081740234-10.png-rs-high-webp.png " alt='defalut image ' width={470} height={470}/></div>   
   </div>

   {/* Second component */}
     <Chooseclg/>
    {/* third component */}
     <Courses/>
     <Weoffer/>
     <SpeakForUs/>
 <Updates/>
   </>
  )
}

export default Allexams