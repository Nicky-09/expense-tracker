import React from "react";
import { default as api } from "../store/apiSlice";
import { getLabels } from "../helper/helper";

function Labels() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();

  let Transactions;

  if (isFetching) {
    Transactions = <div>Fetching</div>;
  } else if (isSuccess) {
    // getLabels(data, "type");
    Transactions = getLabels(data, "type").map((expenseType, i) => (
      <LabelComponent key={i} data={expenseType}></LabelComponent>
    ));
  } else if (isError) {
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
          style={{ background: data.color ?? "pink" }}
        ></div>
        <h3>{data.type ?? ""}</h3>
      </div>
      <span className="font-bold">{JSON.stringify(data.total) ?? 0} </span>
      <span className="font-bold">{Math.round(data.percent) ?? 0} %</span>
    </div>
  );
}

export default Labels;
