import _ from "lodash";

export function getSum(transaction, type) {
  let sum = _(transaction)
    .groupBy("type")
    .map((objs, key) => {
      if (!type) return _.sumBy(objs, "amount");
      return {
        type: key,
        color: objs[0].color,
        total: _.sumBy(objs, "amount"),
      };
    })
    .value();
  return sum;
}

export function getLabels(transaction) {
  let amountSum = getSum(transaction, "type");
  let total = _.sum(getSum(transaction));

  let percent = _(amountSum)
    .map((v) => _.assign(v, { percent: (v.total / total) * 100 }))
    .value();

  return percent;
}

export function getChartData(transaction, custom) {
  let dataValue = getSum(transaction);
  let bg = _.map(transaction, (a) => a.color);
  bg = _.uniq(bg);
  const config = {
    data: {
      datasets: [
        {
          data: dataValue,
          backgroundColor: bg,
          hoverOffset: 4,
        },
      ],
    },
    options: {
      cutout: 85,
      borderRadius: 10,
      spacing: 10,
    },
  };
  return custom ?? config;
}

export function getTotal(transaction) {
  let total = _.sum(getSum(transaction));
  return total;
}
