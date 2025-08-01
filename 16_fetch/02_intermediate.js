fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    headers :{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        title:'khadeeja',
        address :'charsadda',
        id:41
    })
})
.then(data => data.json())
.then(data =>{
    console.log(`posted data: ${data}`)
})
.catch(error=>{
    console.log(error);
})