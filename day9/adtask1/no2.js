let input1=[5,10,15,20,22,23]
let output=[]
for(i=0;i<input1.length;i++){
    if(input1[i]%2==0){
        output.push(input1[i])
    }
    else{
        output.push(0)
    }
}
console.log(output)