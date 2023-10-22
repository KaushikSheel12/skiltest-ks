import React from 'react'

export const Toptitle = ({heading , paraGraph}) => {
  return (
    <div className='w-full h-fit text-center mt-2'>
        <h1 className='text-[48px] font-bold py-2 '>{heading}</h1>
        <p className='text-[18px] text-gray-500'> {paraGraph} </p>
    </div>
  )
}
