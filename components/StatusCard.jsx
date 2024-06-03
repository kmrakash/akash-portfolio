import React from "react";

const StatusCard = ({ title, subTitle, ...property }) => {
  return (
    <div className="flex flex-col text-center w-fit">
      <h2 className="font-semibold text-3xl lg:text-6xl text-zinc-600">{title}</h2>
      <p className="text-xs lg:text-2xl mt-1 text-zinc-600">{subTitle}</p>
    </div>
  );
};

export default StatusCard;
