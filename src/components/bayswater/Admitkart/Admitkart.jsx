import Image from "next/image";
import React from "react";

const Admitkart = () => {
  return (
    <>
      <div className="w-full h-full  px-2 py-10 ">
        <div className="w-[70%] h-full mx-auto  flex  px-2 py-10">
          <div className="w-[50%] h-[480px] px-4 ">
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


       
<div className="  w-[500px] ml-[110px]  grid place-content-center ">
    <div className="relative w-full h-full z-20">
    <div className="w-[120px] h-[120px] rounded-full  absolute top-[68px] -left-[104px]">
        <div className="">
        <div className="w-full h-full rounded-full relative">
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfUhb79s2S2_ehx5GoHiMldcdzuGEMDggYCvm2-wzxA2H4q1zYPUFqMLVUYOmHHRtDLkI&usqp=CAU" alt="student" fill className="rounded-full object-cover"/>
             <p className="w-[193px] left-7 p-1 bg-white  shadow-lg z-30 text-sm  px-4 -bottom-[363px] absolute rounded-lg whitespace-nowrap"><strong className="whitespace-nowrap">Arnav</strong> looking forward to <br /> join Oxfard University</p>
        </div>
               
                </div>
                <div className=" w-fit h-fit px-5 py-1 bg-white shadow-lg  text-black text-sm whitespace-nowrap rounded-lg mt-[-30px] absolute  ml-[-29px] "> <span className="font-semibold">Clark</span>  is an alumni from <br /> Oxford university</div>

            </div>
    </div>
<div className="w-[600px] h-[600px] rounded-full flex items-center border-yellow-800  absolute  border py-2 px-2 rotate right-[223px] top-[24px]">

<div className="bg-red-700 rounded-full h-5 w-5 absolute -top-0 right-0 translate-x-[-205px] "/>
</div>
            
            <div className=" px-8 py-8 border border-green-400 mx-auto rounded-full w-[27em] h-[27em]">
            <div className="w-full h-full border mx-auto rounded-full relative">
              <Image
                src="https://img.freepik.com/free-photo/front-view-female-student-white-shirt-holding-pen-copybook-thinking-blue-wall_140725-38457.jpg"
                className="rounded-full object-cover"
                fill
                alt="thingking-img"
              />

              <div className="w-11 h-11 right-[321px] rounded-full   absolute top-[244px]">
                <div className="w-full h-full rounded-full relative">
                    <Image src="https://m.media-amazon.com/images/I/718gVU8ktKL._AC_UF894,1000_QL80_.jpg" fill alt="indian-flag" className="rounded-full"/>
                </div>
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
