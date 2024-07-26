let a=[2,6,4,1,5]
let b=[]
// let c=1
for(let i=0;i<a.length;i++){
    let c=1
    for(let j=a[i];j>1;j--){
        c*=j
    }
    b.push(c)
}
console.log(b)