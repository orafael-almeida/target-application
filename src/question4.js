
const data = [
  {
    state: "São Paulo",
    invoices: 67836.43,
  },
  {
    state: "Rio de Janeiro",
    invoices: 36678.66,
  },
  {
    state: "Minas Gerais",
    invoices: 29229.88,
  },
  {
    state: "Espírito Santo",
    invoices: 27165.48,
  },
  {
    state: "Outros",
    invoices: 19849.53,
  },
];

function totalSalesinMonth(dataArray) {
  const totalMonthInvoices = dataArray.reduce(
    (acc, curr) => acc + curr.invoices,
    0
  );
  console.log("Total no mês: R$ ", totalMonthInvoices.toFixed(2));

  return totalMonthInvoices.toFixed(2);
}

const totalMonth = totalSalesinMonth(data);

function percentageByState(dataArray, totalMonth) {
  return data.map((item) => {
    const percentage = (item.invoices / totalMonth) * 100;
    return {
      Estado: item.state,
      "Porcentagem sobre o valor total": `${percentage.toFixed(2)}%`,
    };
  });
}

percentageByState(data, totalMonth);
const result = percentageByState(data, totalMonth);
console.table(result);
