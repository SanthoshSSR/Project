// async function a(){
//     return "Hi"
// }
// console.log(a());

const fetchAll = async() => {
    try {
        const response = await fetch()
        const data = await response.data
        console.log(data);
    }
    catch (a){
        console.log(a);
    }
}