const num1 = [1, 2, 3]
const num2 = [3, 4, 5]

const num = [...num1, ...num2]
const set = new Set (num)
console.log(Array.from(set));