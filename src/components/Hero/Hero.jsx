import React from "react";

const Hero = () => {
  return (
    <>
      <section className="flex justify-between flex-col ">
        <div className="mx-2 py-2 text-center justify-center items-center flex flex-col">
          <h1 className="md:text-4xl text-2xl font-dancing font-bold mb-4 text-red-500 animate-fade-in-left">
            Welcome to Jujutsu Expense Scrolls
          </h1>
          <p className="md:text-xl text-sm  font-lb md:w-1/2 text-blue-500 animate-fade-in-right">
            Master your finances with the power of curses! Use the cursed
            techniques of budgeting and tracking expenses to achieve financial
            harmony.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
