function factorial(n){
let a=1
for(let i=1;i<=n;i++){
    a*=i
}
return a
}
let result=factorial(3)
console.log(result)