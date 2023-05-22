import React, { useState, useEffect } from 'react';
const Counter = () => {
  const [time, setTime] = useState(30); // Initial time value of 30 seconds

  useEffect(() => {
    // Decrease the time by 1 every second
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    // Clear the interval when the component is unmounted or time reaches 0
    if (time === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <div className='md:flex hidden md:block'>
        <div className='py-0 px-2  mt-[2px]'></div>
      <h1 className='font-bold'>Time: 00:{time >= 0 ? time : 0}</h1>
      
    </div>
  );
};

export default Counter;
