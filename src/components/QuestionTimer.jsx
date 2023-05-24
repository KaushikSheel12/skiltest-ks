import React, { useState, useEffect } from "react";

const QuestionTimer = () => {
  const [time, setTime] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          return 0;
        } else {
          return prevTime + 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="md:flex hidden md:block">
      <div className="py-0 px-2 mt-[2px]"></div>
      <h1 className="font-semibold text-[15px]">
        Time: 00:{time >= 0 ? (time < 10 ? `0${time}` : time) : "00"}
      </h1>
    </div>
  );
};

export default QuestionTimer;
