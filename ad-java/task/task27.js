const arr = [1, 3, 7, 10, 2]
const firstEven = arr.find((num) => {
    return num % 2 == 0
})
console.log(firstEven);