import React from "react";

const RoundedOutlineButton = ({ children, ...property }) => {
  return (
    <button
      className={`border border-zinc-500 outline-none text-gray-50 py-2 lg:py-3 px-5 lg:px-7 flex items-center gap-2 rounded-full text-xs lg:text-base hover:scale-[1.05] hover:bg-zinc-950 active:scale-105 transition group ${property.className}`}
    >
      View Project {children}
    </button>
  );
};

export default RoundedOutlineButton;
