import React from 'react'
import { RiGovernmentLine } from 'react-icons/Ri'

const Pepars = () => {
  return (
   <>
   <div className='md:w-[90%] md:mx-auto mt-20 w-full h-full px-2 py-2'>
    <h1 className='md:text-[27px] font-bold'>UP State Exams Practice Set Papers, Model Sample Papers</h1>
    <p className='text-gray-600 md:text-[14px] text-[12px]'> Start practicing with UP State  practice set papers free at BYJU'S Exam Prep. The UP State exams previous  year solved papers 2020/2019/2018/2017/2016 are available online with the  solutions and answers.</p>
   </div>
       

   <div className='md:w-[100%] h-[200px] border md:mt-5 bg-indigo-100'>
     <div className='md:w-[90%] md:mx-auto  w-full h-full px-2 py-2'>
        <h2 className='font-semibold md:text-[19px]'>EXAM WISE PAPERS</h2>
        <p className='text-gray-600 md:text-[14px] text-[12px]'>View Previous Year Question Papers of all UPPSC Exams</p>

        <div className='md:w-[160px]  md:h-[70px]  mt-2  w-40 border  md:mt-4 border-black px-2 py-2 cursor-pointer rounded bg-white'>
           <div className='flex gap-4 py-1 md:py-0'>
   <RiGovernmentLine className='md:mt-2 mt-0 ' size={30}/>
                <div className=' '>
                <p className='md:text-[12px] text-[10px]'>UPPSC PCS</p>
                <p className='text-gray-600 font-semibold md:text-[12px] text-[10px]'>Previous papers</p>
            </div>
           </div>
            
          
        </div>
     </div>
   </div>
   </>
  )
}

export default Pepars