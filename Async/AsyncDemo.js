
console.log("First Line")
const user = getUser(1);
console.log("User" , user)
function getUser(id){
    setTimeout(() => {
        console.log("Second Line")
},2000)

console.log("Third Line")

}