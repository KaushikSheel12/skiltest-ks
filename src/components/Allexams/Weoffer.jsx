import React, { useState } from 'react'
import { BsCameraVideo, BsCardChecklist } from 'react-icons/Bs'
import {GrDocumentTime} from 'react-icons/Gr'
import { GiBookCover } from 'react-icons/gi'
import PrevYearP from './Courses/PrevYearP'
import Quizzes from './Courses/Quizzes'
import TestSeries from './Courses/TestSeries'


const Weoffer = () => {
  const [activeComponent, setActiveComponent] = useState(null);
 const [active  ,setActive] = useState(false)

  const handleClick = (component) => {
    setActiveComponent(component);
    setActive(true)
  };

  return (
   <>
   <h1 className='text-center px-2 py-6 font-semibold text-[24px]'>Content we offer</h1>
<div className='w-[90%] border border-red-400  flex flex-col md:flex-row px-2 py-2 mx-auto'>

<div className='w-80 h-full px-2 flex flex-row md:block overflow-x-scroll '>

{console.log("active" , active)}

  <div className={`border w-full h-full  rounded   mb-2 cursor-pointer hover:bg-sky-500 bg-white  group `}
   style={{backgroundColor : {active} ?   "#008080": "#15CDF2" }}
   onClick={() => handleClick(<TestSeries />)}>
<div className='flex items-center gap-2 py-2 px-2'>
<div className='w-12 h-12 border rounded-full flex justify-center  items-center bg-[#c58af2]  text-white group-hover:bg-sky-500'>  <GrDocumentTime size={20} className='text-white invert-[1]'  color='white' /></div>
<h2 className='font-semibold text-gray-500 group-hover:text-white'>Test Series </h2>
</div>
  </div>


  <div className='border w-full h-full  rounded   mb-2 cursor-pointer hover:bg-sky-500  group '
   onClick={() => handleClick(<Quizzes />)}>
<div className='flex items-center gap-2 py-2 px-2'>
<div className='w-12 h-12 border rounded-full flex justify-center  items-center bg-[#c58af2] text-white group-hover:bg-sky-500 '>  <BsCardChecklist size={20}/></div>
<h2 className='font-semibold  text-gray-500 group-hover:text-white' >Quizzes</h2>
</div>
  </div>

  <div className='border w-full h-full  rounded   mb-2 cursor-pointer hover:bg-sky-500  group '  
  onClick={() => handleClick(<PrevYearP />)}>
<div className='flex  items-center gap-2 py-2 px-2' >
<div className='w-12 h-12 border rounded-full flex justify-center  items-center bg-[#c58af2] text-white group-hover:bg-sky-500'>  <GiBookCover size={20} /></div>
<h2 className='font-semibold  text-gray-500 group-hover:text-white'>Previous Year Papers</h2>
</div>
  </div>


  </div>




  <div className='border border-red-500 w-full '>{activeComponent}</div>



</div>


   </>
  )
}

export default Weoffer