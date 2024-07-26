let num1=[1,1,2,1]
let num2=[1,1,2,1]
let output=[]
for(i=0;i<num1.length;i++){
        if(num1[i]==num2[i]){
            output.push(num1[i])
        }
}
console.log(output)