const arr = [10, 20, 30, 40, 50]
const output = arr.reduce((previous, initial) => {
    return previous + initial
})
const avg = output / arr.length
console.log(avg);