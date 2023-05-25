import React from 'react'
import QSidebar from './QSidebar'
import questions from "../data/questions";


const  QSections = () => {

let i = 1;


  return (
<>
<div  className="w-full grid h-28 grid-cols-1 md:grid-cols-4 gap-x-3 py-6 px-4 mt-12 ">
<div className=" col-span-3 p-2">

<div className='mt-[-20px] flex gap-5  px-2 py-2 items-center fixed bg-white w-full h-auto'> <h2 className='font-bold'>Sections :</h2> <button className='py-2 px-3 border rounded-full border-blue-600 text-blue-600'>Quiz</button> </div>

 <div>
  <h2 className='mt-[30px] px-2 py-2 font-semibold text-[18px] '>Question Paper</h2>
  {questions.map((el)=>{
    return <div key={el.id} className=' mt-[-7px] py-2 px-2 mb-5'> 
      <h2  className='font-semibold'>{el.question}</h2>
<hr className='mt-5'/>
      <div className='grid grid-cols-5 gap-2'>{el.options.map((el)=>{
        return <div key={el}> <p>{el}</p></div> 
      })}</div>
    </div>
  })}
 </div>

   <div className=' py-2 px-2 h-12 w-[70%] mx-auto  mt-0   grid place-content-center items-center overflow-hidden bg-white fixed'> <button className="px-2  mb-0 py-2 w-[110px] h-9  grid place-content-center mx-auto  content-center  border rounded  text-black border-black bg-white">Back to Test</button></div>
  
</div>
<div className="w-full border sticky top-10 hidden md:block h-fit">
          <QSidebar />
        </div>
</div>

</>
  )
}

export default QSections