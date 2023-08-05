import React, { useState } from "react";

const ExpenseModal = ({ open, onClose, addExpense }) => {
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");

  const handleInputChange = (event) => {
    setExpenseAmount(Number(event.target.value));
  };

  const handleDescriptionChange = (event) => {
    setExpenseDescription(event.target.value);
  };

  const handleSubmit = () => {
    const expense = {
      amount: expenseAmount,
      description: expenseDescription,
    };
    addExpense(expense);
    onClose();
    setExpenseAmount("");
    setExpenseDescription("");
  };

  if (!open) return null;

  return (
    <>
      <div className="flex justify-center items-center inset-0 fixed backdrop-blur-sm bg-opacity-5">
        <div className="bg-red-500 p-4 rounded-md md:w-[30rem]  shadow-lg">
          <h1 className="font-dancing flex md:text-4xl text-xl justify-center">
            Expense Sheet
          </h1>
          <div className="flex gap-2 mb-2 flex-col">
            <h2 className="font-lb text-lg">Expense</h2>
            <input
              type="number"
              className="h-10 w-full p-3 font-lb rounded-md outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter Income"
              value={expenseAmount}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex gap-2 mb-2 flex-col">
            <h2 className="font-lb text-lg">Description</h2>
            <textarea
              className="h-10 w-full p-2 flex font-lb rounded-md outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter brief Description"
              value={expenseDescription}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="flex justify-between items-center ">
            <button
              className="flex p-3 font-lb md:text-lg text-sm rounded-md shadow-xl my-2  transition-transform hover:scale-95 bg-white text-red-500"
              onClick={handleSubmit}
            >
              Add Expense
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
    </>
  );
};

export default ExpenseModal;
