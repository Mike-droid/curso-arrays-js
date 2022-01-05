const first = ['a', 'b', 'c'];
const second = ['d', 'e', 'f'];

const newArray = first.concat(second);
const newArray2 = [...first, ...second];

console.log(newArray);
console.log(newArray2);