import React from "react";
import ClgNamebox from "./careerimg/ClgNamebox";
import Image from "next/image";

const ClgList = () => {
  return (
    <>
      <div className="max-w-[1240px]   mx-auto py-8 px-4 ">
        <div className="grid grid-rows-none relative md:grid-cols-2 py-4 gap-2 md:gap-4">
          <div className=" relative h-72 rounded-lg  ">
            <Image
              alt="img2"
              fill
              className="rounded-lg "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJEg9AzpDysOk-UPqL4JuYHbbfxa2CDpWCw&usqp=CAU"
            />
            <ClgNamebox pathname="Career Path" clgname="Skilzen Tecno.." />
          </div>

          <div className=" relative h-72 rounded-lg   ">
            <Image
              alt="img2"
              fill
              className="rounded-lg "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJEg9AzpDysOk-UPqL4JuYHbbfxa2CDpWCw&usqp=CAU"
            />
            <ClgNamebox pathname="Career Path" clgname="Skilzen Tecno.." />
          </div>

          <div className=" relative h-72 rounded-lg   ">
            <Image
              alt="img2"
              fill
              className="rounded-lg "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJEg9AzpDysOk-UPqL4JuYHbbfxa2CDpWCw&usqp=CAU"
            />
            <ClgNamebox pathname="Career Path" clgname="Skilzen Tecno.." />
          </div>

          <div className=" relative h-72 rounded-lg    ">
            <Image
              alt="img2"
              fill
              className="rounded-lg   "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJEg9AzpDysOk-UPqL4JuYHbbfxa2CDpWCw&usqp=CAU"
            />
            <ClgNamebox pathname="Career Path" clgname="Skilzen Tecno.." />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClgList;
