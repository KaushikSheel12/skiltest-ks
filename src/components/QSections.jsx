import React from "react";
import QSidebar from "./QSidebar";
import questions from "../data/questions";
import { useZustand } from "@/zustand";

const QSections = () => {
  const setShowQuiz = useZustand((state) => state.setShowQuiz);
  const setShowInstructions = useZustand((state) => state.setShowInstructions);
  const setShowAllQuestions = useZustand((state) => state.setShowAllQuestions);
  return (
    <>
      <div className="w-full   py-2 px-2 ">
        <div className=" col-span-3 p-2   ">
          <div className=" top-20 flex gap-5  px-2 md:-mt-2 items-center fixed bg-white w-full h-auto">
            {" "}
            <h2 className="font-bold">Sections :</h2>{" "}
            <button className="py-2 px-3  rounded-full border-blue-600 text-blue-600">
              Quiz
            </button>{" "}
          </div>

          <div>

            <h2 className="mt-[25px] px-2 py-2 font-semibold text-[18px] ">
              
              Question Paper
            </h2>

            {questions.map((el) => {
              return (
                <div key={el.id} className=" mt-[-7px] py-2 px-2 mb-5">
                  <h2 className="font-semibold">{el.question}</h2>
                  <hr className="mt-5" />
                  <div className="grid grid-cols-5 gap-2">
                    {el.options.map((el) => {
                      return (
                        <div key={el}>
                          {" "}
                          <p>{el}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            <div className="border w-full  py-2 sticky bottom-0 bg-white h-fit">
              <button
                onClick={() => {
                  setShowQuiz(true);

                  setShowAllQuestions(false);
                }}
                className="px-2  mb-0 py-2 w-[110px] h-9  grid place-content-center mx-auto  content-center  border rounded  text-black border-black hover:bg-black hover:text-white bg-white"
              >
                Back to Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QSections;
