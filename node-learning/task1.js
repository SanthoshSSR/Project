// const argvs=process.argv
// const argv=argvs.slice(2)
// const operation=argv[0]
// const operator1=parseInt(argv[1])
// const operator2=parseInt(argv[2])
// if(operation==="add"){
//     console.log(operation+" is "+(operator1+operator2))
// }
// if(operation==="sub"){
//     console.log(operation+" is "+(operator1-operator2))
// }
// if(operation==="mul"){
//     console.log(operation+" is "+(operator1*operator2))
// }
// if(operation==="div"){
//     console.log(operation+" is "+(operator1/operator2))
// }

const prompt= require("prompt-sync")();
console.log("Choose the type of operator")
console.log("1) Add")
console.log("2) Subtract")
console.log("3) Multiply")
console.log("4) Divide")
const operation = parseInt(prompt("Please enter the number: "))
const num = prompt("How many numbers required: ")
// const operator1=parseInt(prompt("Enter the number: "))
let result = (operation == 1 || operation == 2) ? 0 : 1
// let result=operator1

for(let i=1;i<=num;i++){
    if(operation == 1){
        const operator2 = parseInt(prompt("Enter the number: "))
        result+=operator2
    }
    else if(operation=="Subtract"){
        const operator2=parseInt(prompt("Enter the number: "))
        // operator2-=result
        result = operator2 - result
        console.log(`The Subtration operation is ${result}`)
    }
    else if(operation=="Multiply"){
        const operator2=parseInt(prompt("Enter the number: "))
        result*=operator2
        console.log(`The Multiplication operation is ${result}`)
    }
    else if(operation=="Divide"){
        const operator2=parseInt(prompt("Enter the number: "))
        result/=operator2
        console.log(`The Division operation is ${result}`)
    }
    else{
        console.log("")
    }
}
console.log(`The result is ${result}`)
