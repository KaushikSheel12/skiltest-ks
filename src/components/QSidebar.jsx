
import Image from 'next/image'
import React from 'react'
import { Dot } from './Dot'
import { Accordian } from './Accordian'
import questions from '@/data/questions'

const QSidebar = () => {
  return (
    <div className=' fixed  h-fit  left-auto top-0  mt-10  '>

      <div className=' mt-10  flex py-2 px-0 items-center' > 
      <div>
      <Image width={65} height={65} alt="user-profile" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/800px-Default_pfp.svg.png"/>
      </div>
      <div className='px-4'> <h2 className='text-center from-neutral-800 text-[16px] font-semibold'>Shivam Dubey</h2></div>
      </div>

      <div className='flex gap-4 mt-[-2px] py-2 px-0   '>
      <h2  className='font-semibold py-1 px-0 text-[19px]'>Question Palette</h2> 


     
     <button className=' rounded py-0 px-0  w-36 mr-2 h-8 text-[white] bg-blue-500 text-center grid place-content-center mt-2  '>Grid View</button>
      </div>

    <div className="w-full grid grid-cols-3  ">
      <div className="flex items-center">
        <Dot color={"green"}/>
        <p className='text-[14px] font-medium text-[gray] px-1 py-1'>Attempted</p>
      </div>
      <div className="flex items-center">
        <Dot color={"black"}/>
        <p  className='text-[14px] font-medium text-[gray] px-1 py-1'>Unattempted</p>
      </div>
      <div className="flex items-center ml-3">
        <Dot color={"gray"}/>
        <p  className='text-[14px] font-medium text-[gray] px-1 py-1'>Unseen</p>
      </div>
      <div className="flex items-center mt-[-4px]">
        <Dot color={"yellow"}/>
        <p  className='text-[14px] font-medium text-[gray] px-1 py-1'>Marked</p>
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

export default QSidebar
