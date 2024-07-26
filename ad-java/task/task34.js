const numbers = [4, 6, 8, 9, 11, 15]

const findPrime = numbers.find((num) => {
    // return num % 2 != 0 && num % 3 != 0 && num % 5 != 0 ? num : num
    if(num % 2 != 0 && num % 3 != 0 && num % 5 != 0){
        return num
    }
})

console.log(findPrime);