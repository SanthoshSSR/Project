const numbers = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]

const sum = numbers.reduce((given,initial) => {
    return given.concat(initial)
})

console.log(sum);