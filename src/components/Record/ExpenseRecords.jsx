import React from "react";
import { BsTrashFill } from "react-icons/bs";

const ExpenseRecords = ({ expenseRecords, onDelete }) => {
  const totalExpense = expenseRecords.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <>
      <div className="p-2 border-2 border-red-500 bg-red-300">
        <div className="flex justify-between md:flex-row flex-col items-center">
          <h2 className="font-bold my-2 font-lb  md:text-xl">
            Expense Records:
          </h2>
          <h2 className="font-lb">Total Expense: {totalExpense}</h2>
        </div>
        {/* LISTS */}
        <div className="md:max-h-40 max-h-24 overflow-y-auto no-scrollbar ">
          <ul>
            {expenseRecords.map((expense, index) => (
              <li
                key={index}
                className="flex items-center font-lb text-sm md:text-base bg-red-200 p-1 shadow-xl rounded-md mb-2"
              >
                <span>{expense.amount}</span>
                {expense.description && (
                  <span className="font-bold text-red-500 ml-1">
                    - {expense.description}
                  </span>
                )}
                {/* DELETE */}
                <div className="flex-grow" />
                <BsTrashFill
                  size={20}
                  color="red"
                  onClick={() => handleDelete(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ExpenseRecords;
