import React, { useContext } from "react";
import Header from "../components/Header";
import Instructions from "../components/Instructions";
import Quiz from "../components/Quiz";
import { useState } from "react";
import QInstruction from "@/components/QInstruction";
import QSections from "@/components/QSections";
import Result from "@/pages/Result";
import { MyContext } from "@/context/AppContext";
import Allexams from "@/components/Allexams/Allexams";
import Pepars from "@/components/Allexams/EXAM_WISE_PAPERS/Pepars";
import QuizHome from "@/components/QuizHome";
import CarouselBox from "@/components/Allexams/testcarousel/CarouselBox";
import { Carousel } from "@/components/Allexams/testcarousel/Carousel";
import Dailyquizhome from "./dailyquizhome";
import Pheader from "@/components/predictors/Pheader";
import Predictors from "@/components/predictors/Predictors";
import MyCarousel from "@/components/ MyCarousel";
import CareersHome from "@/components/careerhomepage/CareersHome";

const Test = () => {
  const [isActive, setIsActive] = useState(false);

  const { instructionPage, setinstructionPage } = useContext(MyContext);

  return (
    <>
      <div className="">
        {/* <Header /> */}

        {/* {isActive ? <QuizHome /> : <Instructions setIsActive={setIsActive} />} */}
{/* <Predictors/> */}
{/* <MyCarousel/> */}
<CareersHome/>
        {/* <Dailyquizhome/> */}
      </div>

      {/* <Allexams/> */}
      {/* 
<Header/>
<Pepars/>  */}

      {/* <Result/> */}
    </>
  );
};

export default Test;
