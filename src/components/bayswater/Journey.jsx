import Image from "next/image";
import React from "react";

const Journey = () => {
  return (
    <>
      <div className="w-screen h-screen px-4 py-4 bg-[#101048] ">
        <div className="flex gap-2   h-full">
          <div className="  w-[35%] h-full grid grid-cols-2">
            {[...new Array(6)].map((el, index) => (
              <div key={index}>
                <div className=" h-full w-full  relative">
                  <Image
                    src="https://images.doclify.net/bayswater-web/d/6b885034-a55a-4246-aa14-20e307986c3b.png?enlarge=0&format=webp&w=500"
                    alt="img"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="   w-[60%]  h-full">
            <div className="  w-[700px] mx-auto mt-[220px] h-fit ">
              <h1 className="font-semibold text-[70px] py-2 leading-[70px] text-white ">
                Collegementor's <br /> Journey
              </h1>
              <p className=" py-2 text-[17px] text-white">
                Collegementor started over 70 years ago as a group of
                bright-eyed adventurers, passionate about the value of travel
                and with a clear mission to educate and inspire the next
                generation through life-changing educational experiences. More
                than seven decades later, we’re known for our global network of
                leading educational centres, dedicated to inspiring and
                enriching young people’s lives, whatever their background.
              </p>
              <div className="w-fit h-fit py-3 px-4  mt-6 rounded-md bg-blue-700 cursor-pointer text-white">
                Learn more about our story
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
