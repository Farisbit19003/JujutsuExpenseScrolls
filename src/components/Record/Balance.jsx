import React from "react";

const Balance = ({ balance }) => {
  return (
    <div className="flex justify-center items-center md:text-3xl text-lg">
      <h1 className="font-lb">
        Balance : <span className="font-dancing">{balance}</span>
      </h1>
    </div>
  );
};

export default Balance;
