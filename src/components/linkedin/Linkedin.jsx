import Image from "next/image";
import React from "react";
import Linkbox from "./Linkbox";

const Linkedin = () => {
  return (
    <>
      <div className="mt-20 border md:w-[60%]  w-full mx-auto h-full px-10 py-2  bg-[#fffbef] ">
        <h3 className="font-semibol text-gray-600 md:text-[21px] px-10 py-4">
          LinkedIn is thriving everywhere
        </h3>
        <div className="flex justify-around items-center   gap-40">
          <Linkbox
            imgUrl="https://cdn-icons-png.flaticon.com/512/3437/3437306.png"
            text="706 millon+"
            pTag="members"
          />

          <Linkbox
            imgUrl="https://monsterppc.com/wp-content/uploads/2015/04/NavigationIcon-01.png"
            text="200+"
            pTag="countries & territories"
          />

          <Linkbox
            imgUrl="https://png.pngtree.com/element_our/png/20181228/building-vector-icon-png_296032.jpg"
            text="55 millon+"
            pTag="companies"
          />
        </div>



        <div className=" w-full h-fit flex justify-between ">
            <div className="w-[50%] h-[350px] relative  mt-[-10px] px-12">

                <div className="w-[150px] h-[150px] relative rounded-full  py-4  bg-[#eae1c7] grid place-content-center">
                    <div className="flex absolute top-3 left-8 items-center gap-5">
                    <h1 className="text-[90px]  font-sans ">3</h1>
                    <p className="whitespace-nowrap text-md text-gray-700">professionals sign up <br /> to join Linkedin <br /> every second  </p>
                    </div>
                </div> 



                <div className="w-[150px] h-[150px] right-5 rounded-full  mt-4  absolute  bg-[#eae1c7]  grid place-content-center">
                    <div className="flex absolute flex-row-reverse top-2 right-3 items-center gap-4">
                    <h1 className="text-[90px]  font-sans ">10</h1>
                    <p className="whitespace-nowrap text-md text-gray-700">LinkedIn is among  <br /> the world's top 10 <br /> fastest growing <br /> brand</p>
                    </div>
                </div> 

            </div>



            <div className="w-[50%] h-[170px]  grid place-content-center mt-24  ">
               <div className="">
                <h3 className="font-semibold text-[18px] text-gray-600">There are</h3>
                <h1 className="font-bold text-[45px] text-gray-600 mt-[-10px]">2.9 million</h1>
                <h3 className="font-semibold text-[20px]  text-gray-600 mt-[-12px]">groups on LinkedIn</h3>
                <p className="py-4 text-[16px] text-gray-600">including industry and  interest commuities  <br /> company and   university  alumni gruops and <br /> professional associations</p>
               </div>
            </div>
        </div>


<div className=" w-full h-full  mt-10 relative">

    <div className=" mx-auto h-[200px] w-[800px]  items-center ">

                <div className="flex items-center  w-fit h-fit gap-[40px] mx-auto ">
        <h1 className="font-semibold text-[75px] mt-10 ml-14 relative z-10  ">89%</h1>

        <div className="">
        <p className="text-md z-10  mt-7 relative text-gray-600">LinkedIn Live streams have <br /> jumped 89% since March 2020</p>
     <div className="w-[350px] z-10 relative mt-4 h-5 bg-orange-500"></div>
        </div>
        </div>
    
    </div>

    <div className=" w-[250px] top-0 h-[135px] left-[220px] overflow-hidden bg-orange-200  rounded-t-full absolute"></div>
</div>

        
      </div>
    </>
  );
};

export default Linkedin;
