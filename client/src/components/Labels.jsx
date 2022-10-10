import React from "react";

const expenseTypes = [
  {
    type: "Savings",
    color: "#f9d71c",
    percent: 45,
  },
  {
    type: "Investments",
    color: "#f9d71c",
    percent: 20,
  },
  {
    type: "Expenses",
    color: "#f9d71c",
    percent: 35,
  },
];

function Labels() {
  return (
    <>
      {expenseTypes.map((expenseType) => (
        <LabelComponent data={expenseType}></LabelComponent>
      ))}
    </>
  );
}

function LabelComponent({ data }) {
  return (
    <div className="lables flex justify-between">
      <div className="flex gap-2">
        <div
          className="w-2 h-2 rounded py-3"
          style={{ background: data.color }}
        ></div>
        <h3>{data.type}</h3>
      </div>
      <h3 className="font-bold">{data.percent}</h3>
    </div>
  );
}

export default Labels;
