
import Image from 'next/image'
import React from 'react'
import { Dot } from './Dot'
import { Accordian } from './Accordian'
import questions from '@/data/questions'

const QSidebar = () => {

  let i = 1;

  const GetTheQution=(el)=>{
    console.log("Qution", el)
  }


  return (
    <div className='  border-l-2 px-1 fixed  py-3 h-fit  left-auto top-[60px]  mt-0  '>

      <div className='   flex py-2 px-2 items-center ' > 
      <div>
      <Image width={65} height={65} alt="user-profile" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/800px-Default_pfp.svg.png"/>
      </div>
      <div className='px-4'> <h2 className='text-center from-neutral-800 text-[16px] font-semibold'>Shivam Dubey</h2></div>
      </div>

      <div className='flex gap-4 mt-[-14px] py-2 px-2   '>
      <h2  className='font-semibold py-1 px-0 text-[19px]'>Question Palette</h2> 


     
     <button className=' rounded py-0 px-0  w-28 mr-2 h-8 text-[white]  bg-blue-500 text-center grid place-content-center mt-2  '>Grid View</button>
      </div>

    <div className="w-full grid grid-cols-3 px-2  ">
      <div className="flex items-center">
        <Dot color={"green"}/>
        <p className='text-[14px] font-medium text-[gray] px-1 py-1'>Attempted</p>
      </div>
      <div className="flex items-center">
        <Dot color={"black"}/>
        <p  className='text-[14px] font-medium text-[gray] px-0 ml-1 py-1'>Unattempted</p>
      </div>
      <div className="flex items-center ml-3">
        <Dot color={"gray"}/>
        <p  className='text-[14px] font-medium text-[gray] px-1 py-1'>Unseen</p>
      </div>
      <div className="flex items-center mt-[-4px]">
        <Dot color={"orange"}/>
        <p  className='text-[14px] font-medium text-[gray] px-1 py-1'>Pending</p>
      </div>
    </div>
    <Accordian>
      <div className='grid grid-cols-5   mx-auto  gap-2 p-2  overflow-y-scroll  scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-white  h-[200px]'>
      {questions.map((el,index)=>{
 return   <div key={index} className='mt-[4px]  grid  place-content-center mx-auto' >
     <button onClick={()=>GetTheQution(el)} className='border  bg-gray-500 px-2 py-0 w-11 h-7  grid place-content-center rounded text-[white]'>
      {el.id}</button>
  </div>
})}
      </div>
    </Accordian>
    </div>
  )
}

export default QSidebar
