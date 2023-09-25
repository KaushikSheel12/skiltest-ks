import React from 'react'

export const NameEmail = () => {
  return (
   <>
   <div className="w-[80%] h-fit mx-auto">
   <h1 className="text-center   font-semibold text-[24px] py-2">
   Please enter your Name and Email
      </h1>
      <input  type="text" className='w-full shadow-lg rounded-md mt-2 py-1 px-2' placeholder='Name'  />
      <input type="email" className='w-full shadow-lg rounded-md mt-2 py-1 px-2' placeholder='Email' />
   </div>
   </>
  )
}
