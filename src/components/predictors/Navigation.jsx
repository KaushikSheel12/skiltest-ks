import React, { useState } from "react";
import Engineering from "./Navcomp/Engineering";
import Hospitality from "./Navcomp/Hospitality";
import ITcomp from "./Navcomp/ITcomp";
import Law from "./Navcomp/Law";
import Management from "./Navcomp/Management";
import Pharmacy from "./Navcomp/Pharmacy";
import Medicine from "./Navcomp/Medicine";
import Designcomp from "./Navcomp/Designcomp";

const Navigation = () => {
  const [activeTag, setActiveTag] = useState(null);
  const [activeComponent, setActiveComponent] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Engineering");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case "Engineering":
        return <Engineering />;
      case "Medicine":
        return <Medicine />;
      case "Management":
        return <Management />;
      case "Law":
        return <Law />;
      case "Pharmacy":
        return <Pharmacy />;
      case "Design":
        return <Designcomp />;
      case "IT":
        return <ITcomp />;
      case "Hospitality":
        return <Hospitality />;
      default:
        return null;
    }
  };

  const handleTagClick = (index) => {
    setActiveTag(index);

    switch (index) {
      case 0:
        setActiveComponent(<Engineering />);
        break;
      case 1:
        setActiveComponent(<Medicine />);
        break;
      case 2:
        setActiveComponent(<Management />);
        break;
      case 3:
        setActiveComponent(<Law />);
        break;
      case 4:
        setActiveComponent(<Pharmacy />);
        break;
      case 5:
        setActiveComponent(<Designcomp />);
        break;
      case 6:
        setActiveComponent(<ITcomp />);
        break;
      case 7:
        setActiveComponent(<Hospitality />);
        break;
      default:
        setActiveComponent(null);
    }
  };

  return (
    <>
      <div className="md:mt-20 border-gray-400 md:w-[70%] mx-auto w-full md:border-b-2">
        <h2 className="text-center text-[27px] hidden md:flex md:py-4">
          Select the stream for which you want to use College Predictor
        </h2>

        <div className="w-full md:hidden mt-2 px-2 py-1">
          <p className="text-md text-gray-500 px-2">
            Please Select Your Stream
          </p>
          <select
            className="w-full text-center text-md mt-4 px-2"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            {[
              "Engineering",
              "Medicine",
              "Management",
              "Law",
              "Pharmacy",
              "Design",
              "IT",
              "Hospitality",
            ].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="container mx-auto hidden  md:flex items-center justify-between md:p-1">
          <div className="md:w-3/5 md:mx-auto">
            <ul className="md:flex items-center justify-around px-2 md:space-x-4">
              {[
                "Engineering",
                "Medicine",
                "Management",
                "Law",
                "Pharmacy",
                "Design",
                "IT",
                "Hospitality",
              ].map((tag, index) => (
                <li key={index} className="cursor-pointer">
                  <p
                    className={` border px-2 rounded-md text-white bg-teal-400${
                      index === activeTag ? "text-white  bg-blue-900" : ""
                    }`}
                    onClick={() => handleTagClick(index)}
                  >
                    {tag}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="box h-full mt-2  md:hidden w-full mx-auto border ">
        {renderSelectedComponent()}
      </div>

      <div className="box h-full mt-2    md:block hidden w-full mx-auto border ">
        {activeComponent}
      </div>
    </>
  );
};

export default Navigation;
