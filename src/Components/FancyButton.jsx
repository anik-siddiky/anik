import React from "react";

const FancyButton = ({ children, onClick, className = "" }) => {
  return (
    <button onClick={onClick}
      className={`hover:scale-105 transition relative inline-flex items-center justify-center px-4 py-2 overflow-hidden text-white bg-[#A87914] rounded-sm group cursor-pointer ${className}`}>
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#705211] rounded-full group-hover:w-56 group-hover:h-56"></span>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default FancyButton;