import React from 'react'
import { TiTick } from 'react-icons/Ti'

const ClgBox = () => {
  return (
    <>
        <div className="md:w-[50%] w-[70%] md:h-[80%] border border-gray-400 md:py-0 md:mt-2 mt-4 md:p-0 p-4 md:rounded-none rounded-md  px-0">
            <div className="h-[65%] w-full bg-gray-200 ">
              <p className="text-[#3b5eb0] md:text-[15px] text-[12px]  px-2 py-0">
                B.Teck Computer Science and Engineering
              </p>
              <p className="md:text-[12px] text-[11px] text-gray-600 py-0 px-2">
                Seats <span className="text-gray-400">240</span>{" "}
              </p>
            </div>

            <div className="h-[35%] w-full text-center">
              <div className="flex justify-center  items-center mx-auto px-2 py-0-1 ">
                <TiTick size={19} color="black"  className='md:w-6 w-4'/>
                <p className="text-[green] md:text-sm text-[12px]">Good Chances</p>
              </div>
              <p className="md:text-[12px] text-[11px] py-1  text-[gray]">Last year's Cut-off State Rank 77445</p>
            </div>
          </div>
    </>
  )
}

export default ClgBox