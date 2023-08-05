import React from "react";

const Header = () => {
  return (
    <>
      <header className="flex w-full justify-center flex-row p-4 shadow-xl bg-gradient-to-r from-red-500 to-blue-500">
        <h1 className="font-dancing text-white sm:text-5xl text-center text-2xl flex font-bold items-center justify-center">
          Jujutsu Expense Scrolls
        </h1>
      </header>
    </>
  );
};

export default Header;
