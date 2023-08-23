import Image from 'next/image'
import React from 'react'

const Ourpromise = () => {
  return (
  <>
  <div className='w-full h-full px-8 py-4  flex'>
    <div className="w-[50%] h-[450px] px-8  grid place-content-center ">
        <h1 className='font-medium text-[45px] px-8 text-[#4e8bda]'>Our Promise</h1>
        <p className='px-8  text-gray-600 text-md leading-6'>
We want to make a difference in education. That means focusing on the issues that matter most to you. We hope to be a guiding light in your journey, which only happens when we keep you at the center of everything we do.</p>
    </div>


    <div className="w-fit h-full  grid place-content-center grid-cols-3  gap-5  px-4 py-2">


        <div className='imgbox w-[300px]  relative h-[400px]  px-2 py-2 group'>
            <Image  src="https://res.cloudinary.com/highereducation/images/w_310,h_440,c_fill,f_auto,fl_lossy,q_auto/v1667851180/BestColleges.com/brand-slider-2/brand-slider-2.jpg" alt="student-img" fill className='object-cover'/>

           
            <h2 className='text-[25px] absolute inset-0 text-white  h-full w-full  grid place-content-center px-[20px]  bg-black    border bg-opacity-30   leading-7 '>We Value Your  Perspective</h2>
         <div className="w-[85%] h-[3px] bg-red-500 mx-auto top-[240px]  absolute inset-0"></div>
         
     
       <div   className='whitebox w-[300px] h-[400px]  group-hover:block  hidden hover:flex  px-4 py-2 bg-white absolute inset-0'>
        <h3 className='  text-[25px] leading-8'>We keep you Connected to Current Events</h3>
        <div className="w-full h-[3px] bg-red-500 mx-auto mt-4"></div>
        <p className='text-[14px] leading-[18px] mt-6'>We’re lifelong students constantly learning alongside you. We make sure to keep you up-to-date on the latest trends and news about school, job markets, accessibility, gender issues, and so much more.</p>

        <div className='w-full h-10 border mt-6 bg-red-600 text-white grid place-content-center cursor-pointer'> See What's Trending</div>
       </div>
    
        </div>


        <div className='imgbox w-[300px]  relative h-[400px]  px-2 py-2 group'>
            <Image  src="https://res.cloudinary.com/highereducation/images/w_310,h_440,c_fill,f_auto,fl_lossy,q_auto/v1667851180/BestColleges.com/brand-slider-2/brand-slider-2.jpg" alt="student-img" fill className='object-cover'/>

           
            <h2 className='text-[25px] absolute inset-0 text-white  h-full w-full  grid place-content-center px-[20px]  bg-black    border bg-opacity-30   leading-7 '>We Value Your  Perspective</h2>
         <div className="w-[85%] h-[3px] bg-red-500 mx-auto top-[240px]  absolute inset-0"></div>
         
     
       <div   className='whitebox w-[300px] h-[400px]  group-hover:block  hidden hover:flex  px-4 py-2 bg-white absolute inset-0'>
        <h3 className='  text-[25px] leading-8'>We keep you Connected to Current Events</h3>
        <div className="w-full h-[3px] bg-red-500 mx-auto mt-4"></div>
        <p className='text-[14px] leading-[18px] mt-6'>We’re lifelong students constantly learning alongside you. We make sure to keep you up-to-date on the latest trends and news about school, job markets, accessibility, gender issues, and so much more.</p>

        <div className='w-full h-10 border mt-6 bg-red-600 text-white grid place-content-center cursor-pointer'> See What's Trending</div>
       </div>
    
        </div>


        <div className='imgbox w-[300px]  relative h-[400px]  px-2 py-2 group'>
            <Image  src="https://res.cloudinary.com/highereducation/images/w_310,h_440,c_fill,f_auto,fl_lossy,q_auto/v1667851180/BestColleges.com/brand-slider-2/brand-slider-2.jpg" alt="student-img" fill className='object-cover'/>

           
            <h2 className='text-[25px] absolute inset-0 text-white  h-full w-full  grid place-content-center px-[20px]  bg-black    border bg-opacity-30   leading-7 '>We Value Your  Perspective</h2>
         <div className="w-[85%] h-[3px] bg-red-500 mx-auto top-[240px]  absolute inset-0"></div>
         
     
       <div   className='whitebox w-[300px] h-[400px]  group-hover:block  hidden hover:flex  px-4 py-2 bg-white absolute inset-0'>
        <h3 className='  text-[25px] leading-8'>We keep you Connected to Current Events</h3>
        <div className="w-full h-[3px] bg-red-500 mx-auto mt-4"></div>
        <p className='text-[14px] leading-[18px] mt-6'>We’re lifelong students constantly learning alongside you. We make sure to keep you up-to-date on the latest trends and news about school, job markets, accessibility, gender issues, and so much more.</p>

        <div className='w-full h-10 border mt-6 bg-red-600 text-white grid place-content-center cursor-pointer'> See What's Trending</div>
       </div>
    
        </div>


       

        



    </div>
  </div>
  </>
  )
}

export default Ourpromise