import React from "react";

export const TickBox = ({ icon, text }) => {
  return (
    <div className=" mb-4 flex items-center gap-5">
      {icon}
      <p className="text-[18px]">{text}</p>
    </div>
  );
};
