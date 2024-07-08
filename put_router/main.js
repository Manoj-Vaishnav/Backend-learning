const express = require('express')
const app = express()
const port = 3000
//use of static middleware
app.use(express.static("public"));
//use of router middleware
const blog=require('./routes/blog');
app.use('/blog',blog)
//handling post and other request
app.get('/', (req, res) => {
    console.log("get request")
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log("Post request");
    res.send('POST request to the homepage')
})
//chaining
app.get('/about', (req, res) => {
    res.send('I am about')
}).get('/json', (req, res) => {
    res.json({ a: 1, b: 2, c: 3 })
})
//serving html file
app.get('/index', (req, res) => {
    console.log("get html file")
    res.sendFile('templates/index.html', { root: __dirname })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})







// const option = {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: JSON.stringify({
//         answer: 42,
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }), // body data type must match "Content-Type" header
// }

// async function main() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", option);
//     const data = await response.json();
//     return data;
// }

// async function gettodo(id) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`+id);
//     const data = await response.json();
//     return data;
// }

// const main_fun = async () => {
//     const data = await main();
//     console.log(data);
//     console.log(await gettodo(100));
// }
// main_fun();


// function main() {
//     return new Promise((resolve, reject) => {
//         const response = fetch("https://jsonplaceholder.typicode.com/posts", option);
//         const data = response.json();
//         resolve(data);
//     })
// }
// main.then((data) => {
//     console.log(data);
// })



// const func = new Promise((resolve, reject) => {
//     let temp = true;
//     setTimeout(() => {
//         if (temp) {
//             resolve("woriking");
//         } else {
//             reject("something wrong");
//         }
//     }, 2000);
// })
// func.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })
