const words = ['spray', 'limit', 'elite', 'exuberant']

const newWords = words.filter(word => word.length >= 6)

console.log(newWords)

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
  {
    customerName: "Nicolai",
    total: 360,
    delivered: false,
  },
];

const deliveredOrders = orders.filter(order => order.delivered && order.total >= 100)
console.log(deliveredOrders)

const search = (query) => {
  return orders.filter(order => {
    return order.customerName.includes(query)
  })
}

console.log(search('Nico'));
