
console.log("First Line")
// getUser(1, getUsers);

const p = new Promise((resolve,rejected) => {
    setTimeout(()=>{

    // resolve(1)    
    rejected(new Error('Message'))

    },2000)
}) 

p
.then(result => console.log('Result', result))
.catch(err => console.log('Error',err.message))

console.log("Third Line")

function getUser(id,callback){
    setTimeout(() => {
        console.log("Getting Userws")
        callback({
            id:id,gitHubUsername:'mosh'
        });
       
},2000)}


function getUserRepo(callback){
    setTimeout(() => {
        console.log("Getting Repo")
        callback({
            repo:['Repo1','Repo2','Repo3']
        });
},2000)}


function getUserCommits(callback){
    setTimeout(() => {
        console.log("Getting Commits")
        callback({
            repo:['commit1','commit2','commit3']
        });
},2000)}

function getUsers(User){
    console.log(User)
    getUserRepo(displayRepos)
}

function displayRepos(Repo){
    console.log(Repo)
    getUserCommits(displayCommits)
}


function displayCommits(commit){
    console.log(commit)
}
