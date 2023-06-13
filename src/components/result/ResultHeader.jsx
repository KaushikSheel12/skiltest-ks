import Image from 'next/image'
import React from 'react'

const ResultHeader = () => {
  return (
   <>
     <div className="md:flex hidden top-0 py-2 fixed  px-2   w-full border justify-between overflow-hidden bg-white items-center">
      <div className="flex">
        <Image
          width={80}
          height={35}
          src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Google_2011_logo.png"
          alt="google"
          className="object-contain"
        />

        <h2 className="ml-10 text-[15px] flex font-semibold ">
          UPSC Civil Services<span className="block md:hidden">....</span><span className="hidden md:block">Prelims CSAT Full Test 4</span>{" "}
        </h2>
      
      </div>

   


      <div>

    

      <div className='flex w-[300px] h-auto gap-10 px-2 justify-around py-2'>
    <button className='border hover:bg-yellow-300 bg-yellow-400 px-2 py-2 rounded-md'>Reattempt Test</button>
    <button className='border border-black px-2 py-1 rounded-md hover:bg-black hover:text-white'>Go to Tests</button>
</div>

  
      </div>
    </div>
   </>
  )
}

export default ResultHeader