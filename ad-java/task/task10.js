const fruits = ['apple', 'banana', 'cherry']
const keyiterator = fruits.keys()
// console.log(keyiterator.next());
for (const index of keyiterator){
    console.log(index);
}

// const keyobject = Object.keys(fruits)
// console.log(keyobject);
// const keyarray = [...fruits.keys()]
// console.log(keyarray);