// import questions from "@/data/questions";
// import { useZustand } from "@/zustand";
// import React from "react";

// export const QuestionTabs = ({ onQuestionClick, isClicked }) => {
//   const questionIds = useZustand((state) => state.questionIds);

//   return (
//     <div>
//       <div className="grid grid-cols-5 fixed   gap-5 py-2  overflow-y-auto  scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-white  h-[200px] px-5 ">
//         {questions.map((el, index) => {
//           return (
//             <div key={index} className="py-0 relative  ">
//               <button
//                 onClick={() => {
//                   onQuestionClick(el.id);
//                   isClicked(el.id);
//                 }}
//                 className={`bg-gray-500 px-0 py-0 w-11 h-7  grid place-content-center rounded text-[white] `}
//                 style={{
//                   backgroundColor: isClicked(el.id) ? "#468DFF" : "#6A7380",
//                 }}
//               >
//                 {el.id}
//               </button>
//               <div className="w-2 h-2 bg-green-500 rounded-2xl absolute -top-1 right-0  box-content"></div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

import questions from "@/data/questions";
import { useZustand } from "@/zustand";
import React from "react";
import { useEffect } from "react";

// export const QuestionTabs = ({ onQuestionClick, isClicked }) => {
//   const questionIds = useZustand((state) => state.questionIds);

//   return (
//     <div>
//       <div className="grid grid-cols-5 fixed gap-5 py-2 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-white h-[200px] px-5 ">
//         {questions.map((el, index) => {
//           const isQuestionClicked = isClicked(el.id);
//           const isCurrentQuestion = questionIds.id === el.id;

//             useEffect(()=>{
//               console.log("Qid" ,questionIds )
//               questionIds.map((el)=>{
//                 console.log("el" , el)
//               })
//             },[questionIds])

//           return (
//             <div key={index} className="py-0 relative">
//               <button
//                 onClick={() => {
//                   onQuestionClick(el.id);
//                   isClicked(el.id);
//                 }}
//                 className={`bg-gray-500 px-0 py-0 w-11 h-7 grid place-content-center rounded text-[white] `}
//                 style={{
//                   backgroundColor: isQuestionClicked ? "#468DFF" : "#6A7380",
//                   color: isCurrentQuestion ? "yellow" : "white",
//                 }}
//               >
//                 {el.id}
//               </button>
//               <div className="w-2 h-2 bg-green-500 rounded-2xl absolute -top-1 right-0 box-content"></div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

export const QuestionTabs = ({ onQuestionClick, isClicked }) => {
  const questionIds = useZustand((state) => state.questionIds);
  // Assuming you have access to the questions array

  return (
    <div>
      <div className="grid grid-cols-5 fixed gap-5 py-2 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-white h-[200px] px-5">
        {questions.map((el, index) => {
          const isQuestionClicked = isClicked(el.id);
          const isCurrentQuestion = questionIds.includes(el.id); // Check if questionIds includes the current question id

          useEffect(() => {
            console.log("Qid", questionIds);
            questionIds.map((el) => {
              console.log("el", el);
            });
          }, [questionIds]);

          return (
            <div key={index} className="py-0 relative">
              <button
                onClick={() => {
                  onQuestionClick(el.id);
                  isClicked(el.id);
                }}
                className={`bg-gray-500  px-0 py-0 w-11 h-7 grid place-content-center rounded text-[white] `}
                style={{
                  backgroundColor: isQuestionClicked ? "#468DFF" : "#6A7380",
                }}
              >
                {el.id}
              </button>
              <div
                className={`w-2 h-2  bg-green-600     rounded-2xl absolute -top-[6px] right-0 box-content`}
                style={{
                  backgroundColor: isCurrentQuestion ? "orange" : "white",
                
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
