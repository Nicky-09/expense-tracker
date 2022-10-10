import React from "react";
import { useForm } from "react-hook-form";
import TransactionHistory from "./TransactionHistory";

function AddExpense() {
  const { register, handleSubmit, resetField } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    resetField();
  };

  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Transaction</h1>

      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              {...register("transactionName")}
              placeholder="Salary"
              className="form-input"
            ></input>
          </div>
          <select className="form-input" {...register("transactionType")}>
            <option value="Investments">Investments</option>
            <option value="Savings">Savings</option>
            <option value="Expense">Expense</option>
          </select>
          <div className="input-group">
            <input
              type="text"
              {...register("transactionAmount")}
              placeholder="Amount"
              className="form-input"
            ></input>
          </div>
          <div className="submit-btn">
            <button
              type="submit"
              className="border py-2 text-white bg-indigo-500 w-full"
            >
              {" "}
              Make Transaction
            </button>
          </div>
        </div>
      </form>
      <TransactionHistory></TransactionHistory>
    </div>
  );
}

export default AddExpense;
