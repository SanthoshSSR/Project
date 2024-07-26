let arr=[5,2,-7,3,-2,-1]
let negative=[]
    for(i=0;i<arr.length;i++){
        if(arr[i]<0){
            negative.push(arr[i])
        }
    }
console.log(negative)