

let cl = console.log;

function apicall(methodname, url){
    return new Promise((resovle,reject) => {
        let xhr = new XMLHttpRequest();
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.open(methodname,url,true);

        xhr.onload = () => {
            if(xhr.status === 200) {
                resovle(xhr.response)
            } else{
                reject('error')
            }
        }
        xhr.send()
    })
}

apicall('GET', 'https://jsonplaceholder.typicode.com/posts')
    .then(cl)
    .catch(cl)

    //git rebase takes your entire feature branch and moves it to the tip of the main branch. It creates brand new commits for each commit in the original feature branch.
   //Git rebase is a command used to incorporate changes from one branch into another by rewriting the commit history. Unlike a merge, a rebase does not create a new commit that combines the changes from both branches. Instead, it applies the changes from one branch onto another branch, creating a linear history

    //Git merge will take the two branches we are merging, find the common base commit and then play the commit sequence from the two branches on the base commit to merge the branches.
     // Git merge is a command used to combine changes from two or more branches into a single branch. When a merge is performed, Git creates a new commit that incorporates the changes from both branches. The resulting commit history looks like a tree, with multiple branches merging into a single trunk.