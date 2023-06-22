import questions from "@/data/questions";
import React from "react";

export const QuestionTabs = ({ onQuestionClick, isClicked }) => {
  return (

    <div>

   

    <div className="grid grid-cols-5 fixed   gap-5 py-2  overflow-y-auto  scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-white  h-[200px] px-5 ">
      {questions.map((el, index) => {
        return (
          <div key={index} className="py-0 relative  ">
            <button
              onClick={() => {
                onQuestionClick(el.id);
                isClicked(el.id);
              }}
              className={`bg-gray-500 px-0 py-0 w-11 h-7  grid place-content-center rounded text-[white] `}
              style={{
                backgroundColor: isClicked(el.id) ? "#468DFF" : "#6A7380",
              }}
            >
              {el.id}
            </button>
            <div className="w-2 h-2 bg-green-500 rounded-2xl absolute -top-1 right-0  box-content"></div>
          </div>
        );
      })}
    </div>

    </div>
  );
};
