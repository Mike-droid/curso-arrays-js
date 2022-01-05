const letters = ['a', 'b', 'c'];

console.log('for: ');

for (let index = 0; index < letters.length; index++) {
  const letter = letters[index];
  console.log(letter);
}

console.log('forEach: ');

letters.forEach(letter => { console.log(letter); });