import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";

const Remp = () => {
  const [childDivScale, setChildDivScale] = useState(1);
  const [mrginTop, setmarginTop] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const mtScroll = window.scrollY;

      const newMtScroll = 1 + mtScroll * 2;

      setmarginTop(Math.max(newMtScroll, 0, 1));

      const newScale = 1 - scrollY / 400;
      setChildDivScale(Math.max(newScale, 0.1));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(childDivScale);
  console.log("mt", mrginTop);
  return (
    <>
      <div className="w-screen h-screen bg-[#504836] pt-[120px] overflow-hidden">
        <div className="child flex item-center justify-between w-[90%] relative mx-auto">
          <div
            className="w-[400px] h-[310px] px-2 py-2 relative  rounded-[30px]"
            style={{
              transform: `scale(${childDivScale})`,
              opacity: childDivScale,
              marginTop: mrginTop,
              marginLeft: mrginTop,
            }}
          >
            <Image
              src="https://assets-global.website-files.com/5f8dd056c51c1d04c3eaa497/64adc5832ad32465eb858c59_Homepage_Hero_01_33.webp"
              alt=""
              fill
              className="object-cover rounded-[30px]"
              loading="lazy"
            />
          </div>

          <div className="md:w-[660px] absolute z-10  right-[465px] w-full mx-auto  text-white px-2   py-4 text-center h-fit ">
            <h1 className="font-semibold text-[25px] md:text-[60px]">
              Spending made smarter
            </h1>
            <p className="md:text-[20px] px-12 py-4 leading-7 text-[14px]">
              Easy-to-use cards, spend limits, approval flows, vendor payments,
              and more—plus an average savings of 3.5%.
            </p>
            <div className="md:w-[450px] w-full px-2 py-2 h-[62px] bg-white mx-auto mt-4 border rounded-md  items-center  flex  justify-between">
              <div>
                <input
                  type="text"
                  className="w-full text-gray-700 border-none text-center"
                  placeholder="What's your work email?"
                />
              </div>

              <div className="w-fit px-4 h-fit py-4 bg-yellow-300 text--white rounded-lg  text-black grid place-content-center cursor-pointer ">
                Get Started
              </div>
            </div>
          </div>

          <div
            className="w-[400px] h-[310px] px-2 py-2 relative  rounded-[30px]"
            style={{
              transform: `scale(${childDivScale})`,
              opacity: childDivScale,
              marginTop: mrginTop,
              marginRight: mrginTop,
            }}
          >
            <Image
              src="https://assets-global.website-files.com/5f8dd056c51c1d04c3eaa497/64adc5832ad32465eb858c59_Homepage_Hero_01_33.webp"
              alt=""
              fill
              className="object-cover rounded-[30px]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex mt-28 item-center justify-around w-[90%] mx-auto">
          <div
            className="w-[400px] h-[410px] px-2 py-2 relative  rounded-[30px]"
            style={{
              transform: `scale(${childDivScale})`,
              opacity: childDivScale,
              //  marginBottom: mrginTop,
              marginLeft: mrginTop * 2,
            }}
          >
            <Image
              src="https://assets-global.website-files.com/5f8dd056c51c1d04c3eaa497/64adc64449434c5dc98b0e8e_Homepage_Hero_02_25.webp"
              alt=""
              fill
              className="object-cover rounded-[30px]"
              loading="lazy"
            />
          </div>
          <div
            className="w-[400px] text-[75px]  h-fit px-2 py-2"
            style={{
              transform: `scale(${childDivScale})`,
              opacity: childDivScale,
            }}
          >
            <div className="text-[75px] w-fit h-fit px-2    bg-white text-gray-500 rounded-md mx-auto">
              {" "}
              $63.23
            </div>
            <div className="text-[75px] w-fit h-fit px-2  bg-yellow-300 text-gray-800 mt-2 rounded-3xl  mx-auto">
              {" "}
              $8,973
            </div>
          </div>
          <div
            className="w-[400px] h-[410px] px-2 py-2 relative   rounded-[30px]"
            style={{
              transform: `scale(${childDivScale})`,
              opacity: childDivScale,
              //   marginginTop: `-${mrginTop*34}`,
              marginRight: mrginTop * 2,
            }}
          >
            <Image
              src="https://assets-global.website-files.com/5f8dd056c51c1d04c3eaa497/64adc64449434c5dc98b0e8e_Homepage_Hero_02_25.webp"
              alt=""
              fill
              className="object-cover rounded-[30px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="h-[700px] mt-10 w-[10px] mx-auto"></div>
    </>
  );
};

export default Remp;
