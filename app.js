

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