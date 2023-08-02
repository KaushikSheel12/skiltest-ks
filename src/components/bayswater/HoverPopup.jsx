import { useState } from "react";
import { SiReactquery } from "react-icons/si";


const HoverBox = () => {
  const [isBigBoxOpen, setIsBigBoxOpen] = useState(true);
  const [hoveredSmallBox, setHoveredSmallBox] = useState(-1);
  const [hoveredBottomBox, setHoveredBottomBox] = useState(-1);
  const [hoveredTopBox, setHoveredTopBox] = useState(-2);

  const handleBigBoxHover = () => {
    setIsBigBoxOpen(true);
  };

  const handleBigBoxLeave = () => {
    setIsBigBoxOpen(false);
    setHoveredSmallBox(-1);
    setHoveredBottomBox(-1);
  };

  const handleSmallBoxHover = (index) => {
    setHoveredSmallBox(index);
    setHoveredBottomBox(-1);
  };

  const handleBottomBoxHover = (index) => {
    setHoveredBottomBox(index);
    setHoveredSmallBox(-1);
  };
  const handleTopBoxHover = (index) => {
    setHoveredTopBox(index)
    setHoveredSmallBox(-2)
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



        <div className="bg-[#c0c0e5] absolute top-20 px-5 w-[90%] left-20 h-fit p-4 items-center z-10">

          {/* <div className="flex justify-around">
            <div className={`topbox bg-[orange] rounded-md w-[390px] ${hoveredSmallBox === 0 ? "h-[100px]  " : "h-[100px]"}`} ></div>
            <div className={`topbox bg-[orange]  rounded-md w-[390px] ${hoveredSmallBox === 1 ? "h-[100px]" : "h-[100px]"}`} ></div>
            <div className={`topbox bg-[orange]  rounded-md w-[390px] ${hoveredSmallBox === 2 ? "h-[100px]" : "h-[100px]"}`} ></div>
          </div> */}



<div className="flex justify-around mt-3 ">
            {[1,2,3].map((index) => (
              <div
                key={index}
                className={`bottombox group  bg-[#84f384] p-4 rounded-md ${
                  hoveredTopBox === index ? "h-[200px]" : "h-[100px]"
                } w-[390px] transition-all ease-linear`}
                onMouseEnter={() => setHoveredTopBox(index)}
                onMouseLeave={() => setHoveredTopBox(-1)}
              >
                   <div className="flex gap-5 items-center justify-center">
                  <SiReactquery size={35} color="red" />
                  <h4 className="text-2xl font-semibold">Skilzen</h4>
                </div>
                <p className="hidden group-hover:block">We offer a truly unique experience at each of our 10 </p>

                </div>
              
            ))}
          </div>







          <div className=" mt-3  flex justify-around">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`middlebox bg-teal-300 group p-4 rounded-md h-48 w-[390px] ${
                  (hoveredSmallBox === index && hoveredBottomBox === -1) ? "h-[240px] mt-[-00px] border border-yellow-500" : "h-[100px]"
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

          <div className="flex justify-around mt-3 ">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`bottombox group  bg-[#84f384] p-4 rounded-md ${
                  hoveredBottomBox === index ? "h-[200px]" : "h-[100px]"
                } w-[390px] transition-all ease-linear`}
                onMouseEnter={() => handleBottomBoxHover(index)}
                onMouseLeave={() => handleBottomBoxHover(-1)}
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


