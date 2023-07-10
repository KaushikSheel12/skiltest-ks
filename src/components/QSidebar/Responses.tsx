import React from "react";
import { Dot } from "../Dot";
import { useZustand } from "@/zustand";
import { useEffect } from "react";
export const Responses = () => {
  const questionIds = useZustand((state) => state.questionIds);
  const data = useZustand((state) => state.questions);


const viewedQuestions=data.filter(item=>item.attempted===true)
const unseenQuestions=data.filter(item=>typeof item.attempted==="undefined")
 



  return (
    <div className="flex items-center space-x-6  px-3 py-1 ">
      <div className="flex space-x-2 items-center">
        <Dot color={"green"} />
        <span>{data.length}</span>
      </div>
      <div className="flex space-x-2 items-center">
        <Dot color={"black"} />
        <span>{viewedQuestions.length}</span>
      </div>
      <div className="flex space-x-2 items-center">
        <Dot color={"gray"} />
        <span>{unseenQuestions.length}</span>
      </div>
      <div className="flex space-x-2 items-center">
        <Dot color={"orange"} />
        <span>{questionIds.length}</span>
      </div>
    </div>
  );
};
