const numbers = [-5, -3, 0, 9, 2]

const firstPositive = numbers.find((num) => {
    return num > 0
})
console.log(firstPositive);