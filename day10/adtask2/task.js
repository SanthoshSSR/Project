let a=[7,2,5,1,3,8,4,0]
let b=[]
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
    if(a[i]+a[j]==9){
        b.push(i,j)
    }
    }
}
console.log(b)