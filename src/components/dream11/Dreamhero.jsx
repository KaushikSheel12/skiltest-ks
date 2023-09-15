import React from "react";
import { DreamCarousel, TTCarousel } from "./Dreamcrow";
import Image from "next/image";
import CrouselImgBox from "./CrouselImgBox";

const Dreamhero = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full h-[500px] border border-red-700 px-2 py-2">
        <h2 className="text-center text-[20px] font-semibold">
          Official <span className="text-red-500">Partner </span>{" "}
        </h2>

        <div className=" mx-auto md:w-[40%] h-fit w-[340px] mt-4  px-4 py-2">
          <DreamCarousel settings={settings}>
            <CrouselImgBox ImgUrl="https://cdnflags.dream11.com/d11-static-pages/images/partner-icc-3.webp" />
            <CrouselImgBox ImgUrl="https://cdnflags.dream11.com/d11-static-pages/images/partner-supersmashkfc-4.webp" />
            <CrouselImgBox ImgUrl="https://cdnflags.dream11.com/d11-static-pages/images/partner-newzealandcricket-5.webp" />
            <CrouselImgBox ImgUrl="https://cdnflags.dream11.com/d11-static-pages/images/partner-wbbl-6.webp" />
            <CrouselImgBox ImgUrl="https://cdnflags.dream11.com/d11-static-pages/images/partner-herocplt20-7.webp" />
            <CrouselImgBox ImgUrl="https://cdnflags.dream11.com/d11-static-pages/images/partner-hundred-8.webp" />
          </DreamCarousel>
        </div>
      </div>
    </>
  );
};

export default Dreamhero;
