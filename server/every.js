const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const response = numbers.every(number => number <= 10);

console.log(response);

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const under15 = team.every(person => person.age < 15);

console.log(`Are all the people under 15 years old?: ${under15}`);