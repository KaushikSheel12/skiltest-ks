import React, { useState } from "react";
import InputBox from "./InputBox";
import { ColorChart } from "./ColorChart";

export const InputLine = () => {
  const [sliderValue, setAmountValue] = useState(0);
  const [intrestvalue, setIntrestValue] = useState(0);
  const [duration, setDuration] = useState(0);
  const [courseduration, setCourseduration] = useState(0);
  const [grasvalue, setGrasValue] = useState(0);

  const rangeValue = sliderValue +intrestvalue + duration + courseduration  + grasvalue;

  return (
    <>
      <div className="w-[90%] h-full px-2 py-2 flex  gap-5 mx-auto items-center justify-around">
        <div className="w-[500px] rounded-lg h-fit border px-5 py-14 shadow-lg">
          <InputBox
            heading="Loan Amount"
            sliderValue={sliderValue}
            mark="&#x20B9;"
           lastValue={100}
            setSliderValue={setAmountValue}
            handleSliderChange={(e) => setAmountValue(e.target.value)}
          />


          <InputBoxgrasvalue
            heading="Interest (p.a)"
            mark="&#x25;"
            sliderValue={intrestvalue}
           lastValue={17}
            setSliderValue={setIntrestValue}
            handleSliderChange={(e) => setIntrestValue(e.target.value)}
          />

          <InputBox
            heading="Loan Duration"
            mark="Years"
            sliderValue={duration}
            lastValue={15}
            setSliderValue={setIntrestValue}
            handleSliderChange={(e) => setDuration(e.target.value)}
          />

          <InputBox
            heading="Course Duration"
            mark="Months"
            sliderValue={courseduration}
            lastValue={48}
            setSliderValue={setIntrestValue}
            handleSliderChange={(e) => setCourseduration(e.target.value)}
          />

          <InputBox
            heading="Grace Period"
            mark="Months"
            sliderValue={grasvalue}
            lastValue={12}
            setSliderValue={setGrasValue}
            handleSliderChange={(e) => setGrasValue(e.target.value)}
          />

          <p className="text-[15px] leading-5  text-gray-700">
            The displayed EMI amount is approximate & is subject to change based
            on various factors.
          </p>
        </div>

        <div className="w-[370px] p-5  shadow-lg h-[420px]    rounded-lg ">
          <ColorChart rangeValue={rangeValue} />

          <div className="flex mt-3 justify-around  items-center gap-2 w-[80%] mx-auto  ">
            <div className="w-5 h-2 bg-[#3EB489]"></div>
            <p className="text-[10px] ">Interest &#x20B9;</p>

            <div className="w-5 h-2 bg-[#A0D6B4]"></div>
            <p className="text-[10px] ">Loan Amount &#x20B9;</p>
          </div>
        </div>
      </div>
    </>
  );
};
