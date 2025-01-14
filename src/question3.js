const data = require("./constants/data.json");

console.table(data);

(function lowerInvoice(dataArray) {
  const values = dataArray.filter((item) => item.valor > 0);
  const lowestInvoice = values.reduce((acc, curr) => {
    return acc.valor < curr.valor ? acc : curr;
  });
  console.log(
    `Menor faturamento: R$ ${lowestInvoice.valor.toFixed(2)} no dia ${
      lowestInvoice.dia
    }`
  );
})(data);

(function highestInvoice(dataArray) {
  const values = dataArray.filter((item) => item.valor > 0);

  const higherInvoice = values.reduce((acc, curr) =>
    acc.valor > curr.valor ? acc : curr
  );
  console.log(
    `Maior faturamento: R$ ${higherInvoice.valor.toFixed(2)} no dia ${
      higherInvoice.dia
    }`
  );
})(data);

function daysAboveAverage(dataArray) {
  const positiveInvoices = dataArray.filter((item) => item.valor > 0);

  const totalMonthInvoices = positiveInvoices.reduce(
    (acc, curr) => acc + curr.valor,
    0
  );

  console.log("Total no mês: R$ ", totalMonthInvoices.toFixed(2));

  const average = totalMonthInvoices / positiveInvoices.length;
  console.log("Média mensal: R$", average.toFixed(2));
  return average.toFixed(2);
}

const average = daysAboveAverage(data);

function DaysWithPositiveInvoices(dataArray, average) {
  const daysAboveAverage = dataArray.reduce((acc, curr) => {
    return curr.valor > average ? acc + 1 : acc;
  }, 0);
  return console.log("Dias com faturamento acima da média: ", daysAboveAverage);
}

DaysWithPositiveInvoices(data, average);
