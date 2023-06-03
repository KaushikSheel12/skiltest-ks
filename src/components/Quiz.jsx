import React, { useState, useEffect } from "react";
import questions from "../data/questions";
import styles from "../styles/Quiz.module.css";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { MdOutlineTimer } from "react-icons/Md";

import Image from "next/image";
import { QuizHeader } from "./QuizHeader";
import { QuestionBox } from "./QuestionBox";
import { QuestionActions } from "./QuestionActions";
import QSidebar from "./QSidebar/index";

const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [star, showStar] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  //reset timer
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);

  //reset timer
  useEffect(() => {
    let timer = null;

    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [running]);

  const handleRestart = () => {
    setTime(0);
    setRunning(true);
  };
  // reset timer end

  const handleQuestionClick = (questionId) => {
    // Find the index of the clicked question

    handleRestart();
    const questionIndex = questions.findIndex(
      (question) => question.id === questionId
    );

    // Set the current page to the index + 1 to render the selected question
    setCurrentPage(questionIndex + 1);
  };

  useEffect(() => {
    // Retrieve the selected answers from session storage
    const storedAnswers = sessionStorage.getItem("selectedAnswers");
    if (storedAnswers) {
      setSelectedAnswers(JSON.parse(storedAnswers) || []);
    }
  }, []);

  const starClick = (el) => {
    showStar(!star);
  };

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

  const handleNextPage = () => {
    handleRestart();

    if (currentPage < questions.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  //for clearing the selected answer to be unselected
  const handleClearResponse = () => {
    // Find the index of the selected answer for the current question
    const currentIndex = selectedAnswers.findIndex(
      (selectedAnswer) => selectedAnswer.questionId === question.id
    );

    // Remove the selected answer from the selectedAnswers array
    if (currentIndex !== -1) {
      const updatedAnswers = [...selectedAnswers];
      updatedAnswers.splice(currentIndex, 1);
      setSelectedAnswers(updatedAnswers);

      // Save the updated selected answers in session storage
      sessionStorage.setItem("selectedAnswers", JSON.stringify(updatedAnswers));
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Get the question to display on the current page
  const question = questions[currentPage - 1];

  // Calculate the total number of pages
  const totalPages = questions.length;

  return (
    <>
      <div className="w-full grid h-28 grid-cols-1 md:grid-cols-4 gap-x-3 py-6 px-4 mt-12 ">
        <div className=" col-span-3 p-2">
          <div className="flex justify-between">
            <QuizHeader
              currentPage={currentPage}
              star={star}
              time={time}
              starClick={starClick}
            />
          </div>

          {question && (
            <QuestionBox
              question={question}
              handleAnswerSelect={handleAnswerSelect}
              selectedAnswers={selectedAnswers}
            />
          )}

          <QuestionActions
            handleClearResponse={handleClearResponse}
            currentPage={currentPage}
            handlePrevPage={handlePrevPage}
            totalPages={totalPages}
            handleNextPage={handleNextPage}
          />
        </div>

        <div className="w-full  sticky top-10 hidden md:block h-fit">
          <QSidebar onQuestionClick={handleQuestionClick} />
        </div>
      </div>
    </>
  );
};

export default Quiz;
