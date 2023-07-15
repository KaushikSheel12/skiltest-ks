import { QRule } from "@/components/Dailyquizhome/QRule";
import Qcomment from "@/components/Dailyquizhome/Qcomment";
import {
  DailyQuizData,
  DailyQuizeComment,
  Socialdata,
  imgUrl,
} from "@/components/Dailyquizhome/Qdata";
import Social from "@/components/Dailyquizhome/Social";
import Image from "next/image";
import React, { useState } from "react";

const Dailyquizhome = () => {
  const [isActive, setIsActive] = useState(false);

  console.log(isActive);
  return (
    <>
      <div className="w-full md:h-[520px] mt-16  bg-gray-200 ">
        <div className="max-w-[1200px] mx-auto  h-full   grid grid-cols-3 md:py-4 md:px-4 gap-4">
          <div className=" col-span-2 bg-white rounded-md    md:h-[350px] ">
            <div className="md:w-full md:h-full relative ">
              <Image
                alt="abc"
                fill
                className="object-contain"
                src="https://seekify-public.s3.ap-south-1.amazonaws.com/seekify-file-image%252Fwebp-1676280337007-The%20Daily%20Quant%20Quiz.webp"
              />
            </div>

            <div className=" mt-4   justify-between ">
              <div>
                {DailyQuizeComment.map((el, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        el.Title === "Invite Friends" && setIsActive(true);
                      }}
                    >
                      <Qcomment imgSrc={el.imgUrl} title={el.Title} />
                    </div>
                  );
                })}
                {isActive && (
                  <div className="flex">
                    {Socialdata.map((el, index) => {
                      return (
                        <div key={index}>
                          <Social imgUrl={el.imgUrl} title={el.Title} />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <div>sbgsfgbsfbfbfb</div>
            </div>
          </div>

          <div className="">
            <h2 className="font-bold  md:px-1  md:text-[28px] text-gray-600 ">
              The Daily Quant Quiz
            </h2>
            <h4 className="font-bold  md:px-1  md:text-[16px] text-gray-600 ">
              This Quiz includes
            </h4>

            <div className="md:py-2 py-0">
              {DailyQuizData.map((el, index) => {
                return (
                  <div key={index}>
                    <QRule imgSrc={el.imgUrl} title={el.Title} />
                  </div>
                );
              })}
            </div>
            <div className=" md:py-1   md:px-2">
              <h2 className="font-bold md:py-1   md:text-[16px] text-gray-600">
                Skills You will Acquire
              </h2>

              <div className="flex flex-wrap  gap-3  md:px-2  md:py-[2px] bg-white rounded-full  md:w-fit ">
                <Image
                  width={13}
                  height={13}
                  className="object-contain"
                  alt="network-icon"
                  src="https://seekify-public.s3.ap-south-1.amazonaws.com/resources/1666249268559-Group%208332.png"
                />
                <p className="text-gray-600 text-[13px] font-semibold  ">
                  Quantitative Aptitude
                </p>
              </div>
            </div>

            <div className=" flex justify-center  mt-0 md:mt-4">
              <button className=" md:w-36 md:py-2 rounded-full text-white  font-semibold bg-purple-800 hover:bg-purple-500 hover:text-white">
                Take Quiz
              </button>
            </div>
          </div>
        </div>

        <div className=" max-w-[1200px] mx-auto  md:py-6 md:px-2 h-full ">
          <h2 className="font-bold  text-gray-500 md:text-[22px]">
            About This Quiz
          </h2>
          <p className=" md:py-4  text-gray-700 md:text-[12px]c">
            Brush up on your quantitative skills with the help of this daily
            quiz. Whether you're a beginner or an <br />
            experienced quant, there's something for everyone in this quiz.
          </p>

          <div className="md:py-4">
            <h2 className="font-bold  text-gray-500 md:text-[22px]">
              Your Rank
            </h2>

            <div className=" max-w-[800px] md:mt-4  md:h-40 rounded-md bg-slate-100 px-2 py-2  grid items-center justify-center ">
              <Image
                alt="r"
                width={60}
                className="md:ml-48"
                height={60}
                src="https://seekify-public.s3.ap-south-1.amazonaws.com/resources/brainee/with_crown.png"
              />
              <p className="  text-gray-500 md:text-[17px] top-4">
                Take this quiz and rise above the ranks on our leaderboard
              </p>
            </div>
          </div>

          <div className="md:py-4  ">
            <h2 className="font-bold  text-gray-500 md:text-[22px]">
              Rate this Quiz
            </h2>

            <div className=" max-w-[800px] md:mt-4  md:h-40 rounded-md bg-slate-100  px-2 py-4 grid items-center justify-center ">
              <Image
                alt="r"
                width={70}
                className="md:ml-10"
                height={60}
                src="https://seekify-public.s3.ap-south-1.amazonaws.com/resources/brainee/with_yarn.png"
              />
              <p className="  text-gray-500 md:text-[16px] top-4">
                Login to rate the Quiz
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dailyquizhome;
