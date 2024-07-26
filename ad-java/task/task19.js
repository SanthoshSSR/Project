const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((given,initial) => {
    return given + initial
},0)
console.log(sum);