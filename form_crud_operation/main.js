const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/student').then(()=>{
    console.log("connected");
}).catch((e)=>{console.log(e)});

const router=require('./routes/app');
app.use(router);

app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})