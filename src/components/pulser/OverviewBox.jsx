import Image from "next/image";
import React from "react";

const OverviewBox = () => {
  return (
    <>
      <div className="  w-[1010px] mx-auto">
        <div className="container-top flex gap-4">
          <div className=" h-[330px] bg-[#e6fde6] flex-1 flex gap-6   rounded-[40px]">
            <div className="imgdiv   w-[35%] mt-7  h-[300px] relative">
              <Image
                fill
                className="object-contain"
                alt="girlimg"
                src="https://assets.website-files.com/647650ba58f7bcb914cadd85/64768d420209ae0560604b43_Grid-girl.png"
              />
            </div>
            <div className="txtdiv  w-[65%] h-full">
              <h1 className="font-bold text-[50px]  text-[#2f622f]  mt-20">
                97%
              </h1>
              <p className="font-bold text-[30px]  text-[#2f622f]  leading-9 ">
                Focus on what is more important to you and be more productive
              </p>
            </div>
          </div>

          <div className="border bg-[#e6fde6]  h-[330px] w-[360px]   rounded-[40px] ">
            <div className="w-fill h-36  relative">
              <Image
                src="https://assets.website-files.com/647650ba58f7bcb914cadd85/64768d42e9439559ed4cb298_iMac-grid.png"
                fill
                alt="ledimg"
              />
            </div>
            <p className="font-semibold px-4 text-[#2f622f]">BENEFITS</p>
            <p className="font-bold text-[28px] px-4 py-2  text-[#2f622f]  leading-9 ">
              With Skillzen you save time, money and stress
            </p>
            <div className="w-fit h-8 px-2 border cursor-pointer  text-[#235123] font-semibold  border-[#246824] rounded-full flex items-center ml-4 mt-4 hover:bg-[#176217] hover:text-white ">
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
