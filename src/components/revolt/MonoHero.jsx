import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const MonoHero = () => {
  return (
    <>
      <div className="md:w-[80%] w-full mx-auto py-2 px-2 md:h-[700px] h-full border border-red-600  grid md:grid-cols-2 grid-cols-1 ">
        <div className="w-full h-full px-2 py-2  grid place-content-center">
          <div>
            <h1 className="md:text-[90px] text-[36px] font-semibold leading-[1.1]   md:px-8">
              Reliably access bank accounts
            </h1>
            <p className="md:text-[24px] text-[16px] text-gray-600 md:px-8 py-4 md:py-8 leading-[1.3]">
              Mono helps businesses to access high-quality financial data and
              direct bank payments.
            </p>

            <div className="flex items-center gap-3 md:px-8 text-sm md:text-md ">
              <div className="md:w-[220px] w-[200px]  px-3 md:px-6 py-3 border bg-blue-800 text-white rounded-md flex items-center gap-2 cursor-pointer group/item ">
                <p>Get started for free</p>

                <div className="group/edit group-hover/item:ml-1 duration-300 transition-margin">
                  <AiOutlineArrowRight />
                </div>
              </div>

              <div className="md:w-[160px]  w-[140px] px-2 md:px-4 py-3 border shadow-lg rounded-md flex items-center gap-2 cursor-pointer group/item ">
                <p>Contact Sale</p>

                <div className="group/edit group-hover/item:ml-1  duration-300 transition-margin">
                  <AiOutlineArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full px-2 py-2 border "></div>
      </div>
    </>
  );
};

export default MonoHero;
