// for(let i=7;i<=10;i++){
//     console.log(i)
// }

// let i=5;
// while(i<=10){
//     console.log(i)
//     i++;
// }

// let i=19
// do{
//     console.log(i)
//     i++
// }
// while(i<=10)
    
// for(let i=2;i<=20;i+=2){
//     console.log(i)
// }

// let a=[1,3,5,2,4,9,8]
// for(i=0;i<a.length;i++)
//     {
//         console.log(a[i])
//     }

let a=[1,2,4,3,5,8,10]
let even=[]
let odd=[]
for(let i=0;i<a.length;i++){
    if(a[i]%2==0){
        even.push(a[i])
    }
    else{
        odd.push(a[i])
    }
}
console.log(even)
console.log(odd)