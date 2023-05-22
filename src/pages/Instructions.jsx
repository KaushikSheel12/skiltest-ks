import React from 'react'
import Sidebar from './Sidebar'

const Instructions = () => {
  return (
    <div className='w-full  h-28 grid grid-cols-4 gap-x-3 py-2 px-4'>


      <div className='border col-span-4 md:col-span-3 '>
      <h2 className='py-2 px-4 font-semibold text-[17px]'>General Instructions</h2>
      <p className='py-1 px-4  font-semibold text-[15px]'>1: The clock will be set at the server. The countdown timer at the top right corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You need not terminate the examination or submit your paper.</p>

      <p className='py-1 px-4  font-semibold text-[15px]'>2: The Question Palette displayed on the right side of screen will show the status of each question using one of the following symbols:</p>

 
 <div className='flex gap-6 py- px-4 mt-2' >
 <div className='w-8 h-8 bg-gray-400  rounded'></div>
      <p className='text-[#4a4242]'>You have not visited the question yet.</p>
 </div>

 <div className='flex gap-6 py-1 px-4'>
 <div className='w-8 h-8 bg-black rounded'></div>
      <p className='text-[#4a4242]'>You have answered the question.</p>
 </div>


 <div className='flex gap-6 py-1 px-4'>
 <div className='w-8 h-8  bg-blue-600  rounded'></div>
      <p className='text-[#4a4242]'>You have not visited the question yet.</p>
 </div>


 <div className='flex gap-6 py-1 px-4'>
 <div className='w-8 h-8 bg-yellow-400  rounded'></div>
      <p className='text-[#4a4242]'>You have NOT answered the question, but have marked the question for review.</p>
 </div>


 <div className='flex gap-6 py-1 px-4'>
 <div className='w-8 h-8 bg-blue-400  rounded'></div>
      <p className='text-[#4a4242]'>You have answered the question also marked it for review.</p>
 </div>

 <p   className='py-1 px-4 font-semibold  text-[#565151] text-[15px]'>The <span className='bold text-[black]'> Mark For Review</span>  status for a question simply indicates that you would like to look at that question again. If a question is answered but marked for review, then the answer will be considered for evaluation unless the status is modified by the candidate.</p>

 <p className='py-2 px-4 font-semibold text-[16px]'>Navigating to a Question :</p>

 <p className='py-1 px-4  font-semibold text-[15px]'>3: To answer a question, do the following:</p>

 <p className='py-0 px-6 font-semibold  text-[#565151] text-[15px]'>A: Click on the question number in the Question Palette at the right of your screen to go to that numbered question directly. Note that using this option does NOT save your answer to the current question.</p>

 <p className='py-1 px-6 font-semibold  text-[#565151] text-[15px]'>B: Click on Next to save your answer for the current question and then go to the next question.</p>

 <p className='py-2 px-6 font-semibold  text-[#565151] text-[15px]'>Note : that your answer for the current question will not be saved if you navigate to another question directly by clicking on a question number without saving the answer to the previous question.</p> 

 <p className='py-1 px-6 font-semibold  text-[#565151] text-[15px]'>You can view all the questions by clicking on the Question Paper button.</p>

 <p className='py-2 px-4 font-semibold text-[16px]'>Answering a Question :</p>
 <p className='py-1 px-4  font-semibold text-[15px]'>4: Procedure for answering a multiple choice (MCQ) type question:</p>
 <p  className='py-1 px-6 font-semibold  text-[#565151] text-[15px]'>A: Choose one answer from the options given below the question, click on the option to select that option.</p>
 <p  className='py-1 px-6 font-semibold  text-[#565151] text-[15px]'>B: To deselect your chosen answer, click on the bubble of the chosen option again.</p>
 <p  className='py-1 px-6 font-semibold  text-[#565151] text-[15px]'>C: To change your chosen answer, click on the bubble of another option.</p>
 <p  className='py-1 px-6 font-semibold  text-[#565151] text-[15px]'>D: To save your answer, you MUST click on the Next.
</p>

<p className='py-1 px-4  font-semibold text-[15px]'>5: Procedure for answering a numerical answer type question :</p>

<p  className='py-1 px-6 font-semibold  text-[#565151] text-[15px]' >A: To enter a number as your answer, use the numerical keypad.</p>

<p className='py-1 px-6 font-semibold  text-[#565151] text-[15px]'>B: A fraction (e.g. -0.3 or -.3) can be entered as an answer with or without “0” before the decimal point. As many as four decimal points, e.g. 12.5435 or 0.003 or -932.6711 or 12.82 can be entered.</p>

<p className='py-1 px-6 font-semibold  text-[#565151] text-[15px]'>C: To save your answer, you MUST click on the Next.</p>

      </div>



      <div  className='w-full border h-28 hidden md:block '>
<Sidebar/>
</div>
      
    </div>
  )
}

export default Instructions
