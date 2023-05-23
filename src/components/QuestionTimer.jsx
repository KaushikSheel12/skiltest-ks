import React, { useState, useEffect } from 'react';
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from 'react-icons/ai';

const QuestionTimer = () => {
  const [time, setTime] = useState(30); // Initial time value of 30 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    if (time === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [ time]);

  return (
    <div className='md:flex hidden md:block'>
      <div className='py-0 px-2 mt-[2px]'>

      </div>
      <h1 className='font-semibold text-[15px] '>Time: 00:{time >= 0 ? time : 0}</h1>
    </div>
  );
};

export default  QuestionTimer;

