const express=require('express');
const app=express();
const port=process.env.port || 3000;

const mongoose=require('mongoose');
const router=require('./routes/mens100')
app.use(router);
const { json } = require('body-parser');

app.use(express.json());

// app.use(express.static("public"));

mongoose.connect('mongodb://127.0.0.1:27017/athletes').then
(()=>{console.log("connected");}).catch((e)=>{console.log(e)})


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})