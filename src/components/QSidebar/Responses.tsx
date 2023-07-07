import React from "react";
import { Dot } from "../Dot";
import { useZustand } from "@/zustand";
import { useEffect } from "react";

export const Responses = () => {
  const questionIds = useZustand((state) => state.questionIds);

  useEffect(() => {
    // console.log( "check" ,  questionIds.length)
  }, [questionIds]);

  return (
    <div className="flex items-center space-x-6  px-3 py-1 ">
      <div className="flex space-x-2 items-center">
        <Dot color={"green"} />
        <span>3</span>
      </div>
      <div className="flex space-x-2 items-center">
        <Dot color={"black"} />
        <span>33</span>
      </div>
      <div className="flex space-x-2 items-center">
        <Dot color={"gray"} />
        <span>47</span>
      </div>
      <div className="flex space-x-2 items-center">
        <Dot color={"orange"} />
        <span>{questionIds.length}</span>
      </div>
    </div>
  );
};
