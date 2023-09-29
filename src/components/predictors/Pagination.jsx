import React, { useState } from "react";

export const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="flex items-center gap-3 ">
        <button
          className="w-fit h-fit px-3 py-[1px] rounded-md shadow-md text-white bg-blue-400"
          onClick={goToPrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          className="w-fit h-fit px-3 py-[1px] rounded-md shadow-md "
          onClick={() => goToPage(10)}
        >
         {currentPage}
        </button>
        <button
          className="w-fit h-fit px-3 py-[1px] rounded-md shadow-md text-white bg-blue-400"
          onClick={goToNextPage}
        >
          Next
        </button>
      </div>
    </>
  );
};
