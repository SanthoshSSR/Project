let input=[3,2,2,3]
let result=[]
for(let i=0;i<input.length;i++){
    if(input[i]==3){
        result.push("_")
    }
    else{
        result.push(input[i])
    }
}
let num=[]
let sym=[]
for(let j=0;j<result.length;j++){
    if(result[j]>=0){
        num.push(result[j])
    }
    else{
        sym.push(result[j])
    }
}
let output=[]
output=num.concat(sym)
console.log(output)