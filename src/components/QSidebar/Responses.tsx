import React from "react";
import { Dot } from "../Dot";
import { useZustand } from "@/zustand";
import { useEffect } from "react";
import { useState } from "react";
export const Responses = () => {
  const questionIds = useZustand((state) => state.questionIds);
  const data = useZustand((state) => state.questions);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

const viewedQuestions=data.filter(item=>item.attempted===true)
const unseenQuestions=data.filter(item=> item.attempted===false)
 


useEffect(() => {
  const storedAnswers = sessionStorage.getItem("selectedAnswers");

    console.log("total Answers", storedAnswers.length )

}, [data]);



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
