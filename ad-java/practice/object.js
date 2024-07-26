// //Higher order function
// function sum(add){
//     return add(5)
// }
// function addtwo(num){
//     return num+2
// }
// console.log(sum(addtwo));

// //closure function
// function outside(){
//     let a = 8
//     function inner(){
//         let b = a + 5
//         return b
//     }
//     return inner()
// }
// console.log(outside())

// // setTimeout
// function word(){
//     console.log('Executing at intervals of 2000 milliseconds');
// }
// let timer = setInterval(word, 2000)
// console.log(timer);
// setTimeout(function() {
//     clearInterval(timer)
// },5000)

// (function(){
//     console.log("This is an IIFE");
// })()

// let greet = function(){
//     console.log("Hi");
// }
// greet()