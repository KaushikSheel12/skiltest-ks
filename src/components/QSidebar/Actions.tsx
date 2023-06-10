import Link from "next/link";
import React, { useState } from "react";

export const Actions = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="  px-4 py-2 mt-[270px] border border-red-600  h-24 sticky top-0 bottom-0 left-0 right-0  overflow-hidden mx-auto">
 
 {/* popup */}
 {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="absolute bg-white p-4 rounded shadow">
              <h2 className="text-[27px] font-semibold mb-2 w-80 h-auto">
                Submit Your Test</h2>

              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead  className=" text-gray-700   ">
                    <tr className="bg-blue-200 text-[black] ">
                      <th scope="col" className="px-6 py-3  border">
                        Section
                      </th>
                      <th scope="col" className="px-6 py-3 border">
                        No of Question
                      </th>
                      <th scope="col" className="px-6 py-3  border">
                        Attempted
                      </th>
                      <th scope="col" className="px-6 py-3 border">
                        Unattempted
                      </th>

                      <th scope="col" className="px-6 py-3 border">
                        Marked
                      </th>
                      <th scope="col" className="px-6 py-3 ">
                        Unseen
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b font-semibold">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap b">
                        Quiz
                      </th>
                      <td className="px-6 py-4 text-[black] border">
                       17
                      </td>
                      <td className="px-6 py-4 text-[black] border">
                        0
                      </td>
                      <td className="px-6 py-4 text-[black] border">
                        1
                      </td>

                      <td className="px-6 py-4 text-[black] border">
                        0
                      </td>
                      <td className="px-6 py-4 text-[black] ">
                        1
                      </td>
                    </tr>


                  </tbody>
                </table>
              </div>


              <div className="flex items-center gap-4 mx-auto justify-center">
                <button
                  className=" border  py-2 px-4 rounded mt-4   hover:bg-black hover:text-white"
                  onClick={togglePopup}
                >
                  Cancel
                </button>

                <button className=" border  py-2 px-4 rounded mt-4 hover:bg-amber-300 bg-amber-400">Submit</button>
              </div>

            </div>
          </div>
        )}
 {/* popup end */}

      <div className="flex gap-5 h-10 w-full  flex-wrap  ">
        <button className="px-1  py-2 w-32 h-9  grid place-content-center hover:bg-black hover:text-white  border rounded border-black text-black bg-white">
          Instructions
        </button>
    


        <Link href="/QSections">
          <button className="px-2 py-2 w-32 h-9  grid place-content-center hover:bg-black hover:text-white border rounded border-black text-black bg-white">
            All Questions
          </button>
        </Link>
      </div>
      <button onClick={togglePopup} className="px-2    py-2 w-full h-9  grid  mt-2  border rounded  text-black hover:bg-amber-300 bg-amber-400">
        Submit
      </button>

    </div>
  );
};
