import React from 'react'
import {TiTick} from 'react-icons/Ti'
const TestSeries = () => {
  return (
   <>
   <div>
  
<div className='flex col-span-2 md:gap-4 -gap-1 border justify-around items-center flex-wrap'> 
 
  <div className=''>
  <div className='flex gap-2 items-center px-2 py-1'>  
  <div className='h-4 w-4   rounded-full flex items-center border bg-orange-600'><TiTick color="white" size={22}/>  </div>
      <p >Designed by Exam Experts</p>
      </div>

      <div className='flex gap-2 items-center px-2 py-1'>  
      <div className='h-4 w-4   rounded-full flex items-center border bg-orange-600'><TiTick color="white" size={22}/>  </div>
      <p>Full Length & Subject-Wise Mock Tests</p>
      </div>
  </div>



  <div className=''>
  <div className='flex gap-2 items-center px-2 py-1'>  
  <div className='h-4 w-4   rounded-full flex items-center border bg-orange-600'><TiTick color="white" size={22}/>  </div>
      <p>Based on Latest Syllabus & Exam Pattern</p>
      </div>

      <div className='flex gap-2 items-center px-2 py-1'>  
      <div className='h-4 w-4   rounded-full flex items-center border bg-orange-600'><TiTick color="white" size={22}/>  </div>
      <p>Detailed Solutions with Performance Analysis</p>
      </div>
  </div>

</div>

   </div>
   </>
  )
}

export default TestSeries