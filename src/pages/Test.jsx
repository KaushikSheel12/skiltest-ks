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
import Watchandgrow from "@/components/Watchandgrow/Watchandgrow";
import Universities from "@/components/universities/Universities";
import Amber from "@/components/abmerblog/Amber";
import Asprogress from "@/components/abmerblog/Asprogress";
import Newcountry from "@/components/newcountry/ Newcountry";
import Linkedin from "@/components/linkedin/Linkedin";
import Coursehero from "@/components/courseshome/Coursehero";
import Dreamjob from "@/components/courseshome/Dreamjob";
import Ourpromise from "@/components/careerhomepage/Ourpromise";
import Answerd from "@/components/dashboard/Answerd";
import Questions from "@/components/IslamicQA/Questions";
import Mhome from "@/components/youvisit/Mhome";
import Clgmain from "@/components/predictors/Clgmain";
import PreHome from "@/components/predictors/PreHome";
import BenefitBox from "@/components/pulser/BenefitBox";
import HomeCart from "@/components/predictors/HomeCart";
import PredictorCard from "@/components/predictors/PredictorCard";
import Navigation from "@/components/predictors/Navigation";
import { Recentreviews } from "@/components/Trustpilot/Recentreviews";
import Dreamhero from "@/components/dream11/Dreamhero";
import SpeakForUs from "@/components/Allexams/SpeakForUs";
import Rhero from "@/components/revolt/Rhero";
import Vcall from "@/components/revolt/Vcall";
import Remp from "@/components/revolt/Remp";
import MonoHero from "@/components/revolt/MonoHero";
import { Scholar } from "@/components/LeapScholar/Scholar";
import { NewPredictorBox } from "@/components/predictors/NewComp";

const Test = () => {
  const [isActive, setIsActive] = useState(false);

  const { instructionPage, setinstructionPage } = useContext(MyContext);

  return (
    <>
      <div className="h-full">
        {/* <Header /> */}

        {/* {isActive ? <QuizHome /> : <Instructions setIsActive={setIsActive} />}  */}
        {/* <Predictors/> */}
        {/* <Result /> */}
        {/* <Carousel/> */}
        {/* <Dailyquizhome /> */}
      </div>
      {/* <Allexams /> */}
      {/* <Herosection /> */}
      {/* <Videoplayer /> */}
      {/* <Watchandgrow /> */}
      {/* <Country /> */}
      {/* <TopHeroSection /> */}
      {/* <Pepars /> */}
      {/* <Universities /> */}
      {/* <Amber /> */}
      {/* <Asprogress /> */}
      {/* <Newcountry /> */}
      {/* <Linkedin /> */}
      {/* <Coursehero /> */}
      {/* <Dreamjob /> */}
      {/* <Ourpromise /> */}
      {/* <Answerd /> */}
      {/* <Questions /> */}
      {/* <Mhome /> */}
      {/* <Clgmain /> */}
      {/* <Pheader /> */}
      {/* <PreHome /> */}
      <Predictors />
      {/* <Recentreviews /> */}
      {/* <Admitkart /> */}
      {/* <Dreamhero /> */}
      {/* <Rhero /> */}
      {/* <Vcall /> */}
      {/* <Remp /> */}
     {/* <MonoHero /> */}
      {/* <Scholar/> */}
      {/* <NewPredictorBox/> */}
    </>
  );
};

export default Test;
