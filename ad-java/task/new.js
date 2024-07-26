// // const present = 2024
// // const leapyear = []
// // for (let i = 0; i < 20; i++){
// //     if((present % 4 == 0 && present % 100 != 0) || present % 400 == 0){
// //         leapyear.push(present)
// //         // console.log(leapyear);
        
// //     }
// //     present++
// //     // console.log(leapyear);
// // }
// // console.log(leapyear);

// // function findNext20LeapYears() {
//     // const currentYear = new Date().getFullYear();
//     let year = 2024;
//     // let count = 0;
//     const leapYears = [];

//     for (let count = 0; leapYears.length < 20; count++) {
//         if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//             leapYears.push(year);
//             // count++;
//         }
//         year++;
//     }

//     // return leapYears;
// // }

// // Example usage:
// // const next20LeapYears = findNext20LeapYears();
// console.log("Next 20 leap years:", leapYears);

// // 1)
// let present = 2024
// let leapyear = []
// for(let i = 0; leapyear.length < 20; i++){
//     if((present % 4 == 0 && present % 100 != 0) || present % 400 == 0){
//     leapyear.push(present)
//     }
//     present++
// }
// console.log(leapyear);

// 2)
const input = 32548
let count = 0
while (input > 0){
    input / 10 == 10
    count++
}
console.log(count);