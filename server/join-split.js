const elements = ['Fire', 'Water', 'Earth', 'Air'];

const joins = elements.join(' -- ');

console.log(joins);

const title = "Curso de manipulación de arrays"

//console.log(title.split(' ')) //* Devuelve un array con cada palabra separada por un espacio

const urlFinal = title.split(' ').join('-').toLowerCase()
console.log(urlFinal)