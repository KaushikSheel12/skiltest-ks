import React, { useState, useEffect } from "react";
import questions from "../data/questions";
import styles from "../styles/Quiz.module.css";
import Sidebar from "./Sidebar";

const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  useEffect(() => {
    // Retrieve the selected answers from session storage
    const storedAnswers = sessionStorage.getItem("selectedAnswers");
    if (storedAnswers) {
      setSelectedAnswers(JSON.parse(storedAnswers) || []);
    }
  }, []);

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
 

 <div className='w-full grid h-28  grid-cols-4 gap-x-3 py-2 px-4 mt-14'>


      <div className="border col-span-3">
        {questions.map((question) => (
          <div key={question.id} className="box">
            <p className="question">{question.question}</p>

            <div className="option-div">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswers.some(
                  (selectedAnswer) =>
                    selectedAnswer.questionId === question.id &&
                    selectedAnswer.optionIndex === index
                );

                return (
                  <div>
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
