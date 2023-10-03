import React, { useState } from "react";
import MonoHero from "./MonoHero";
import Addcollege from "./Addcollege";

export const Xlanding = () => {
  return (
    <>
      <div className="w-[80%] py-4  mx-auto h-full border">
        <MonoHero />

        <div className="grid grid-cols-4 w-[80%]  mx-auto">
            <Addcollege/>
            <Addcollege/>
            <Addcollege/>
            <Addcollege/>
        </div>
      </div>
    </>
  );
};
