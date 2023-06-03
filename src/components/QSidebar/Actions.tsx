import Link from "next/link";
import React from "react";

export const Actions = () => {
  return (
    <div className="  px-4 py-2 mt-[260px]  h-24  fixed  overflow-hidden mx-auto">
      <div className="flex gap-5 h-10 w-full   ">
        <button className="px-1  py-2 w-32 h-9  grid place-content-center hover:bg-black hover:text-white  border rounded border-black text-black bg-white">
          Instructions
        </button>

        <Link href="/QSections">
          <button className="px-2 py-2 w-32 h-9  grid place-content-center hover:bg-black hover:text-white border rounded border-black text-black bg-white">
            All Questions
          </button>
        </Link>
      </div>
      <button className="px-2    py-2 w-full h-9  grid  mt-2  border rounded  text-black hover:bg-amber-300 bg-amber-400">
        Submit
      </button>
    </div>
  );
};
