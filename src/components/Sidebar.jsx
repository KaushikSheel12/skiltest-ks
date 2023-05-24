
import Image from 'next/image'
import React from 'react'
import { Dot } from './Dot'
import { Accordian } from './Accordian'
import questions from '@/data/questions'

const Sidebar = () => {
  return (
    <div className=' fixed  h-fit  left-auto top-0  mt-10  '>

      <div className='flex justify-center mt-10 mx-20'> 
        <Image width={200} height={200} alt="user-profile" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/800px-Default_pfp.svg.png"/>
      </div>
    <h2 className='text-center from-neutral-800 text-[20px] font-semibold'>Shivam Dubey</h2>


    <div className="w-full grid grid-cols-3 mt-[-12]">
      <div className="flex items-center">
        <Dot color={"green"}/>
        <p className='text-[15px] px-1 py-1'>Attempted</p>
      </div>
      <div className="flex items-center">
        <Dot color={"black"}/>
        <p  className='text-[15px] px-1 py-1'>Unattempted</p>
      </div>
      <div className="flex items-center ml-3">
        <Dot color={"gray"}/>
        <p  className='text-[15px] px-1 py-1 '>Unseen</p>
      </div>
      <div className="flex items-center mt-[-4px]">
        <Dot color={"yellow"}/>
        <p  className='text-[15px] px-2 py-1'>Marked</p>
      </div>
    </div>
    <Accordian>
      
      <div className='grid grid-cols-4 gap-3 p-2 overflow-y-scroll h-[200px]'>
      {questions.map((el)=>{
 return   <div key={el.id} >
     <button className='border bg-slate-600 px-2 py-2 w-16 h-9 rounded-full text-[white]'>{el.id}</button>
  </div>
})}
      </div>


    </Accordian>
    </div>
  )
}

export default Sidebar
