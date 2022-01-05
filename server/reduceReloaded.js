const items = [1, 3, 2, 3, 3, 1, 10];

const result = items.reduce((obj, item) => {
	!obj[item] ? obj[item] = 1 : obj[item] += 1;
	return obj;
}, {})

console.log(result);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "high",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "high",
  },
];

const respuesta = data
.map(item => item.level)
.reduce((obj, item) => {
	!obj[item] ? obj[item] = 1 : obj[item] += 1;
	return obj;
}, {});

console.log(respuesta)
