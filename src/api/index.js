const API = {
    get:(cb)=>fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {

         cb && cb({ contacts: data })
    })
    .catch(console.log)
}

export default API;