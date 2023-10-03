import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/Bs";
import { RiCloseLine } from "react-icons/Ri";

const Addcollege = () => {
  const [showAddclg, setShowAddclg] = useState(false);

  const handleClick = () => {
    setShowAddclg(!showAddclg);
  };

  return (
    <div className="w-[230px] h-[200px] border px-2 py-2  mx-auto relative bg-gray-100">
      {showAddclg && (
        <RiCloseLine
          onClick={handleClick}
          size={25}
          className="absolute right-2 border rounded-full p-1 border-gray-300 cursor-pointer "
        />
      )}

      <div className="w-full h-full grid place-content-center">
        {!showAddclg && (
          <div className=" cursor-pointer">
            <BsPlusCircle onClick={handleClick} size={55} className="mx-auto" />
            <span className="py-1 text-gray-400"> Add College</span>
          </div>
        )}

        {showAddclg && (
          <div className="ml-1 mt-3">
            <select className="w-[200px] border  h-8 mb-2 rounded-md">
              <option value="">abc</option>
              <option value="">abc</option>
              <option value="">abc</option>
              <option value="">abc</option>
            </select>
            <select className="w-[200px] border h-8 mb-2 rounded-md">
              <option value="">abc</option>
              <option value="">abc</option>
              <option value="">abc</option>
              <option value="">abc</option>
            </select>

            <select className="w-[200px] border h-8 mb-2  rounded-md">
              <option value="">abc</option>
              <option value="">abc</option>
              <option value="">abc</option>
              <option value="">abc</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default Addcollege;
