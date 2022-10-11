import React from "react";
import "boxicons";
import { default as api } from "../store/apiSlice";

function TransactionHistory() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  const [deleteTransaction] = api.useDeleteTransactionMutation();

  let Transactions;

  const handleDelete = (e) => {
    if (!e.target.dataset.id) return 0;
    deleteTransaction({ _id: e.target.dataset.id });
  };

  if (isFetching) {
    Transactions = <div>Fetching</div>;
  } else if (isSuccess)
    Transactions = data.map((expenseType, i) => (
      <TransactionsData
        key={i}
        category={expenseType}
        handler={handleDelete}
      ></TransactionsData>
    ));
  else if (isError) {
    Transactions = <div>Error</div>;
  }

  return (
    <div className="flex flex-col py-6 gap-3 ">
      <h1 className="font-bold py-4 text-xl">Transaction History</h1>
      {Transactions}
    </div>
  );
}

function TransactionsData({ category, handler }) {
  if (!category) return null;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r "
      style={{ borderRight: `8px solid ${category.color ?? "red"}` }}
    >
      <button className="px-3" onClick={handler}>
        <box-icon
          data-id={category._id ?? ""}
          name="trash"
          size="15px"
          color={category.color ?? "#e5e5e5"}
        ></box-icon>
      </button>
      <span className="block w-full">{category.name ?? ""} </span>
      <span className="block w-full">{category.amount ?? ""} </span>
    </div>
  );
}

export default TransactionHistory;
