import React, { useState, useEffect } from "react";
import questions from "../data/questions";
import styles from "../styles/Quiz.module.css";
import Sidebar from "./Sidebar";
import {AiOutlineStar ,AiFillStar} from "react-icons/Ai";

import {MdTimer} from "react-icons/Md"
import Counter from "./Counter";
import QuestionTimer from "./QuestionTimer";
const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [star , showStar] = useState(true)

  useEffect(() => {
    // Retrieve the selected answers from session storage
    const storedAnswers = sessionStorage.getItem("selectedAnswers");
    if (storedAnswers) {
      setSelectedAnswers(JSON.parse(storedAnswers) || []);
    }
  }, []);

  const starClick=()=>{
    showStar(!star)
  }

  const handleAnswerSelect = (questionId, optionIndex) => {
    // Remove previously selected answer for the same question
    const updatedAnswers = selectedAnswers.filter(
      (selectedAnswer) => selectedAnswer.questionId !== questionId
    );

    const answer = { questionId, optionIndex };
    const newAnswers = [...updatedAnswers, answer];
    setSelectedAnswers(newAnswers);

    // Save the selected answers in session storage
    sessionStorage.setItem("selectedAnswers", JSON.stringify(newAnswers));
  };

  return (
    <>
 

 <div className='w-full grid h-28 grid-cols-1  md:grid-cols-4 gap-x-3 py-6 px-4 mt-12 '>
 

      <div className="border col-span-3 p-2">
      <div className="flex justify-between">

        <div className="flex items-center space-x-3">
        <h2 className="font-semibold text-[16px]">Question {questions.length}</h2>

        <div className="flex space-x-1 items-center">
<svg fill="#3acc78" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 19 19"><path id="Union_6" d="M0,9.5A9.5,9.5,0,1,1,9.5,19,9.5,9.5,0,0,1,0,9.5Zm1.4,0A8.1,8.1,0,1,0,9.5,1.4,8.109,8.109,0,0,0,1.4,9.5Zm6.764,3.316a.763.763,0,0,1-.539-.223L5.29,10.256A.763.763,0,0,1,6.37,9.178l1.8,1.8,4.418-4.419a.764.764,0,0,1,1.08,1.08L8.7,12.594a.761.761,0,0,1-.539.222Z"></path></svg>
<p className="text-[green] text-[14px]">+2</p>

<svg fill="#fd4a43" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 19 19"><path id="Union_5" d="M0,9.5A9.5,9.5,0,1,1,9.5,19,9.5,9.5,0,0,1,0,9.5Zm1.4,0A8.1,8.1,0,1,0,9.5,1.4,8.109,8.109,0,0,0,1.4,9.5Zm10.522,3.433L9.5,10.511,7.078,12.934a.735.735,0,0,1-1.04-1.039L8.459,9.471,6.037,7.048a.735.735,0,0,1,1.04-1.04L9.5,8.43l2.423-2.421a.735.735,0,1,1,1.04,1.039L10.54,9.47l2.423,2.424a.736.736,0,1,1-1.041,1.039Z"></path></svg>
<p className="text-[red] text-[14px]  ">-0.66</p>
</div>
        </div>
     



   




      <div className="flex gap-2"> 
      
      <div >
      <MdTimer 
         color='teal'
            size={24}
            cursor='pointer'
        
            /> 
      </div>
       
               
            <QuestionTimer/>
            
            {star ? (
          <AiOutlineStar
            onClick={starClick}
            color='black'
            size={24}
            cursor='pointer'
          />
        ) : (
          <AiFillStar
            onClick={ starClick}
            color='teal'
            size={24}
            cursor='pointer'
          />
        )}



               
                 </div>
       </div>

        {questions.map((question) => (
          <div key={question.id} className="mt-4 w-full">
            <p className="font-normal text-gray-700 mb-3">{question.question}</p>

            <div className="w-full">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswers.some(
                  (selectedAnswer) =>
                    selectedAnswer.questionId === question.id &&
                    selectedAnswer.optionIndex === index
                );

                return (
                  <div key={index}>
                    <div
                      id="btn-style"
                      key={index}
                      className={`${styles.option} ${
                        isSelected ? styles.highlighted : ""
                      }`}
                      onClick={() => handleAnswerSelect(question.id, index)}
                    >
                      <p>{option}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div  className='w-full border sticky top-10  hidden md:block h-fit'>
<Sidebar/>
</div>

 </div>

 
    </>
  );
};

export default Quiz;
