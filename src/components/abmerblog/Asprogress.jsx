import React from "react";
import { BsStar } from "react-icons/Bs";
import { GrSettingsOption } from "react-icons/Gr";
import { MdOutlineSettings } from "react-icons/Md";
import { RiLightbulbFlashLine, RiPencilRuler2Line } from "react-icons/Ri";
import { AiOutlineCodeSandbox } from "react-icons/ai";

const Asprogress = () => {
  return (
    <>
      <div className="w-[80%] mx-auto  h-full  mt-20 text-center">
        <div className="border border-teal-400 w-[240px] mx-auto mt-4"></div>
        <div className="h-[50px]  w-0 mx-auto border border-teal-400"></div>
        <div className="w-[10px] h-[10px]  rounded-full bg-teal-400 mx-auto"></div>
        <h1 className="font-semibold text-[40px]">To progress...</h1>
        <div className="h-[50px]  w-0 mx-auto border border-teal-400 mt-2"></div>

        <div className="border border-teal-400 w-[160px] ml-[557px]"></div>

        <div className="h-[170px]  w-0 mx-auto border border-teal-400 ml-[557px]"></div>

        <h2 className="absolute  left-[595px] top-[312px] font-semibold text-[33px] ">
          First job
        </h2>
        <div className="w-[450px] h-[110px] border absolute  left-[795px] top-[287px] flex items-center justify-between text-[23px] text-white px-4 py-4 bg-gray-800">
          <div>
            <h2>Juior Engineer</h2>
            <h2>28,000</h2>
          </div>
          <RiPencilRuler2Line size={65} />
        </div>

        <div className="w-[10px] h-[10px] rounded-full bg-teal-400 left-[733px] absolute top-[335px] "></div>
    
        <div className="w-[300px] h-[170px] border-t-2 border-teal-400 border-r-2 mx-auto absolute border-b-2  left-[737px]">
        <div className="w-[450px] h-[110px] border absolute right-[100px] top-[30px] flex items-center justify-between text-[23px] text-white px-4 py-4 bg-teal-600">
          <MdOutlineSettings size={57} color="white" />
          <div>
            <h2> Engineer</h2>
            <h2>33,000</h2>
          </div>
        <div className="w-[10px] h-[10px] absolute  top-12  left-[545px] rounded-full bg-teal-400 mx-auto"></div>
        <h4 className=" absolute  font-semibold left-[600px] text-gray-800 mt-2 whitespace-nowrap">+ 9 months</h4>
        </div>
        </div>






        <div className="w-[300px] h-[170px] border-t-2 border-teal-400 border-l-2 mx-auto absolute border-b-2 top-[600px] left-[737px]">
        <div className="w-[450px] h-[110px] border absolute left-[100px] top-[30px] flex items-center justify-between text-[23px] text-white px-4 py-4 bg-pink-600">
          <div>
            <h2>Senior Engineer</h2>
            <h2>42,000</h2>
          </div>
          <AiOutlineCodeSandbox size={57} color="white" />
        <div className="w-[10px] h-[10px] absolute  top-12  right-[545px] rounded-full bg-teal-400 mx-auto"></div>
        <h4 className=" absolute  font-semibold right-[600px] text-gray-800 mt-2 whitespace-nowrap">+ 56 months</h4>
        </div>
        </div>


 
        <div className="w-[300px] h-[170px] border-t-2 border-teal-400 border-r-2 mx-auto absolute border-b-2 top-[768px] left-[737px]">
        <div className="w-[450px] h-[110px] border absolute right-[100px] top-[30px] flex items-center justify-between text-[23px] text-white px-4 py-4 bg-blue-500">
          <RiLightbulbFlashLine size={57} color="white" />
          <div>
            <h2>Prinicipal</h2>
            <h2>52,000</h2>
          </div>
        <div className="w-[10px] h-[10px] absolute  top-12  left-[545px] rounded-full bg-teal-400 mx-auto"></div>
        <h4 className=" absolute  font-semibold left-[600px] text-gray-800 mt-2 whitespace-nowrap">+ 64 months</h4>
        </div>
        <div className="h-[140px] absolute top-[167px] w-0 mx-auto border border-teal-400 "></div>
        <div className="w-[10px] h-[10px] absolute  top-[307px]  left-[-4px] rounded-full bg-teal-400 mx-auto"></div>
        </div>

        <div className="w-[450px] h-[160px] border absolute left-[800px] top-[1000px]  text-left text-[23px] text-white px-4 py-4 bg-yellow-500">
          <BsStar size={57} color="white"   />

       <div className="mt-4 ml-2">

            <h2>Director of Engineering</h2>
            <h2>100K +</h2>
       </div>

       <h4 className=" absolute  font-semibold right-[570px] top-[0px] text-gray-800 mt-2 whitespace-nowrap">+ 87 months</h4>
      
       <h2 className=" text-black absolute whitespace-nowrap  right-[570px] top-[52px] font-semibold text-[33px] ">
          First job
        </h2>
        </div>

      </div>
    </>
  );
};

export default Asprogress;
