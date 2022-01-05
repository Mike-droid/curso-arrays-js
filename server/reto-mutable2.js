const products3 = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const burger = products3.findIndex(product => product.id === '🍔');

const updateBurger = {
  id: "🍔",
  changes: {
    price: 240,
    description: 'tasty'
  }
}

const newArray3 = [...products3];

newArray3[burger] = {
  ...newArray3[burger],
  ...updateBurger.changes
};

console.log('products3:', products3);
console.log('newArray3:', newArray3);