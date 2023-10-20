import React from "react";

export const ProfileLable = ({ label }) => {

  const handleSelect = () =>{
     
  }


  return (
    <>
      {label?.map((el, index) => (
        <p
          className="text-[13px] text-gray-500 rounded-lg cursor-pointer duration-300 ease-in-out  hover:bg-[#dbd9d9] px-2 py-2  mb-0 font-semibold"
          key={index}
        >
          {el}
        </p>
      ))}
    </>
  );
};
