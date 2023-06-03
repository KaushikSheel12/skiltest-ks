import React from "react";
import styles from "../styles/Quiz.module.css";

export const QuestionBox = ({
  question,
  handleAnswerSelect,
  selectedAnswers,
}) => {
  return (
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
  );
};
