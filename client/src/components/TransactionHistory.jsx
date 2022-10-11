import React from "react";
import "boxicons";

const expenseHistory = [
  {
    type: "Savings",
    color: "#f9d71c",
  },
  {
    type: "Investments",
    color: "blue",
  },
  {
    type: "Expenses",
    color: "#f9d71c",
  },
];

function TransactionHistory() {
  return (
    <div className="flex flex-col py-6 gap-3 ">
      <h1 className="font-bold py-4 text-xl">Transaction History</h1>
      {expenseHistory.map((expense) => (
        <Transactions category={expense}></Transactions>
      ))}
    </div>
  );
}

function Transactions({ category }) {
  if (!category) return null;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r "
      style={{ borderRight: `8px solid ${category.color ?? "red"}` }}
    >
      <button className="px-3">
        <box-icon
          name="trash"
          size="15px"
          color={category.color ?? "#e5e5e5"}
        ></box-icon>
      </button>
      <></>
      <span className="block w-full">{category.type ?? ""} </span>
    </div>
  );
}

export default TransactionHistory;
