const numbers = [1, 2, 3, 4, 5, 6]

const even = numbers.filter((num) => num % 2 == 0)

const square = even.map((num) => {
    return num ** 2
})

console.log(square);