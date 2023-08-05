import React, { useState, useEffect } from "react";
import Button from "../common/Button";
import IncomeModal from "../Modals/IncomeModal";
import ExpenseModal from "../Modals/ExpenseModal";
import IncomeRecords from "./IncomeRecords";
import ExpenseRecords from "./ExpenseRecords";
import Balance from "./Balance";

const Record = () => {
  const [incomeModalVisible, setIncomeModalVisible] = useState(false);
  const [expenseModalVisible, setExpenseModalVisible] = useState(false);
  const [balance, setBalance] = useState(0);
  const [incomeRecords, setIncomeRecords] = useState([]);
  const [expenseRecords, setExpenseRecords] = useState([]);

  const showIncomeModal = () => {
    setIncomeModalVisible(true);
  };

  const showExpenseModal = () => {
    setExpenseModalVisible(true);
  };

  const handleCloseIncomeModal = () => {
    setIncomeModalVisible(false);
  };

  const handleCloseExpenseModal = () => {
    setExpenseModalVisible(false);
  };

  const addIncome = (income) => {
    const { amount, description } = income;
    const updatedBalance = balance + amount;
    setBalance(updatedBalance);
    setIncomeRecords([...incomeRecords, { amount, description }]);
    // Store the income in local storage
    const storedIncomes = JSON.parse(localStorage.getItem("incomes")) || [];
    storedIncomes.push({ amount, description });
    localStorage.setItem("incomes", JSON.stringify(storedIncomes));
  };

  const addExpense = (expense) => {
    const { amount, description } = expense;
    const updatedBalance = balance - amount;
    setBalance(updatedBalance);
    setExpenseRecords([...expenseRecords, { amount, description }]);
    // Store the expense in local storage
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    storedExpenses.push({ amount, description });
    localStorage.setItem("expenses", JSON.stringify(storedExpenses));
  };

  const deleteIncome = (index) => {
    const updatedIncomes = [...incomeRecords];
    const deletedIncome = updatedIncomes.splice(index, 1)[0];
    setIncomeRecords(updatedIncomes);
    setBalance(balance - deletedIncome.amount);

    // Update local storage
    const storedIncomes = JSON.parse(localStorage.getItem("incomes")) || [];
    const updatedStoredIncomes = storedIncomes.filter((_, i) => i !== index);
    localStorage.setItem("incomes", JSON.stringify(updatedStoredIncomes));
  };

  const deleteExpense = (index) => {
    const updatedExpenses = [...expenseRecords];
    const deletedExpense = updatedExpenses.splice(index, 1)[0];
    setExpenseRecords(updatedExpenses);
    setBalance(balance + deletedExpense.amount);

    // Update local storage
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    const updatedStoredExpenses = storedExpenses.filter((_, i) => i !== index);
    localStorage.setItem("expenses", JSON.stringify(updatedStoredExpenses));
  };

  useEffect(() => {
    // Load income and expense data from local storage during component initialization
    const storedIncomes = JSON.parse(localStorage.getItem("incomes")) || [];
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];

    // Calculate the total balance and set it to state
    const totalIncome = storedIncomes.reduce(
      (total, income) => total + income.amount,
      0
    );
    const totalExpense = storedExpenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );
    setBalance(totalIncome - totalExpense);

    setIncomeRecords(storedIncomes);
    setExpenseRecords(storedExpenses);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col md:w-1/2 w-3/4 h-fit shadow-xl rounded-md p-3 bg-purple-300">
          <h1 className="flex justify-center my-2 items-center md:text-2xl text-lg font-dancing font-bold">
            BALANCE TRACKER
          </h1>
          {/* TOTAL BALANCE */}
          <Balance balance={balance} />
          {/* RECORDS */}
          <div className="p-2 gap-2 flex flex-col">
            <IncomeRecords
              incomeRecords={incomeRecords}
              onDelete={deleteIncome}
            />
            <ExpenseRecords
              expenseRecords={expenseRecords}
              onDelete={deleteExpense}
            />
          </div>
          {/* BUTTONS */}
          <div className="flex justify-around">
            <Button
              text={"Income"}
              bgColor={"#3b82f6"}
              onClick={showIncomeModal}
            />
            <Button
              text={"Expense"}
              bgColor={"#ef4444"}
              onClick={showExpenseModal}
            />
          </div>
        </div>
      </div>
      {/* INCOME MODAL */}
      <IncomeModal
        open={incomeModalVisible}
        onClose={handleCloseIncomeModal}
        addIncome={addIncome}
      />

      {/* EXPENSE MODAL */}
      <ExpenseModal
        open={expenseModalVisible}
        onClose={handleCloseExpenseModal}
        addExpense={addExpense}
      />
    </>
  );
};

export default Record;
