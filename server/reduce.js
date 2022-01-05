const totals = [1,2,3,4];

//* El primer parámetro es un acumulador
//* El segundo parámetro es el item que estamos iterando
//* El tercer parámetro es el estado inicial
let sum = 0;
const result = totals.reduce((sum, number) => sum + number, 0)
console.log(result)
