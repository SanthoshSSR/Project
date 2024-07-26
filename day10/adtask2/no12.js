let num=[0,1,0,3,12]
let zero=[]
let result=[]
for(let i=0;i<num.length;i++){
    if(num[i]==0){
        zero.push(0)
    }
    else{
        result.push(num[i])
    }
}
let num1=result.concat(zero)
console.log(num1)