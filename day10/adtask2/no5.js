let a=[1,2,3,4]
function True(){
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
        return true
        }
    }
}
}
if(True()==true){
    console.log(true)
}
else{
    console.log(false)
}