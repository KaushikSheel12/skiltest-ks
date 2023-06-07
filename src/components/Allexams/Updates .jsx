import { updates } from '@/data/updateResult'
import React from 'react'




const Updates  = () => {



  return (
<>

<div className='mt-2'>
<h1 className='text-center font-semibold text-2xl py-4  px-2'>Latest Updates & Notifications</h1>
<div className='flex px-2 py-2 col-span-3 justify-center items-center gap-10  flex-wrap'>
    <div className='border  w-80 h-auto px-2 py-2'>
<h2 className='px-1 font-semibold text-[19px]'>Results</h2>
<hr className="w-full h-1  mx-auto  bg-gray-100 border-0 rounded  dark:bg-gray-700 top-0 mt-1"/>

<div>{updates.map((el)=>el.Result.map((admitelemet , admitindex)=> {
  return <p key={admitindex}>{admitelemet}</p>
}))}</div>
    </div>


    <div className='border w-80 h-auto px-2 py-2'>
        <h2 className='px-1  font-semibold text-[19px]'>Notifications</h2>
        <hr className="w-full h-1  mx-auto  bg-gray-100 border-0 rounded  dark:bg-gray-700 top-0 mt-1"/>
<div>{updates.map((el)=>el.Notifications.map((admitelemet , admitindex)=> {
  return <p key={admitindex}>{admitelemet}</p>
}))}</div>
    </div>

    <div className='border w-80 h-auto px-2 py-2'>
        <h2 className='px-1  font-semibold text-[19px]'>Admit Cards</h2>
        <hr className="w-full h-1  mx-auto  bg-gray-100 border-0 rounded  dark:bg-gray-700 top-0 mt-1"/>
      <div>{updates.map((el)=>el.AdmitCards.map((admitelemet , admitindex)=> {
  return <p key={admitindex}>{admitelemet}</p>

}))}</div>
    </div>

</div>
</div>
</>
  )
}

export default Updates 