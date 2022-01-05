const products2 = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts2 = [];

products2.find(product => {
  product.id === '🍔' && myProducts2.push(product);
})

console.log('myProducts2:', myProducts2);

const newArray = [...products2];
newArray.splice(newArray.findIndex(product => product.id === '🍔'), 1);

console.log('products2:', products2);
console.log('newArray:', newArray);
