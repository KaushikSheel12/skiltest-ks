import React from 'react'
import { TiTick } from 'react-icons/Ti'

const PrevYearP = () => {
  return (
<>
<div>
  
  <div className='flex col-span-2 gap-4 border justify-around items-center flex-wrap '> 
   
    <div className=''>
    <div className='flex gap-2 items-center px-2 py-1'>  
    <div className='h-4 w-4   rounded-full flex items-center border bg-orange-600'><TiTick color="white" size={22}/>  </div>
        <p>Designed by Subject Matter Experts</p>
        </div>
  
        <div className='flex gap-2 items-center px-2 py-1'>  
        <div className='h-4 w-4   rounded-full flex items-center border bg-orange-600'><TiTick color="white" size={22}/>  </div>
        <p>Based on Exam Trends & Syllabus</p>
        </div>
    </div>
  
  
  
    <div className=''>
    <div className='flex gap-2 items-center px-2 py-1'>  
    <div className='h-4 w-4   rounded-full flex items-center border bg-orange-600'><TiTick color="white" size={22}/>  </div>
        <p>Boost Speed and Accuracy</p>
        </div>
  
        <div className='flex gap-2 items-center px-2 py-1'>  
        <div className='h-4 w-4   rounded-full flex items-center border bg-orange-600'><TiTick color="white" size={22}/>  </div>
        <p>Enhance Time Management Skills</p>
        </div>
    </div>
  
  </div>
  
     </div>
</>
  )
}

export default PrevYearP