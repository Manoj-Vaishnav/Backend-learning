import express from 'express'
import mongoose from 'mongoose'
import { Todo } from './models/todo.js'

await mongoose.connect('mongodb://127.0.0.1:27017/todo'); 
 
const app = express()
const port = 3000


app.get('/', (req, res) => {
    const todo = new Todo({ title: "medicine",desc:"Silky infection medicines",id:1,isDone:false });
    todo.save()
    res.send('Hello World!')
})
app.get('/f', async(req, res) => {
    const todo=await Todo.find({title:"medicine"})
    res.json(todo);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})