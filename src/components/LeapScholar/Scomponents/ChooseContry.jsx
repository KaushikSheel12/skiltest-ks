import React from "react";
import { ContFlag } from "./ContFlag";

export const ChooseContry = () => {
  const ImgSrcData = [
    {
      img: "https://leapscholar.com/assets/images/counsellor/canada-flag.svg",
      name: "Canada",
    },
    {
      img: "https://leapscholar.com/assets/images/counsellor/uk-flag.svg",
      name: "UK",
    },
    {
      img: "https://leapscholar.com/assets/images/counsellor/usa-flag.svg",
      name: "USA",
    },
    {
      img: "https://leapscholar.com/assets/images/counsellor/ireland-flag.svg",
      name: "Ireand",
    },
    {
      img: "https://leapscholar.com/assets/images/counsellor/australia-flag.svg",
      name: "Australia",
    },
  ];

  return (
    <>
      <div className="text-center">
        <h2 className="text-green-500  leading-9 font-semibold text-[24px]">
          We would love to know more about you to chart your study abroad path
        </h2>
        <p className="mt-7  text-gray-600 font-semibold text-[24px]">
          Choose your dream country
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 py-2">
          {ImgSrcData?.map((el, index) => {
            return <ContFlag key={index} ImgSrc={el.img} name={el.name} />;
          })}
        </div>
      </div>
    </>
  );
};
