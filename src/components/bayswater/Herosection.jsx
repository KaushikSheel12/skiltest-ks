import Image from "next/image";
import React from "react";
import { AutoScrollCards } from "./Scroll";
import Yearbox from "./Yearbox";
import { pageData } from "./data/data";

const Herosection = () => {
  return (
    <>
      <div className="md:w-[80%] w-full md:px-0 px-3  mx-auto  h-[500px]  md:flex  ">
        <div className="p-4 py-2 px-0">
          <h1 className="md:text-[94px] text-[45px] font-semibold text-[#080860e2] leading-[50px]  md:leading-[100px] ">
            How big is your world?
          </h1>
          <p className=" py-2 md:mt-5  md:pr-8 text-[18px]   leading-7 text-gray-600 ">
            Inspiring courses for the life you want to lead. <br /> Discover our
            fresh approach to a life-changing educational adventure.
          </p>
          <div className=" md:w-fit w-[95%] flex md:mx-0  mx-auto  place-content-center    px-8 hover:bg-[#14146e]   bg-[#1f1fb4] text-white  mt-6 py-3 h-fit cursor-pointer  rounded-md">
            Contect
          </div>
        </div>

        <div className="  md:w-[90%] w-full  md:h-full  h-[300px]  border border-red-500">
          <div className="flex   w-full h-[50%] ">
            <div className="border  border-green-300 w-full h-full "></div>
            <div className="border  border-green-300 w-full h-full relative ">
              <Image
                fill
                alt="small-img"
                src="https://images.doclify.net/bayswater-web/d/4ea58663-b658-4d0a-b655-19a317a8cc43.png?enlarge=0&format=webp&w=500"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex border w-full h-[50%] ">
            <div className="border  border-green-300 w-full   relative ">
              <Image
                fill
                alt="small-img"
                src="https://images.doclify.net/bayswater-web/d/8ec9a6cc-809c-4207-9e74-f8043f43bded.png?enlarge=0&format=webp&w=600"
                className="object-fill rounded-full hover:rounded-none  "
              />
            </div>
            <div className="border border-green-300 w-full h-full  "></div>
          </div>
        </div>
      </div>
      <AutoScrollCards />

      <div className="md:flex w-[90%]  md:w-[80%] h-[600px] md:px-2 py-2 md:mt-10 mx-auto   items-center gap-4 ">
        <div className="imgdiv  md:w-[50%] w-full  md:h-full h-[370px]  relative ">
          <Image
            src="https://images.doclify.net/bayswater-web/d/8e34f447-3ff0-4f13-a7a2-c516501bdbc2.png"
            className="object-contain"
            fill
          />
        </div>
        <div className="txtdiv md:w-[50%] w-full  h-full   ">
          <h1 className="md:text-[66px] mt-0 md:mt-16 md:py-0   py-6 text-[40px] font-semibold text-[#080860e2] leading-[40px]  md:leading-[80px] ">
            Create the life you want to live.
          </h1>
          <p className=" md:py-0   md:mt-5  md:pr-8 text-[18px]   leading-7 text-gray-600 ">
            There’s a big, wonderful world out there, and we’re here to help you
            explore it. We’re on a mission to educate and inspire young people
            through life-changing educational experiences. Our network of
            forward-thinking educational centres is designed to meet the needs
            of today’s world, where young people can learn valuable life skills,
            get a taste of freedom away from home and appreciate the value of
            giving something back.
          </p>
          <div className=" md:w-fit w-full flex md:mx-0  mx-auto  place-content-center whitespace-nowrap     md:px-8 hover:bg-[#14146e]   bg-[#1f1fb4] text-white  mt-6 py-4 h-fit cursor-pointer  rounded-xl">
            Read about our One-to-One Initiative
          </div>
        </div>
      </div>


      <div className="flex  mb-5  md:mt-20 justify-around items-center   w-[80%] h-[122px] mx-auto">

        {pageData.map((el,index)=>{

          console.log("elImg" , el)
          return (
            <Yearbox key={index} text={el.text} imgUrl={el.img} ptag={el.ptag} />
          )
        })}

        
      </div>
      

    


   
    </>
  );
};

export default Herosection;
