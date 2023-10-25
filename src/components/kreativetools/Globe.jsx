import Image from "next/image";
import React from "react";

export const Globe = () => {
  return (
    <div className="w-full px-8 h-screen  ">
      <div className="w-full h-[350px] grid place-content-center text-cente mt-20">
        <h1 className="md:text-[96px] ">For every human</h1>
        <p className="md:text-[28px] text-center text-gray-400  ">
          Privacy-first. Owned by everyone
        </p>
        <div className="px-8 py-4 mt-20 rounded-full w-fit md:text-[20px] text-gray-400 text-center mx-auto border-gray-400  border-[1px] relative ">
          2,382,254 unique humans on Worldcoin
          <div className="absolute h-[45px] md:top-[63px]  md:right-[210px] w-[1px] border border-gray-400"></div>
        </div>
      </div>

      <div className="grid   grid-cols-3 place-content-center justify-center items-center w-full h-screen  ">
        <div className=" ">
          <div className="flex   mt-[-250px] items-center">
            <div className="w-[350px] h-[2px] border border-orange-600"></div>
            <div className="w-16 border -rotate-[-32deg] mt-[34px] -ml-[5px] border-orange-600"></div>
          </div>
          <p className=" text-[16px] py-1 text-left text-gray-500">
            Amount of WLD claimed by users* 35,502,561
          </p>
          <p className=" text-[16px] py-1 text-left text-gray-500">
            35,502,561 Wallet transactions by World App users
          </p>
          <p className=" text-[16px] py-1 text-left text-gray-500">
            116,553 Daily wallet transactions avg. last 7 days
          </p>
          <p className=" text-[16px] py-1 text-left text-gray-500">
            34 Countries where Orb verifications happened
          </p>
          <p className=" text-[16px] py-1 text-left text-gray-500">
            2,000 Orbs manufactured
          </p>
        </div>

        <div className="w-[500px] h-[500px] right-[40px]  relative ">
          <Image
            fill
            src="https://cdn-images-1.medium.com/max/1600/0*MLaCmA0eX58ht9K2.png"
            alt="globe-img"
            className="object-cover"
            loading="lazy"
          />
        </div>

        <div className=" ">
          <div className="flex   mt-[-250px] items-center">
            <div className="w-16 border -rotate-[32deg] mt-[34px] -mr-[5px] border-green-700"></div>
            <div className="w-[350px] h-[2px] border border-green-700"></div>
          </div>
          <p className=" text-[16px] py-1 text-right text-gray-500">
            Amount of WLD claimed by users* 35,502,561
          </p>
          <p className=" text-[16px] py-1 text-right text-gray-500">
            35,502,561 Wallet transactions by World App users
          </p>
          <p className=" text-[16px] py-1 text-right text-gray-500">
            116,553 Daily wallet transactions avg. last 7 days
          </p>
          <p className=" text-[16px] py-1 text-right text-gray-500">
            34 Countries where Orb verifications happened
          </p>
          <p className=" text-[16px] py-1 text-right text-gray-500">
            2,000 Orbs manufactured
          </p>
        </div>
      </div>
    </div>
  );
};
