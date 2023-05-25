import React from 'react'
import QSidebar from './QSidebar'

const QInstruction = () => {
  return (
<>
<div  className="w-full grid h-28 grid-cols-1 md:grid-cols-4 gap-x-3 py-6 px-4 mt-12 ">
<div className=" col-span-3 p-2">

    <p className='py-0 px-2 font-semibold  text-[#565151] text-[15px]'>1. Test will auto submit when the Time is up.</p>
    <p className='py-0 px-2 font-semibold  text-[#565151] text-[15px]'>2. The Test comprises of multiple choice questions (MCQ) with one or more correct answers.</p>
    <p className='py-0 px-2 font-semibold  text-[#565151] text-[15px]'>3. The clock in the top right corner will display the remaining time available for you to complete the examination.</p>
    <h1 className='py-1 px-2 font-semibold  text-[#080707] text-[25px]'> Navigating & Answering a Question</h1>

    <p className='py-0 px-2 font-semibold  text-[#565151] text-[15px]'>1. Test will auto submit when the Time is up.</p>
    <p className='py-0 px-2 font-semibold  text-[#565151] text-[15px]'>2. The Test comprises of multiple choice questions (MCQ) with one or more correct answers.</p>
    <p className='py-0 px-2 font-semibold  text-[#565151] text-[15px]'>3. The clock in the top right corner will display the remaining time available for you to complete the examination.</p>
   
   <button className="px-2  mb-2 mt-72 py-2 w-[110px] h-9  grid place-content-center mx-auto  content-center  border rounded  text-black border-black bg-white">Back to Test</button>
</div>
<div className="w-full border sticky top-10 hidden md:block h-fit">
          <QSidebar />
        </div>
</div>

</>
  )
}

export default QInstruction