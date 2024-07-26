// let num=[1,2,3,4,5,6]
// for(let i=0;i<num.length;i++){
//     console.log(num[i])
// }

let arr=[
    {
    name:"Kumar",
    age:23,
    degree:"B.Tech",
    skills:["html","css","JS"],
    education:{
        tenthmark:420,
        twelthmark:1100,
        collegemark:"A grade",
    },
    place:"Nagercoil",
    },
    {
    name:"Ajay",
    age:28,
    degree:"BE",
    skills:["node","html","css"],
    education:{
        tenthmark:400,
        twelthmark:1043,
        collegemark:"B grade",
    },
    place:"Chunkankadai",
    },
    {
    name:"Rajesh",
    age:27,
    degree:"B.Tech",
    skills:["java","python"],
    education:{
        tenthmark:457,
        twelthmark:968,
        collegemark:"A grade",
    },
    place:"Nagercoil",
    },
    {
    name:"John",
    age:25,
    degree:"BE",
    skills:["sql","html","react"],
    education:{
        tenthmark:404,
        twelthmark:1000,
        collegemark:"C grade",
    },
    place:"Nagercoil",
    }
]
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].skills.length;j++){
        if(arr[i].skills[j]=="html"&&arr[i].place=="Nagercoil"){
            console.log(arr[i].name)
        }
        
    }
}

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].skills.length;j++)
//     if(arr[i].skills[j]=="html"){
//         console.log(arr[i].name)
//     }
// }
// for(let i=0;i<arr.length;i++){
//     if(arr[i].place=="Nagercoil"){
//         console.log(arr[i].name)
//     }
// }
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i].name)
//     console.log(arr[i].degree)
//     console.log(arr[i].age)
//     console.log(arr[i].education)
    // console.log(arr[i].skills)
// }
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].skills.length;j++){
//     console.log(arr[i].skills[j])
//     }
// }
// let obj={
//     name:"Edwin",
//     age:34,
//     degree:"BE"
// }
// console.log(obj.degree)