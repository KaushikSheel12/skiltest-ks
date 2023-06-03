import Image from "next/image";
import React from "react";
import { MdOutlineTimer } from "react-icons/Md";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const QuizHeader = ({ currentPage, star, starClick, time }) => {
  return (
    <>
      <div className="flex items-center space-x-3">
        <h2 className="font-semibold text-[16px]">Question {currentPage}</h2>
        <div className="flex space-x-2 items-center">
          <Image
            src="/icons/correct.svg"
            width={15}
            height={15}
            alt="correct icon"
          />
          <p className="text-[green] text-[14px]">+2</p>
          <Image
            src="/icons/wrong.svg"
            width={15}
            height={15}
            alt="wrong icon"
          />
          <p className="text-[red] text-[14px]  ">-0.66</p>
        </div>
      </div>
      <div className="flex gap-2">
        <div>
          <MdOutlineTimer color="black" size={24} cursor="pointer" />
        </div>

        {/* <QuestionTimer /> */}

        {/* timer */}

        <div className="hidden md:block">
          <div className="py-0 px-0 mt-[2px]"></div>
          <h1 className="font-semibold text-[black] text-[15px]">
            Time: 00:{time < 10 ? `0${time}` : time}
          </h1>
        </div>

        {star ? (
          <AiOutlineStar
            onClick={() => starClick()}
            color="black"
            size={24}
            cursor="pointer"
          />
        ) : (
          <AiFillStar
            onClick={() => starClick()}
            color="teal"
            size={24}
            cursor="pointer"
          />
        )}
      </div>
    </>
  );
};
