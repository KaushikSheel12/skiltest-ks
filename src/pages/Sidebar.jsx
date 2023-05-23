import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
  return (
    <div className=' fixed left-auto top-0 h-screen mt-20  '>

      <div className='flex justify-center mt-10 mx-20'> 
        <Image width={200} height={200} alt="user-profile" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/800px-Default_pfp.svg.png"/>
      </div>
    <h2 className='text-center from-neutral-800 text-[22px] font-semibold'>Shivam Dubey</h2>
    </div>
  )
}

export default Sidebar
