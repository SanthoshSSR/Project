function calculateTotal(arr){
  const total = arr.reduce((previous,initial) => {
    return previous + initial.price
  },0)
  console.log(total);
}

const cart = [
  { item: 'apple', price: 1.5 },
  { item: 'banana', price: 2.0 },
  { item: 'orange', price: 1.25 }
];

const totalcart = calculateTotal(cart)