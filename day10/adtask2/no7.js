let arr=[1,0,2,3,0,4,5,0]
let output=[]
for(i=0;i<arr.length;i++){
    if(arr[i]==0){
        output.push(0,0)
    }
    else{
        output.push(arr[i])
    }
}
let result=[]
for(j=0;j<arr.length;j++){
    result.push(output[j])
}
console.log(result)