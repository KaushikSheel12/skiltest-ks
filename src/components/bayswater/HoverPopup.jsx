import { useState } from "react";
import { SiReactquery } from "react-icons/si";

const HoverBox = () => {
  const [isBigBoxOpen, setIsBigBoxOpen] = useState(false);
  const [hoveredSmallBox, setHoveredSmallBox] = useState(-1);
  const [decreasedTopBox, setDecreasedTopBox] = useState(-1);

  const handleBigBoxHover = () => {
    setIsBigBoxOpen(true);
  };

  const handleBigBoxLeave = () => {
    setIsBigBoxOpen(false);
    setHoveredSmallBox(-1);
    setDecreasedTopBox(-1);
  };

  const handleSmallBoxHover = (index) => {
    setHoveredSmallBox(index);
    setDecreasedTopBox(index);
  };

  return (
    <div
      className="nav border w-full text-lg h-20 px-2 py-2 flex justify-around items-center relative"
      onMouseEnter={handleBigBoxHover}
      onMouseLeave={handleBigBoxLeave}
    >
      <h2>hoverme</h2>
      <h2>hoverme</h2>
      <h2>hoverme</h2>
      {isBigBoxOpen && (
        <div className="bg-[#c0c0e5] absolute top-20 px-5 w-[90%] left-20 h-[400px] items-center z-10">
          <div className="flex justify-around">
            <div className={`topbox  bg-yellow-200  rounded-md  w-[390px] ${decreasedTopBox === 0 ? "h-[100px]" : "h-[200px]"}`} />
            <div className={`topbox  bg-yellow-200  rounded-md   w-[390px] ${decreasedTopBox === 1 ? "h-[100px]" : "h-[200px]"}`} />
            <div className={`topbox bg-yellow-200   rounded-md  w-[390px] ${decreasedTopBox === 2 ? "h-[100px]" : "h-[200px]"}`} />
          </div>

          <div className=" flex justify-around">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`bg-teal-300 group p-4 rounded-md h-48 w-[390px] ${
                  hoveredSmallBox === index ? "h-[240px] mt-[-100px] border border-yellow-500  " : "h-[100px]"
                } transition-all ease-linear`}
                onMouseEnter={() => handleSmallBoxHover(index)}
                onMouseLeave={() => handleSmallBoxHover(-1)}
              >
                <div className="flex gap-5 items-center justify-center">
                  <SiReactquery size={35} color="red" />
                  <h4 className="text-2xl font-semibold">Skilzen</h4>
                </div>
                <p className="hidden group-hover:block">We offer a truly unique experience at each of our 10 </p>
              </div>
            ))}
          </div>




          <div className=" flex mt-4 justify-around">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`bg-teal-300 group p-4 rounded-md h-48 w-[390px] ${
                  hoveredSmallBox === index ? "h-[240px] mt-[-100px] border border-yellow-500  " : "h-[100px]"
                } transition-all ease-linear`}
                onMouseEnter={() => handleSmallBoxHover(index)}
                onMouseLeave={() => handleSmallBoxHover(-1)}
              >
                <div className="flex gap-5 items-center justify-center">
                  <SiReactquery size={35} color="red" />
                  <h4 className="text-2xl font-semibold">Skilzen</h4>
                </div>
                <p className="hidden group-hover:block">We offer a truly unique experience at each of our 10 </p>
              </div>
            ))}
          </div>
           
        </div>
      )}
    </div>
  );
};

export default HoverBox;
