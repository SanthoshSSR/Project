var a="p"
function character(a){
    var ch=a.toUpperCase()
    if(ch=="A"||ch=="E"||ch=="I"||ch=="O"||ch=="U"){
        console.log("Given character is vowel")
    }
    else{
        console.log("Given character is consonant")
    }
    return a
}
character("u")