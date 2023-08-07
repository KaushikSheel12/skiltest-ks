import Image from "next/image";
import React from "react";

const Admitkart = () => {
  return (
    <>
      <div className="w-full h-full border px-2 py-10 border-red-600">
        <div className="w-[70%] h-full mx-auto border flex  px-2 py-10">
          <div className="w-[50%] h-[480px] px-4 border">
            <h2 className=" text-[37px] text-[#390765e8] leading-[48px]  ">
              study abroad <br />
              with expert <br />
              guidance from <br />
              <span className="text-[#ae35a8]">
                international students
              </span>{" "}
            </h2>

            <div className="w-fit bg-[#4c236a] text-white px-6 py-3 mt-10  rounded-full text-[17px]   cursor-pointer">
              Find my dream university{" "}
            </div>

            <div className="flex w-fit px-2 bg-[#f3e3fd] rounded-2xl h-24 items-center   justify-center py-6 mt-10">
              <div className="border-r-2 border-white px-5 h-fit  ">
                <h1 className="text-[27px]  text-[#390765e8] ">4K</h1>{" "}
                <p className="text-[16px] text-[#390765e8]">universities</p>{" "}
              </div>

              <div className="border-r-2 border-white px-5 h-fit  ">
                <h1 className="text-[27px]  text-[#390765e8] ">3K</h1>{" "}
                <p className="text-[16px] text-[#390765e8]">mentors</p>{" "}
              </div>

              <div className="border-r-2 border-white px-5 h-fit  ">
                <h1 className="text-[27px]  text-[#390765e8] ">40</h1>{" "}
                <p className="text-[16px] text-[#390765e8]">countries</p>{" "}
              </div>
              <div className=" px-5 h-fit  ">
                <h1 className="text-[27px]  text-[#390765e8] ">90K+</h1>{" "}
                <p className="text-[16px] text-[#390765e8]">success stories</p>{" "}
              </div>
            </div>
          </div>

          <div className="w-[35%] h-[600px] rounded-full flex items-center border-[#6216a5e8]  absolute right-[200px]  border py-2 px-2">
            <div className="w-[80%] h-[480px] px-8 py-8 border border-[#721cbee8] mx-auto rounded-full">
            <div className="w-full h-full border mx-auto rounded-full relative">
              <Image
                src="https://img.freepik.com/free-photo/front-view-female-student-white-shirt-holding-pen-copybook-thinking-blue-wall_140725-38457.jpg"
                className="rounded-full object-cover"
                fill
                alt="thingking-img"
              />

              <div className="w-11 h-11 right-[385px] rounded-full  absolute top-[240px]">
                <div className="w-full h-full rounded-full relative">
                    <Image src="https://m.media-amazon.com/images/I/718gVU8ktKL._AC_UF894,1000_QL80_.jpg" fill alt="indian-flag" className="rounded-full"/>
                </div>
              </div>
            </div>
            </div>


            <div className="w-[120px] h-[120px] rounded-full  absolute top-[130px] right-[540px]">
                <div className="w-full h-full rounded-full relative">
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfUhb79s2S2_ehx5GoHiMldcdzuGEMDggYCvm2-wzxA2H4q1zYPUFqMLVUYOmHHRtDLkI&usqp=CAU" alt="student" fill className="rounded-full object-cover"/>
                </div>
                <div className="border w-fit h-fit px-3 py-1 bg-white text-black text-sm whitespace-nowrap rounded-lg mt-[-30px] absolute   "> <span className="font-semibold">Clark</span>  is an alumni from <br /> Oxford university</div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admitkart;
