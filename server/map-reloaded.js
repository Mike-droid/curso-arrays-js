const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

console.log(orders);

const onlyTotals = orders.map(order => order.total)

console.log(onlyTotals)

//* Nuevo array sin modificar el original
const taxes = orders.map(order => {
  return {
    ...order,
    tax: .19
  };
})

console.log(taxes)