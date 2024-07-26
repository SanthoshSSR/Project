let a=[4,3,7,9,1,8,2,6,0,4,5,3]
let sum=0
function program(){
for(let i=0;i<a.length;i++){
    if(a[i]!=0){
        sum+=a[i]
    }
    else{
        return sum
    }
}
}
console.log(program())