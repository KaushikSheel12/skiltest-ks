import React from 'react'
import { BsCameraVideo, BsCardChecklist } from 'react-icons/Bs'
import {GrDocumentTime} from 'react-icons/Gr'
import { GiBookCover } from 'react-icons/gi'
const Weoffer = () => {
  return (
   <>
   <h1 className='text-center border'>Content we offer</h1>
<div className='w-[90%] border border-red-400  flex flex-col md:flex-row px-2 py-2 mx-auto'>

<div className='w-80 h-full px-2 flex flex-row md:block overflow-x-scroll '>



  <div className='border w-full h-full  rounded   mb-2 cursor-pointer'>
<div className='flex items-center gap-2 py-2 px-2'>
<div className='w-12 h-12 border rounded-full flex justify-center  items-center bg-[#c58af2] text-white '>  <GrDocumentTime size={20} className='text-white invert-[1]'  color='white' /></div>
<h2 className='font-semibold'>Test Series </h2>
</div>
  </div>


  <div className='border w-full h-full  rounded   mb-2 cursor-pointer'>
<div className='flex items-center gap-2 py-2 px-2'>
<div className='w-12 h-12 border rounded-full flex justify-center  items-center bg-[#c58af2] text-white'>  <BsCardChecklist size={20}/></div>
<h2 className='font-semibold'>Quizzes</h2>
</div>
  </div>

  <div className='border w-full h-full  rounded   mb-2 cursor-pointer'>
<div className='flex  items-center gap-2 py-2 px-2'>
<div className='w-12 h-12 border rounded-full flex justify-center  items-center bg-[#c58af2] text-white'>  <GiBookCover size={20} /></div>
<h2 className='font-semibold'>Previous Year Papers</h2>
</div>
  </div>


  </div>




  <div className='border border-red-500 w-full '></div>



</div>


   </>
  )
}

export default Weoffer