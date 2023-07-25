import Image from "next/image";
import React from "react";
import { AiOutlineCalculator } from "react-icons/ai";

const BenefitBox = () => {
  return (
    <>
      <div className=" w-[1010px] mx-auto mt-32  h-[500px]   flex flex-wrap   border-red-600">
        <div className="imgdiv  w-[50%]    h-full">
          <div className="border border-white mx-auto  w-[80%] relative  rounded-[40px] bg-[#edfbed]   h-full">
            <div className="w-[70%] px-2 py-2 relative  h-[372px]   mx-auto mt-[-70px] ">
              <Image
                alt="smlimg"
                src="https://assets.website-files.com/647650ba58f7bcb914cadd85/64768d42670aaf893bf972d3_Section-guy.png"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-[80%] px-2 py-0 mt-[-23px]  h-[70px] border items-center  justify-center  rounded-lg bg-[#58d358]  flex gap-2  mx-auto">
              <AiOutlineCalculator size={65} color="white" />
              <div>
                <h2 className="text-2xl font-semibold text-[#265726]">
                  Expert Team
                </h2>
                <p className="text-md font-semibold text-white">
                  {" "}
                  Start free while you learn
                </p>
              </div>
            </div>
            <div className="w-[80%] text-lg font-semibold hover:  cursor-pointer  text-[#265726]  h-12 mt-2 grid  place-content-center  text-center mx-auto rounded-full bg-[#58d358] ">
              {" "}
              Try Us
            </div>
          </div>
        </div>

        <div className="txtdiv  w-[50%] h-full">
          <div className="w-fit h-fit px-2  mt-28  uppercase   rounded-lg  border flex text-sm font-semibold bg-[#68dd68] text-[#1e451e] leading-6  ">
            Business
          </div>
          <p className="font-bold text-[35px]  py-2 mt-2  text-[#2f622f]  leading-9 ">
            skillzen was designed with the idea of being easy to use
          </p>

          <p className="font-bold text-lg   text-gray-500 py-2  leading- ">
            Easy as just on click to edit and be online in no time
          </p>
          <p className="font-bold text-[#1a491a] text-lg">Overview</p>
          <p className="font-bold text-lg   text-gray-500 py-1  leading- ">
            skillzen boasts a visually striking and modern design that is sure
            to leave a lasting impact on your visitors start today with Pulsar
            Template
          </p>
        </div>
      </div>
    </>
  );
};

export default BenefitBox;
