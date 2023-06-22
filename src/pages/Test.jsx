import React, { useContext } from 'react'
import Header from '../components/Header'
import Instructions from '../components/Instructions'
import Quiz from '../components/Quiz'
import { useState } from 'react'
import QInstruction from '@/components/QInstruction'
import QSections from '@/components/QSections'
import Result from '@/pages/Result'
import { MyContext } from '@/context/AppContext'
import Allexams from '@/components/Allexams/Allexams'
import Pepars from '@/components/Allexams/EXAM_WISE_PAPERS/Pepars'
import QuizHome from '@/components/QuizHome'
import CarouselBox from '@/components/Allexams/testcarousel/CarouselBox'
import { Carousel } from '@/components/Allexams/testcarousel/Carousel'




const Test = () => {
  const[isActive,setIsActive]=useState(false)

  const { instructionPage, setinstructionPage} = useContext(MyContext);

  return (
  <>
  <Header/>
  
  {isActive  ?
   <QuizHome/>:

  <Instructions setIsActive={setIsActive}/>
  }

{/* <Allexams/> */}
{/* 
<Pepars/> */}








{/* <Result/> */}

  </>
  )
}

export default Test