const fruits = ['apple', 'banana', 'cherry', 'date']
const greatervalue = fruits.reduce((previous, current) => {
    return previous.length < current.length ? current : previous
})
console.log(greatervalue);