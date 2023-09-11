import React from "react";

const PreForm = () => {
  return (
    <>
      <div className="mt-20  w-full md:w-[490px] h-fit px-4 py-6 rounded-md shadow-2xl  mx-auto">
        <h4 className="text-center font-semibold text-sm md:text-md">
          Enter Center Seat Allocation Board (CSAB) Details
        </h4>

        <p className="text-[13px] text-gray-500 mt-5">
          Enter AP EAMCET Engineering Overall Rank
        </p>
        <input type="number" className="w-full h-8 border" />

        <p className="text-[13px] text-gray-500 mt-5">
          Local / Non-Local Status
        </p>
        <div className="custom-select">
          <select className="w-full h-8 border">
            <option value="adada">-- Select --</option>
            <option value="adada">AU - Andhra University Regions</option>
            <option value="adada">
              Unreserved - Non local for all regions
            </option>
            <option value="adada">OU - Osmania University Region</option>
            <option value="adada">SVU - Sri Venkateshwara University</option>
          </select>
        </div>

        <p className="text-[13px] text-gray-500 mt-5">
          Seat Type in Andhra Pradesh Counselling
        </p>
        <div className="custom-select">
          <select className="w-full h-8 border">
            <option value="adada">-- Select --</option>
            <option value="adada">Disability Quota Seats</option>
            <option value="adada">
              Economically Weaker Section Quata Seats
            </option>
            <option value="adada">Minority Religion Seats</option>
            <option value="adada">Open / BC / SC / ST </option>
            <option value="adada">Special Reservation Seats</option>
          </select>
        </div>

        <p className="text-[13px] text-gray-500 mt-5">Gender</p>
        <div className="custom-select">
          <select className="w-full h-8 border">
            <option value="adada">-- Select --</option>
            <option value="adada">Female</option>
            <option value="adada">Male</option>
          </select>
        </div>

        <div className="w-fit h-fit px-4 py-3 border  text-md text-white mt-5 mx-auto cursor-pointer rounded-md bg-orange-600 grid place-content-center">
          Predict My Colleges
        </div>
      </div>
    </>
  );
};

export default PreForm;
