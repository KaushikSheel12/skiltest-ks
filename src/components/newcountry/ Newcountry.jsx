import Image from "next/image";
import React from "react";
import Countrycart from "./Countrycart";

const Newcountry = () => {
  let countmapImg =
    "https://img.freepik.com/free-vector/illustration-global-icon_53876-9267.jpg?w=2000";
  let dummyText =
    " Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.";

  return (
    <>
      <div className="md:w-[90%] w-full px-2 py-2 h-full  mt-20 flex gap-2  justify-between items-center mx-auto">
        <div className="border bg-green-600 w-[27%] h-screen  text-center grid place-content-center">
          <div className="text-center transform -rotate-90 ">
            <h1 className="text-[52px] text-white font-semibold">Highlights</h1>
          </div>
        </div>

        <div className="grid grid-cols-2  w-full h-full   px-2 py-2">
          <div className="  border-gray-600 border-r-2 text-center relative">
            <div className=" py-8">
              <Countrycart
                contryno={"28"}
                heading="Countries"
                imgSrc={countmapImg}
                text={dummyText}
              />
              <div className="w-[300px] h-[2px] absolute  right-12 mt-4 bg-gray-600"></div>
            </div>


            <div className="py-8">
              <Countrycart
                contryno={"11,530"}
                heading="Stores Worldwide"
                imgSrc="https://img.freepik.com/premium-photo/globe-surrounded-search-panel-cursor-3d-render_96743-808.jpg?w=360"
                text={dummyText}
              />
              <div className="w-[300px] h-[2px] absolute  right-12 mt-4 bg-gray-600"></div>
            </div>

            <div className="py-8">
              <Countrycart
                contryno={"48M"}
                heading="Total Revenue"
                imgSrc="https://www.pngmart.com/files/7/Income-Background-PNG.png"
                text={dummyText}
              />
              <div className="w-[300px] h-[2px] absolute  right-12 mt-4 bg-gray-600"></div>
            </div>
          </div>

          <div className="grid place-content-center">
            <div className=" ">

              <div className="py-8 relative">
                <Countrycart
                  contryno={"2.3M"}
                  heading="Assocites"
                  imgSrc="https://img.freepik.com/premium-vector/group-men-suits-with-white-background_793499-42.jpg"
                  text={dummyText}
                />
                <div className="w-[300px] h-[2px] absolute  left-8 mt-20 bg-gray-600"></div>
              </div>

              <div className="mt-40 relative">
                <Countrycart
                  contryno={"5M"}
                  heading="Monthly Website Visitors"
                  imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJyJaqOcyBBowW6syhINENv7rjrXQRGWwWUNAHQcwWo2W4oFmo6sYCMQbZ-AWt7AgQKaQ&usqp=CAU"
                  text={dummyText}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newcountry;
