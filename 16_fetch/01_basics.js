fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(data => data.json())
.then(data =>{
    console.log(data);
})
.catch(error => {
    console.log(`error: ${error}`)
}
)