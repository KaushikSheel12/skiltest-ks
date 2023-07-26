import Image from "next/image";
import React from "react";

const OverviewBox = () => {
  return (
    <>
      <div className="  md:w-[1110px] mx-auto mt-10 md:px-0 px-4  border border-red-700  ">

        <div className="container-top   border border-yellow-500   grid md:grid-cols-3 grid-cols-1  gap-4">

          <div className=" md:h-[330px] h-full   bg-[#e6fde6] md:flex flex  flex-col-reverse  md:flex-row-reverse      gap-6 md:col-span-2    flex-1 border border-red-600  rounded-[40px]">
            
            <div className="imgdiv  border border-red-900  md:mt-0 mt-[-5px]  md:w-[35%] w-full   md:h-full  h-[300px] relative">
              <Image
                fill
                className="object-contain md:py-2 py-0 md:mt-2 mt-0 "
                alt="girlimg"
                src="https://assets.website-files.com/647650ba58f7bcb914cadd85/64768d420209ae0560604b43_Grid-girl.png"
              />
            </div>

            <div className="txtdiv  border border-red-400 w-full md:px-2 px-3  md:w-[65%] md:h-full h-38">
              <h1 className="font-bold text-[50px]  text-[#2f622f]  mt-0  md:mt-20">
                97%
              </h1>
              <p className="font-bold md:text-[30px] text-[27px]  text-[#2f622f]  leading-9 ">
                Focus on what is more important to you and be more productive
              </p>
            </div>


          </div>



          <div className=" bg-[#e6fde6]  h-[330px] md:w-[360px] w-full  md:block mx-auto md:mt-0 mt-2  border border-green-600   rounded-[40px] ">
            <div className="w-fill h-36  relative">
              <Image
                src="https://assets.website-files.com/647650ba58f7bcb914cadd85/64768d42e9439559ed4cb298_iMac-grid.png"
                fill
                alt="ledimg"
              />
            </div>
            <p className="font-semibold text-sm  px-4 text-[#2f622f]">BENEFITS</p>
            <p className="font-bold md:text-[30px] text-[27px]  px-4 py-2  text-[#2f622f]  leading-9 ">
              With Skillzen you save time, money and stress
            </p>
            <div className="w-fit h-8 px-2 border text-sm cursor-pointer  text-[#235123] font-semibold  border-[#246824] rounded-full flex items-center ml-4 mt-4 hover:bg-[#176217] hover:text-white ">
              Read More
            </div>
          </div>




        </div>
























        <div className="container-bottom flex gap-4 mt-6">
          <div className="bg-[#e6fde6] h-[330px] w-[360px]  rounded-[40px] ">
            <div className=" px-2  h-20  mt-8 w-[90%] mx-auto relative ">
              <Image
                alt="smlimg"
                fill
                className="object-contain"
                src="https://assets.website-files.com/647650ba58f7bcb914cadd85/64768d42d3fd3c906c463dda_Grid-icons.png"
              />
            </div>
            <p className="font-semibold px-4 mt-5  text-[#2d532d]">FEATURE</p>
            <p className="font-bold text-[28px] px-4  text-[#2f622f] py-2  leading-9 ">
              Maximize the return over your investments with Skillzen Template
            </p>
          </div>

          <div className=" h-[330px] flex-1 bg-[#e6fde6]   rounded-[40px] ">
            <div className="flex gap-3 w-full h-full  justify-center items-center">
              <div className="txtdiv  px-4  w-[60%] h-full">
                <div className="w-fit h-8 px-4 border   text-[#235123] font-semibold  border-[#246824] rounded-full flex items-center ml-4 mt-[122px]   ">
                  Mobile
                </div>

                <p className="font-bold text-[28px] px-4  text-[#2f622f] py-2  leading-9 ">
                  Maximize the return over your investments with Skillzen
                  Template
                </p>
              </div>

              <div className="imgdiv  w-[38%] relative  h-[345px] mb-5">
                <Image
                  alt="smlimg"
                  fill
                  src="https://assets.website-files.com/647650ba58f7bcb914cadd85/64768d42296a1c9c25100ed5_iPhone.png"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewBox;
