import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiBowTieRibbon, GiOvermind } from "react-icons/gi";

const Videoplayer = () => {
  return (
    <>
      <div className="w-full h-full  ">
        <div className="h-full  mx-auto px-4 md:px-8 py-2 md:w-[80%] w-full border border-black">
          <div className="md:flex block mt-7 w-full h-40  justify-between">
            <div className="md:ml-[92px] ">
              <h1 className="font-medium  text-[25px] md:text-[47px] leading-8 md:leading-[55px]">
                Get the skills you <br />
                need for a job that <br />
                is in demand.
              </h1>
            </div>

            <div className=" md:w-[550px] w-full md:mr-24 md:mt-0 mt-4 h-full md:px-4">
              <p className="md:text-[22px] text-[17px] ">
                The modern labor market dictates its own terms. Today, to be a
                competitive specialist requires more than professional skills.
              </p>

              <div className="border md:h-[120px] h-24   items-center px-6  justify-between md:w-full hidden md:flex bg-[#71d971] mt-5">
                <div className=" border-0 border-r-2  border-r-black pr-[1.75rem]  h-[47px]  w-fit justify-between items-center gap-5 px-3  flex">
                  <h1 className="text-[52px]">10</h1>
                  <p className="leading-0">
                    YEARS <br />
                    EXPERIENCES
                  </p>
                </div>

                <div className="   h-[47px]  w-fit justify-between items-center gap-5 px-6  flex">
                  <h1 className="text-[52px]">250</h1>
                  <p className="leading-0">
                    TYPES OF <br />
                    COURSES
                  </p>
                </div>
              </div>
            </div>
          </div>


    <div className="md:flex    justify-between items-center">
          <div className="flex mt-14  items-center">
            <div className="w-[60px] h-[270px] md:h-[350px] items-center md:ml-20 md:mt-10 mt-4 flex flex-col justify-around">
              <GiOvermind size={50} className="border rounded-full p-[11px]" />
              <div className="h-14  border-dashed  border-[1px] border-black"></div>

              <GiBowTieRibbon
                size={50}
                className="border rounded-full p-[11px]"
              />

              <div className="h-14  border-dashed  border-[1px] border-black"></div>
              <AiOutlineThunderbolt
                size={50}
                className="border rounded-full p-[8px]"
              />
            </div>





            <div className="  w-fit  h-[270px] md:h-[350px]   flex flex-col justify-between px-2   ml-[35px] mt-6 md:mt-10">
                
              <div>
                <h3 className="font-semibold text-[16px]  md:text-lg ">Leadership</h3>
                <p className="text-[14px] md:text-lg  py-1">
                  Fully committed to the <br /> success company
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[16px]  md:text-lg ">Leadership</h3>
                <p className="text-[14px] md:text-lg  py-1">
                  Fully committed to the <br /> success company
                </p>
              </div>


              <div>
                <h3 className="font-semibold text-[16px]  md:text-lg ">Leadership</h3>
                <p className="text-[14px] md:text-lg  py-1">
                  Fully committed to the <br /> success company
                </p>
              </div>




            </div>
          </div>


    <div className="border border-red-400 md:w-[900px] w-full rounded-2xl mt-4 h-[200px]  mr-8 md:h-[430px]"></div>


          </div>

        </div>
      </div>
    </>
  );
};

export default Videoplayer;
