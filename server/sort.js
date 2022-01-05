const months = ["March", "Jan", "Feb", "Dec"];
console.log(months.sort()); //* Orden ASCII

const numbers = [1, 30, 4, 21, 100000];
console.log(numbers.sort()); //* Orden ASCII
console.log(numbers.sort((a, b) => a - b)); //* Orden numerico
console.log(numbers.sort((a, b) => b - a)); //* Orden numerico inverso

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
console.log(words.sort()); //* Orden ASCII
console.log(words.sort((a,b) => a.localeCompare(b))); //* Para navegadores antigüos

const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
    date: new Date(2019, 0, 2),
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
    date: new Date(2019, 10, 1),
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
    date: new Date(2020, 4, 1),
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
    date: new Date(2021, 3, 6)
  },
];

console.log(orders.sort((a, b) => b.total - a.total));
console.log(orders.sort((a,b) => b.date - a.date));