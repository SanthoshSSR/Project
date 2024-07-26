// Rest operator
function sum(...arr){
    return arr.reduce((first,initial) => {
        return first + initial
    },0)
}
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(5, 10, 15, 20));