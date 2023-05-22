import React from 'react'
import Sidebar from './Sidebar'

const Instructions = () => {
  return (
    <div className='w-full  h-28 grid grid-cols-4 gap-x-3 py-2 px-4'>


      <div className='border col-span-4 md:col-span-3'>
        kas ho
      </div>

      <div className='w-full border h-28 hidden md:block '>
<Sidebar/>
</div>
      
    </div>
  )
}

export default Instructions
