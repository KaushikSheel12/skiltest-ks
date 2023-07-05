import React, { useState, useEffect } from "react";
import questions from "../data/questions";
import QSidebar from "./QSidebar/index";
import Quiz from "./Quiz";
import QInstruction from "./QInstruction";
import QSections from "./QSections";
import { Actions } from "./QSidebar/Actions";
import { useZustand } from "@/zustand";




const QuizHome = () => {
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [activeComponent, setActiveComponent] = useState();
    //reset timer
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(true);




const showInstructions=useZustand(state=>state.showInstructions)

const showAllQuestions=useZustand(state=>state.showAllQuestions)
const showQuiz=useZustand(state=>state.showQuiz)
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
  

  return (
    <>
      <div className="w-screen  grid h-28 grid-cols-1 md:grid-cols-4 gap-x-3 py-6 px-4 mt-12 ">
        <div className="col-span-3    p-2 ">



{
  showInstructions &&
<QInstruction/>

}
{showQuiz && <Quiz question ={question } time={time}  currentPage={currentPage}
  handleAnswerSelect={handleAnswerSelect}
  selectedAnswers={selectedAnswers}
  handlePrevPage={handlePrevPage}
  onQuestionClick={handleQuestionClick}
  handleClearResponse={handleClearResponse}
  handleNextPage={handleNextPage}
/>}
{showAllQuestions &&  <QSections /> 
}
 



        </div>

        <div className="w-full  sticky top-10 hidden md:block h-fit">
          <QSidebar onQuestionClick={handleQuestionClick} />
        </div>
      </div>
    </>
  );
};

export default QuizHome
