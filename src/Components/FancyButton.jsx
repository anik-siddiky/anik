import React from "react";

const FancyButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`hover:scale-105 transition relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden text-white bg-[#0E4632] rounded-sm group cursor-pointer ${className}`}
    >
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#093324] rounded-full group-hover:w-56 group-hover:h-56"></span>
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
      <span className="relative">{children}</span>
    </button>
  );
};

export default FancyButton;
