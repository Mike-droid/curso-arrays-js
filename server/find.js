const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.find(num => num === 5));

const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const response = products.find(product => product.id === '🍔');
console.log(response);

const responseIndex = products.findIndex(product => product.id === '🍔');
console.log(responseIndex);