//types of function

// const hobbies = ["Singing", "Gardening", "Reading", "Cycling"]
// for(const hobby of hobbies){
    // console.log(hobby)
// }

// hobbies.map((hobby) => {
//     console.log(hobby);
// })

// function add1(a,b){
//     // let a = 3
//     // let b = 5
//     sum = a+b
//     console.log(sum);
// }
// add1(3,6)

// const add2 = function(a,b){
//     sum = a+b;
//     console.log(sum);
// }
// add2(3,5)

// const add3 = (a,b) => {
//     sum = a+b;
//     console.log(sum);
// }
// add3(4,1)

// const hobbies1 = ["Sports", "Music"]
// const hobbies2 = hobbies1 // This method stores the address of the data
// hobbies2.push("Programming")
// const hobbies2 = [...hobbies1, "Programming"] // This method stores the values of the data
// console.log(hobbies1);
// console.log(hobbies2);
// const [hobby1, hobby2, hobby3] = hobbies2
// console.log(hobby1);
// console.log(hobby2);
// console.log(hobby3);

// const age = 21
// const person = {
//     name: "Raju",
//     age: 22,
//     dob: "23/12/20",
//     greet: function(){
//         console.log(this.age)
//         console.log(age);
    // }
// }
// person.greet()
// console.log(person.name);
// const person1 = {... person, mobNum: 97549}
// console.log(person1);
// const {name, age} = person
// console.log(name);
// console.log(age);

// const person2 = {
//     name: "Raju",
//     age: 22,
//     dob: "23/12/20",
//     greet: () => {console.log(this.name)}
// }
// person2.greet()
// console.log(person.name);

// const name = ["Ramesh", "Suresh"]
// const name2 = [...name, "Ramesh"]
// console.log(name2);
// const name3 = name.concat(name2)
// console.log(name3);

const numbers = [5, 10, 15, 20, 25, 30]
const result = numbers.flatMap((num) => {
    return num % 10 == 0 ? num : [] // If (?) true print num else (:) print empty value
})
// console.log(result);

const array = [6,5,3,7,8]
console.log(array.includes(3));
console.log(array.includes(2));