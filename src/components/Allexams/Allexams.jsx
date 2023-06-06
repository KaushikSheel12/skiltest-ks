import Image from 'next/image'
import React from 'react'
import Chooseclg from './Chooseclg'
import Courses from './Courses'
import Weoffer from './Weoffer'
import SpeakForUs from './SpeakForUs'

const Allexams = () => {
  return (
   <>
   <div className='w-full bg-orange-600 h-full mt-20 flex gap-0 justify-around '>
    <div className='px-8 py-8  '> 
    <h1 className='text-[white] font-semibold text-[42px]'>Collage mentor's Exam Prep</h1>
    <p className='text-[white] font-semibold text-[23px]'>The Most Comprehensive Preparation App for All Exams</p>

    <div  className='text-[white] rounded w-64 bg-orange-800  font-semibold py-2 px-2 mt-4'><p >Trusted by 3 Crore+ Students</p></div>
    </div>
    <div className=' mr-8'>
      <Image src="https://grdp.co/cdn-cgi/image/quality=100,width=720,f=auto/https://gs-post-images.grdp.co/2023/3/home_creative_web-img1680081740234-10.png-rs-high-webp.png " alt='defalut image ' width={470} height={470}/></div>   
   </div>

   {/* Second component */}
     <Chooseclg/>
    {/* third component */}
     <Courses/>
     <SpeakForUs/>
 
   </>
  )
}

export default Allexams