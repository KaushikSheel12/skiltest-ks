import React from 'react'

const Mhome = () => {
  return (
   <>
   <div className='w-full bg-[#f4f4e6] text-center h-[700px] border'>
    <h1 className='font-semibold text-[40px]'>Find the right college for you</h1>
    <p className='text-[20px]'>Distance should not limit your college options</p>
    <div className='w-[410px] px-2 py-2 h-[53px] bg-white mx-auto mt-4 border  items-center  flex justify-between '>
        <div>
        <input type="text" className='w-[300px] h-[53px] border-none text-center' placeholder='Enter a college or university' />
        </div>
     
        <div className='w-[90px] h-[47px] bg-blue-600 text--white rounded-lg  grid place-content-center text-white cursor-pointer '>
            
            
            
            Search</div>
        
    </div>
   </div>
   </>
  )
}

export default Mhome