import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { Dot } from "./Dot";

export const Accordian = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div className="flex items-center w-full justify-between border-b-2 mt-3 ">
        <p className="mb-1">Testing</p>

        <div className="mr-3">
          {isActive ? (
            <IoIosArrowUp
              cursor="pointer"
              size={20}
              onClick={() => setIsActive((prev) => !isActive)}
            />
          ) : (
            <IoIosArrowDown
              cursor="pointer"
              size={20}
              onClick={() => setIsActive((prev) => !isActive)}
            />
          )}
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex space-x-2 items-center">
          <Dot color={"green"} />
          <span>0</span>
        </div>
        <div className="flex space-x-2 items-center">
          <Dot color={"black"} />
          <span>3</span>
        </div>
        <div className="flex space-x-2 items-center">
          <Dot color={"gray"} />
          <span>47</span>
        </div>
        <div className="flex space-x-2 items-center">
          <Dot color={"yellow"} />
          <span>0</span>
        </div>
      </div>
      {isActive && <div className="">{children}</div>}
    </div>
  );
};
