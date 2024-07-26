// const name = "Selvin"
// const age = 25
// console.log("My name is",name,
//     "and my age is",age);
// console.log(`My name is ${name}
//     and my age is ${age}`)

// const sum = (a,b) => {
//     return (a+b);
// }
// console.log(sum (5,6))

// let a = [1,2,3,4]
// let copy = [... a,8]
// console.log(copy);
// a.push(5)
// console.log(copy);

// const fruits = ['apple', 'banana']
// const veg = ['carrot', 'potato']
// const allProduct = [...fruits, ...veg]
// console.log(allProduct);

// const sum = (x, y, z) => {
//     return x+y+z
// }
// const args = [7,2,9]
// console.log(sum(...args));

// let numbers = [8,4,9]
// const doubled = numbers.map((num,i) => {
//     return i*2
// })
// console.log(doubled);

// const fruits = ["apple", "banana", "orange"]
// fruits.forEach((fav,i) => {
//     console.log(`${i+1}) ${fav}`);
// })

// let numbers = [1,2,3,4,5]
// const even = numbers.filter((num) => {
//     return num % 2 == 0
// })
// console.log(even);

// let numbers = [1,3,6,4,3,5,2]
// const even = numbers.find((value) => {
//     return value % 2 == 0
// })
// console.log(even);

// const num = [1,2,3,4,5]
// const sum = num.reduce((one,two) => {
//     return one * two
// },1)
// console.log(sum);

// const colour = ["Red", "Green", "Blue"]
// const keyiterator = colour.keys()
// console.log(keyiterator.next());
// console.log(keyiterator.next());
// console.log(keyiterator.next());
// const keyarray = [...colour.keys()]
// console.log(keyarray);

// const msg = "Hello World!"
// console.log(msg.includes("World"));
// console.log(msg.includes("hello"));
// console.log(msg.includes("World",6));

// const fruits = ["Apple", "Banana", "Mango"]
// const appleindex = fruits.indexOf("Apple")
// console.log(appleindex);
// const fruit = ["Apple", "Banana", "Apple"]
// const lastindex = fruit.lastIndexOf("Apple")
// console.log(lastindex);

// const arr = [1, 2, 3]
// const obj = {
//     a : 1,
//     b : 2
// }
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));

// const sentence = "The quick brown fox jumps over the lazy fox"
// const newsentence = sentence.replaceAll("fox", "dog")
// console.log(newsentence);

// let str = 'Hello, world! How are you?';
// console.log(str.split(" "));
// console.log(str.split('o'));
// console.log(str.split(''));
// console.log(str.split());
// // Using limit
// console.log(str.split('o', 2));

// const a = ["Wind", "Water", "Fire"];
// console.log(a.join());
// console.log(a.join(", "));
// console.log(a.join(" + "));
// console.log(a.join(""));

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
months.splice(4, 1, 'May');
console.log(months);