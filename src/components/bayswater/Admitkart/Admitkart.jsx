import Image from "next/image";
import React from "react";

const Admitkart = () => {
  return (
    <>
      <div className="w-full h-full  md:px-2 md:py-10 ">
        <div className="md:w-[70%] w-full h-full mx-auto block  md:flex  md:px-2 py-10">
          <div className="md:w-[50%] w-full h-[480px] px-4 ">
            <h2 className=" md:text-[37px] text-[24px] text-[#390765e8] md:leading-[48px]  ">
              study abroad <br />
              with expert <br />
              guidance from <br />
              <span className="text-[#ae35a8]">
                international students
              </span>{" "}
            </h2>

            <div>
              <div className="flex md:w-fit w-full md:px-2 bg-[#f3e3fd] rounded-2xl md:h-24 h-20 items-center   mt-4  justify-center md:py-6 md:mt-10">
                <div className="border-r-2 border-white px-2 md:px-5 h-fit  ">
                  <h1 className="md:text-[27px] text-lg  text-[#390765e8] ">
                    4K
                  </h1>{" "}
                  <p className="md:text-[16px] text-sm text-[#390765e8]">
                    universities
                  </p>{" "}
                </div>

                <div className="border-r-2 border-white px-2 md:px-5 h-fit  ">
                  <h1 className="md:text-[27px] text-lg  text-[#390765e8]">
                    3K
                  </h1>{" "}
                  <p className="md:text-[16px] text-sm text-[#390765e8]">
                    mentors
                  </p>{" "}
                </div>

                <div className="border-r-2 border-white px-2  md:px-5 h-fit  ">
                  <h1 className="md:text-[27px] text-lg  text-[#390765e8] ">
                    40
                  </h1>{" "}
                  <p className="md:text-[16px] text-sm text-[#390765e8]">
                    countries
                  </p>{" "}
                </div>
                <div className=" md:px-5 h-fit px-2   ">
                  <h1 className="md:text-[27px] text-lg  text-[#390765e8] ">
                    90K+
                  </h1>{" "}
                  <p className="md:text-[16px] text-sm text-[#390765e8] whitespace-pre">
                    success stories
                  </p>{" "}
                </div>
              </div>
            </div>

            <div className="w-fit bg-[#4c236a] text-white px-6 py-3 md:mt-10  mt-4 rounded-full md:text-[17px] text-[14px]  cursor-pointer">
              Find my dream university{" "}
            </div>
          </div>

          <div className="  md:w-[500px] w-full md:ml-[110px]  grid place-content-center ">
            <div className="relative w-full h-full z-20">
              <div className="w-[120px] h-[120px] rounded-full  absolute top-[68px] -left-[104px]">
                <div className="">
                  <div className="w-full h-full rounded-full relative">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfUhb79s2S2_ehx5GoHiMldcdzuGEMDggYCvm2-wzxA2H4q1zYPUFqMLVUYOmHHRtDLkI&usqp=CAU"
                      alt="student"
                      fill
                      className="rounded-full object-cover"
                    />
                    <p className="w-[193px] left-7 p-1 bg-white  shadow-lg z-30 text-sm  px-4 -bottom-[363px] absolute rounded-lg whitespace-nowrap">
                      <strong className="whitespace-nowrap">Arnav</strong>{" "}
                      looking forward to <br /> join Oxfard University
                    </p>
                  </div>
                </div>
                
                <div className=" w-fit h-fit px-5 py-1 bg-white shadow-lg  text-black text-sm whitespace-nowrap rounded-lg mt-[-30px] absolute  ml-[-29px] ">
                  {" "}
                  <span className="font-semibold">Clark</span> is an alumni from{" "}
                  <br /> Oxford university
                </div>

              </div>
            </div>

            <div className="md:w-[600px] w-[300px] h-[300px] md:h-[600px] rounded-full flex items-center border-yellow-800  absolute  border py-2 px-2 rotate md:right-[223px] md:top-[24px]">
              <div className="bg-red-700 rounded-full h-5 w-5 absolute -top-0 right-0 translate-x-[-205px] " />
            </div>

            <div className=" md:px-8 md:py-8 border border-green-400 mx-auto rotate rounded-full w-[15em] md:w-[30em] md:h-[30em]">
              <div className="w-5 h-5 bg-red-600 rounded-full absolute translate-x-[-75px]   right-[0px]"></div>
            </div>

            <div className=" border  rounded-full absolute md:top-[120px] md:right-[300px]">
              <div className="relative md:w-[27em] md:h-[27em]  w-[250px] h-[250px]">
                <Image
                  src="https://img.freepik.com/free-photo/front-view-female-student-white-shirt-holding-pen-copybook-thinking-blue-wall_140725-38457.jpg"
                  className="rounded-full object-cover"
                  fill
                  alt="thingking-img"
                />
              </div>

              <div className="w-11 h-11 right-[321px] rounded-full   absolute top-[244px]">
                <div className="w-full h-full rounded-full relative">
                  <Image
                    src="https://m.media-amazon.com/images/I/718gVU8ktKL._AC_UF894,1000_QL80_.jpg"
                    fill
                    alt="indian-flag"
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admitkart;
