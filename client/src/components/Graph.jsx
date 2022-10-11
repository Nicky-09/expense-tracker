import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Labels from "./Labels";
import { getChartData, getTotal } from "../helper/helper";
import { default as api } from "../store/apiSlice";

Chart.register(ArcElement);

function Graph() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  let chartData;

  if (isFetching) {
    chartData = <div>Fetching</div>;
  } else if (isSuccess) {
    chartData = <Doughnut {...getChartData(data)}></Doughnut>;
    // getLabels(data, "type");
    // chartData = getLabels(data, "type").map((expenseType, i) => (
    //   <LabelComponent key={i} data={expenseType}></LabelComponent>
    // ));
  } else if (isError) {
    chartData = <div>Error</div>;
  }

  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item">
        <div className="chart relative">
          {chartData}
          <h3 className="mb-4 font-bold title">
            Total
            <span className="block text-3xl text-emerald-400">
              ₹ {getTotal(data)}
            </span>
          </h3>
        </div>

        <div className="flex flex-col py-10 gap-4">
          <Labels />
        </div>
      </div>
    </div>
  );
}

export default Graph;
