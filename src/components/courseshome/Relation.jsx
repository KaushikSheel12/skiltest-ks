import React from "react";
import RelationBox from "./RelationBox";
import { ImgData } from "./data/data";

const Relation = () => {
  return (
    <>
      <div className="w-[70%] mx-auto mt-10 grid md:grid-cols-4 grid-cols-1  h-full  py-2">
        {ImgData.map((el, index) => {
          return (
            <div key={index}>
              <RelationBox imgUrl={el.url} text={el.title} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Relation;
