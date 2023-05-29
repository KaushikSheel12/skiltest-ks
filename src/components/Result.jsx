import Image from 'next/image'
import React from 'react'
import { RxCrossCircled } from 'react-icons/Rx'
import {SiSimpleanalytics} from 'react-icons/si'
import { RiCheckDoubleLine, RiTimerLine} from 'react-icons/Ri'
import {GiChart} from 'react-icons/gi'
import {BsListStars, BsPercent} from 'react-icons/Bs'

const Result = () => {
  return (
 <>
 <div className="w-[90%] mx-auto grid  py-6 px-4 mt-12  ">
 <h1 className='font-semibold text-start text-[24px] '>Overall Performance Analysis</h1>

 <div className="flex col-span-8 border justify-around h-auto mt-4 flex-wrap">



 <div className='border w-24 h-auto text-center px-2 py-2'>     
  <p className=  'font-semibold  text-green-600  text-lg '>0/30</p>
  
  <div className='flex items-center'>
    <div className='w-10 h-10 flex items-center ml-3'>  <RiCheckDoubleLine size={18}/></div>

  <p className='font-semibold text-gray-600 mr-3 text-[14px]'>Right</p> </div>


  </div>
          


  <div className='border w-24 h-auto text-center px-2 py-2'>     
  <p className=  'font-semibold  text-red-600 text-lg '>0/30</p>

  <div className='flex justify-center gap-1 items-center'>
  <RxCrossCircled size={15}/>
  <p className='font-semibold text-gray-600 py-2 text-[14px]'>Wrong</p> </div>


  </div>



  <div className='border w-24 h-auto text-center px-2 py-2'>     
  <p className=  'font-semibold   text-lg '>0/30</p>

  <div className='flex justify-center gap-1 items-center'>
  <SiSimpleanalytics size={12}/>
  <p className='font-semibold text-gray-600 py-2 text-[14px]'>Score</p> </div>


  </div>



 
  <div className='border w-24 h-auto text-center px-2 py-2'>     
  <p className=  'font-semibold   text-lg '>00:00:05</p>

  <div className='flex justify-center gap-1 items-center'>
  <RiTimerLine size={18}/>
  <p className='font-semibold text-gray-600 py-2 text-[14px]'>Time</p> </div>


  </div>



  
  <div className='border w-24 h-auto text-center px-2 py-2'>     
  <p className=  'font-semibold   text-lg '>0%</p>

  <div className='flex justify-center gap-2 items-center'>
  <GiChart size={14}/>
  <p className='font-semibold text-gray-600 py-2 text-[14px]'>Accuracy</p> </div>


  </div>




  <div className='border w-24 h-auto text-center px-2 py-2'>     
  <p className=  'font-semibold   text-lg '>10%</p>

  <div className='flex justify-center gap-1 items-center'>
  <BsPercent />
  <p className='font-semibold text-gray-600 py-2 text-[14px]'>Percentile</p> </div>


  </div>




  <div className='border w-24 h-auto text-center px-2 py-2'>     
  <p className=  'font-semibold   text-lg '>0/30</p>

  <div className='flex justify-center gap-1 items-center'>
    <div className='w-10 h-10 flex items-center'>  <RiCheckDoubleLine size={18}/></div>

  <p className='font-semibold text-gray-600 py-2  text-[14px]'>Attempted</p> </div>


  </div>


  <div className='border w-24 h-auto text-center px-2 py-2'>     
  <p className=  'font-semibold   text-lg '>45/9252</p>

  <div className='flex justify-center gap-1 items-center'>
  <BsListStars size={18}/>
  <p className='font-semibold text-gray-600 py-2 text-[14px]'>Rank</p> </div>

  </div>
 </div>
 </div>
 </>
  )
}

export default Result


