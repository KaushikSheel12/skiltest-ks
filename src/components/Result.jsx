import React from "react";
import { RxCrossCircled } from "react-icons/Rx";
import { SiSimpleanalytics } from "react-icons/si";
import { RiCheckDoubleLine, RiTimerLine } from "react-icons/Ri";
import { GiChart } from "react-icons/gi";
import { BsListStars, BsPercent } from "react-icons/Bs";
import {FaRegTimesCircle} from 'react-icons/Fa'
import {FiFlag} from 'react-icons/Fi'
import PieChart from "./PieChart";
import { AiTwotoneStar } from "react-icons/ai";


const Result = () => {
  return (
    <>
      <div className="w-[90%] mx-auto grid  py-6 px-4 mt-12  ">
        <h1 className="font-semibold text-start text-[19px] ">
          Overall Performance Analysis
        </h1>

        <div className="flex col-span-8  justify-between h-auto mt-5 flex-wrap border">


          <div className="border-l-2  text-center px-2  h-16 w-32">
            <p className="font-semibold  text-green-600  text-lg ">0/30</p>

            <div className="flex justify-center gap-1 py-2">
              <div className="flex items-center ">
                {" "}
                <RiCheckDoubleLine size={18} />
              </div>
              <p className="font-semibold text-gray-600 text-[14px]">Right</p>{" "}
            </div>

          </div>

          <div className="border-l-2 text-center px-2  h-16 w-32">
            <p className="font-semibold  text-red-600 text-lg ">0/30</p>

            <div className="flex justify-center gap-1 py-2 items-center">
              <RxCrossCircled size={15} />
              <p className="font-semibold text-gray-600  text-[14px]">
                Wrong
              </p>{" "}
            </div>
          </div>

          <div className="border-l-2  text-center px-2  h-16 w-32">
            <p className="font-semibold   text-lg ">0/30</p>

            <div className="flex justify-center gap-1 items-center">
              <SiSimpleanalytics size={12} />
              <p className="font-semibold text-gray-600 py-2 text-[14px]">
                Score
              </p>{" "}
            </div>
          </div>

          <div className="border-l-2  text-center px-2 h-16 w-32">
            <p className="font-semibold   text-lg ">00:00:05</p>

            <div className="flex justify-center gap-1 items-center">
              <RiTimerLine size={18} />
              <p className="font-semibold text-gray-600 py-2 text-[14px]">
                Time
              </p>{" "}
            </div>
          </div>

          <div className="border-l-2  text-center px-2  h-16 w-32">
            <p className="font-semibold   text-lg ">0%</p>

            <div className="flex justify-center gap-2 items-center">
              <GiChart size={14} />
              <p className="font-semibold text-gray-600 py-2 text-[14px]">
                Accuracy
              </p>{" "}
            </div>
          </div>

          <div className="border-l-2  text-center px-2  h-16 w-32">
            <p className="font-semibold   text-lg ">10%</p>

            <div className="flex justify-center gap-1 items-center">
              <BsPercent />
              <p className="font-semibold text-gray-600 py-2 text-[14px]">
                Percentile
              </p>{" "}
            </div>
          </div>

          <div className="border-l-2  text-center px-2  h-16 w-32">
            <p className="font-semibold  text-green-600  text-lg ">0/30</p>

            <div className="flex justify-center gap-1 py-2">
              <div className="flex items-center ">
                {" "}
                <RiCheckDoubleLine size={18} />
              </div>
              <p className="font-semibold text-gray-600 text-[14px]">Attempted</p>{" "}
            </div>
          </div>

          <div className="border-l-2 border-r-2 text-center px-2  h-16 w-32">
            <p className="font-semibold   text-lg ">45/9252</p>

            <div className="flex justify-center gap-1 items-center">
              <BsListStars size={18} />
              <p className="font-semibold text-gray-600 py-2 text-[14px]">
                Rank
              </p>{" "}
            </div>
          </div>
        </div>

        {/* Blow */}

        <div
          className="flex col-span-7 w-[1150px] border 
 justify-between h-auto mt-7 flex-wrap "
        >
          <div className="  font-semibold h-14 w-32">
            <p className="py-2 px-2">Section Name</p>
          </div>

          <div className="  py-2 px-2  h-14 w-24">
            <div className="flex items-center mt-2">
              <div className="flex items-center gap-2 ">
                {" "}
                <RiCheckDoubleLine size={18} />
              </div>
              <p className="font-semibold text-gray-600  text-[14px] ml-2">
                Right
              </p>{" "}
            </div>
          </div>

          <div className="  py-2 px-2 h-14 w-24">
            <div className="flex justify-center gap-1 items-center">
              <RxCrossCircled size={15} />
              <p className="font-semibold text-gray-600 py-2 text-[14px]">
                Wrong
              </p>{" "}
            </div>
          </div>

          <div className="  py-2 px-2 h-14 w-24">
            <div className="flex justify-center gap-1 items-center">
              <SiSimpleanalytics size={12} />
              <p className="font-semibold text-gray-600 py-2 text-[14px]">
                Score
              </p>
            </div>
          </div>

          <div className="  py-2 px-2 h-14 w-24">
            <div className="flex justify-center gap-1 items-center">
              <RiTimerLine size={18} />
              <p className="font-semibold text-gray-600 py-2 text-[14px]">
                Time
              </p>
            </div>
          </div>

          <div className="  py-2 px-2 h-14 w-28">
            <div className="flex items-center mt-2 px-4">
              <div>
                {" "}
                <RiCheckDoubleLine size={18} />
              </div>

              <p className="font-semibold text-gray-600  text-[14px]">
              Accuracy
              </p>
            </div>
          </div>

          <div className="  py-2 px-2 h-14 w-24">
            <div className="flex justify-center gap-1 items-center">
              <BsListStars size={18} />
              <p className="font-semibold text-gray-600 py-2 text-[14px]">
                Rank
              </p>{" "}
            </div>
          </div>
        </div>

        {/* Quiz */}
        <div
          className="flex col-span-7 
 justify-between h-auto  flex-wrap border   w-[1150px]"
        >
          <div className="  font-semibold h-14 w-32">
            <p className="py-2 px-2">Quiz</p>
          </div>

          <div className="  py-2 px-4  h-14 w-24">
            <p className="text-green-600">0/30</p>
          </div>

          <div className="  py-2 px-4 h-14 w-24">
            <p className="text-red-600">0/30</p>
          </div>

          <div className="  py-2 px-4 h-14 w-24">
            <p>0/30</p>
          </div>

          <div className="  py-2 px-4 h-14 w-24">
            <p>00m 05s</p>
          </div>

          <div className="  py-2 px-6 h-14 w-28">
            <p>0%</p>
          </div>

          <div className="  py-2 px-6 h-14 w-24">
            <p>45</p>
          </div>
        </div>

        {/* Total */}

        <div
          className="flex col-span-7 
 justify-between h-auto  flex-wrap border   w-[1150px]"
        >
          <div className="  font-semibold h-14 w-32">
            <p className="py-2 px-2">Total</p>
          </div>

          <div className="  py-2 px-4  h-14 w-24">
            <p className="text-green-600">0/30</p>
          </div>

          <div className="  py-2 px-4 h-14 w-24">
            <p className="text-red-600">0/30</p>
          </div>

          <div className="  py-2 px-4 h-14 w-24">
            <p>0/30</p>
          </div>

          <div className="  py-2 px-4 h-14 w-24">
            <p>00m 05s</p>
          </div>

          <div className="  py-2 px-6 h-14 w-28">
            <p>0%</p>
          </div>

          <div className="  py-2 px-6 h-14 w-24">
            <p>45</p>
          </div>

        
        </div>

      </div>


<div className="flex">

<div className="h-48 w-52 py-2 px-2 mx-auto  border">
  <div className='flex gap-2 justify-center'>
  <div className="flex items-center  text-[green]">
                {" "}
                <RiCheckDoubleLine size={18} />
              </div>
  <p className=" font-semibold ">Correct </p>
  </div>
   <div className="h-32 w-32 mx-auto mt-1 "><PieChart/></div>

<div className="flex gap-2 text-[15px] justify-center font-semibold" >
  <p>83.00% </p>
  <p ><span className="text-[green]">164</span>/200</p>
</div>
  </div>


  <div className="h-48 w-52 py-2 px-2 mx-auto  border">
  <div className='flex gap-2 justify-center'>
  <div className="flex items-center  text-[red]">
                {" "}
                <FaRegTimesCircle size={18} />
              </div>
  <p className=" font-semibold ">Incorrect </p>
  </div>
   <div className="h-32 w-32 mx-auto mt-1 "><PieChart/></div>

<div className="flex gap-2 text-[15px] justify-center font-semibold" >
  <p>53.00% </p>
  <p ><span className="text-[red]">12</span>/200</p>
</div>
  </div>



<div className="h-48 w-52 py-2 px-2 mx-auto  border">
  <div className='flex gap-2 justify-center'>
  <div className="flex items-center  text-[#ff9900]">
                {" "}
                <FiFlag size={18} />
              </div>
  <p className=" font-semibold ">Left</p>
  </div>
   <div className="h-32 w-32 mx-auto mt-1 "><PieChart/></div>

<div className="flex gap-2 text-[15px] justify-center font-semibold" >
  <p>63.00% </p>
  <p ><span className="text-[#ff9900]">46</span>/200</p>
</div>
  </div>






  <div className="h-48 w-52 py-2 px-2 mx-auto  border">
  <div className='flex gap-2 justify-center'>
  <div className="flex items-center  text-[#0077ff]">
                {" "}
                <AiTwotoneStar size={18} />
              </div>
  <p className=" font-semibold ">Accuracy </p>
  </div>
   <div className="h-32 w-32 mx-auto mt-1 "><PieChart/></div>

<div className="flex gap-2 text-[15px] justify-center font-semibold" >
  <p>23.00% </p>
  <p ><span className="text-[#0077ff]">75</span>/200</p>
</div>
  </div>








</div>
    
    </>
  );
};

export default Result;
