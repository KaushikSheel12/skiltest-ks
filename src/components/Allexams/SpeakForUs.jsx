import React from 'react'

const SpeakForUs = () => {
  return (
  <>
  <div className='w-full text-center h-full bg-teal-500 px-2 py-4 mt-10'>
    <h2 className='font-semibold text-white text-[26px]'>Our Numbers Speak For Us</h2>

    <div className='flex  justify-center py-2   px-2 gap-6 mt-2 text-white font-semibold '>
      <h1 className='text-5xl font-semibold text-amber-400 mt-2'>3Cr+</h1>
      <h2 className='text-[23px]'>Registered <br /> Students   </h2>
    </div>

    <div className='flex gap-5 justify-center items-center py-4'>


      <div className='w-[300px] h-auto border text-center bg-white font-bold text-blue-400 rounded py-2 px-2'>
        <h1 className='text-4xl  px-2'>3.44 Cr+</h1>
        <h2 className='text-xl py-1 px-2'>Video Classes attended</h2>
      </div>


      <div className='w-[300px] h-auto border text-center bg-white font-bold text-green-500 rounded py-2 px-2'>
        <h1 className='text-4xl  px-2'>3.44 Cr+</h1>
        <h2 className='text-xl py-1 px-2'>Video Classes attended</h2>
      </div>


      <div className='w-[300px] h-auto border text-center bg-white font-bold text-red-600 rounded py-2 px-2'>
        <h1 className='text-4xl  px-2'>3.44 Cr+</h1>
        <h2 className='text-xl py-1 px-2'>Video Classes attended</h2>
      </div>



    </div>
  </div>
  </>
  )
}

export default SpeakForUs