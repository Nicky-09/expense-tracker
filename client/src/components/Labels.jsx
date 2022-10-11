import React from "react";
import { default as api } from "../store/apiSlice";

function Labels() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();

  let Transactions;

  if (isFetching) Transactions = <div>Fetching</div>;
  else if (isSuccess)
    Transactions = data.map((expenseType) => (
      <LabelComponent data={expenseType}></LabelComponent>
    ));
  else if (isError) {
    Transactions = <div>Error</div>;
  }

  return <>{Transactions}</>;
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
