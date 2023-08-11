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
import Pheader from "@/components/predictors/Pheader";
import Predictors from "@/components/predictors/Predictors";
import CareersHome from "@/components/careerhomepage/CareersHome";
import Carousel from "@/components/Crousel";
import Dailyquizhome from "./Dailyquizhome";
import TopHeroSection from "@/components/pulser/TopHeroSection";
import Herosection from "@/components/bayswater/Herosection";
import Admitkart from "@/components/bayswater/Admitkart/Admitkart";
import Country from "@/components/bayswater/Admitkart/Country";
import Videoplayer from "@/components/skillex/Videoplayer";


const Test = () => {
  const [isActive, setIsActive] = useState(false);

  const { instructionPage, setinstructionPage } = useContext(MyContext);

  return (
    <>
      <div className="h-full">
        {/* <Header /> */}

        {/* {isActive ? <QuizHome /> : <Instructions setIsActive={setIsActive} />} */}
        {/* <Predictors/> */}
      

        {/* <Carousel/> */}
        {/* <Dailyquizhome /> */}
      </div>
      {/* <Allexams/> */}

{/* <Header/> */}
{/* <Herosection/> */}
{/* <Admitkart/> */}
<Videoplayer/>
  {/* <Country/> */}
{/* < TopHeroSection/> */}
{/* <Pepars/>   */}

      {/* <Result/> */}
    </>
  );
};

export default Test;
