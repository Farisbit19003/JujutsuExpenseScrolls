import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IncomeModal = ({ open, onClose, addIncome }) => {
  const [incomeAmount, setIncomeAmount] = useState("");
  const [incomeDescription, setIncomeDescription] = useState("");

  const handleAmountChange = (event) => {
    setIncomeAmount(Number(event.target.value));
  };

  const handleDescriptionChange = (event) => {
    setIncomeDescription(event.target.value);
  };

  const handleSubmit = () => {
    const income = {
      amount: incomeAmount,
      description: incomeDescription,
    };
    if (!incomeAmount || !incomeDescription) {
      toast.error("Please fill in all fields.");
      return;
    }
    addIncome(income);
    onClose();
    setIncomeAmount("");
    setIncomeDescription("");
  };

  if (!open) return null;

  return (
    <>
      <div className="flex justify-center items-center inset-0 fixed backdrop-blur-sm bg-opacity-5">
        <div className="bg-blue-400 p-4 rounded-md md:w-[30rem]  shadow-lg">
          <h1 className="font-dancing flex md:text-4xl text-xl justify-center">
            Income Sheet
          </h1>
          <div className="flex gap-2 mb-2 flex-col">
            <h2 className="font-lb text-lg">Income</h2>
            <input
              type="number"
              className="h-10 w-full p-3 font-lb rounded-md outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter Income"
              value={incomeAmount}
              onChange={handleAmountChange}
            />
          </div>
          <div className="flex gap-2 mb-2 flex-col">
            <h2 className="font-lb text-lg">Description</h2>
            <textarea
              className="h-10 w-full p-2 flex font-lb rounded-md outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter brief Description"
              value={incomeDescription}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="flex justify-between items-center ">
            <button
              className="flex p-3 font-lb md:text-lg text-sm rounded-md shadow-xl my-2  transition-transform hover:scale-95 bg-white text-blue-500"
              onClick={handleSubmit}
            >
              Add Income
            </button>
            <button
              className="flex p-3 shadow-inner font-lb md:text-lg text-sm border-2 border-white  rounded-md  my-2 hover:scale-95 hover:transition-shadow hover:inset-0 text-white"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default IncomeModal;
