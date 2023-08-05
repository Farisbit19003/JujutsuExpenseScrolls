import React from "react";

const Button = ({ text, onClick, bgColor }) => {
  const buttonStyle = {
    backgroundColor: bgColor,
  };
  return (
    <button
      className="mb-2 text-[#f2f2f2]  transition-transform hover:scale-95 p-3 shadow-md rounded-md font-medium md:font-semibold font-lb text-lg md:text-xl"
      style={buttonStyle}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
