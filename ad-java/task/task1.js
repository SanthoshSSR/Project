const arr = [1, 2, 3, 4, 5]
let result = []
function num(){
    for (let i = 0; i<arr.length; i++){
        let mul = arr[i] * arr[i]
        result.push(mul)
    }
    console.log(result);
}
num()

const square = arr.map((x) => x * x)
console.log(square)
