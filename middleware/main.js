const express = require('express')
const app = express()
const port = 3000
const fs=require("fs");

const myLogger = function (req, res, next) {
    console.log('LOGGED 1')
    req.name="Manoj";
    // res.send("Hello middleware one");
    next()
}
app.use(myLogger)
app.use((req, res, next)=> {
    console.log('LOGGED 2');
    req.name="Manoj Vaishnav";
    fs.appendFileSync("record.text",`${Date.now()} This is a ${req.method}\n`)
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/home/:slug', (req, res) => {
    res.send(`Hello Home ${req.params.slug}`)
})
app.get('/about', (req, res) => {
    res.send('Hello about '+ `${req.name}`)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})