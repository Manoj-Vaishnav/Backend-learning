const express = require('express')
const mongoose = require('mongoose')
const Employee = require('./models/employee')

const app = express()
const port = 3000

app.set('view engine', 'ejs');

mongoose.connect('mongodb://127.0.0.1:27017/company');
app.get('/', (req, res) => {
    res.render('index');
})
let randomnames = ["Manoj", "Nikhil", "Nitin", "Ashish", "Harshit"];
let randomsalary = [20000, 30000, 40000, 50000, 60000];
let randomlang = ["JavaScript", "Java", "Python", "C++", "C#"];
let randomcity = ["Rudrapur", "Haldwani", "Ramanagar", "Bareilly", "Sitarganj"];
app.get('/generate', async (req, res) => {
    await Employee.deleteMany({});
    for (let index = 0; index < 10; index++) {
        const employ = await new Employee({
            name: randomnames[Math.floor(Math.random() * (randomnames.length - 1))],
            salary: randomsalary[Math.floor(Math.random() * (randomsalary.length - 1))],
            language: randomlang[Math.floor(Math.random() * (randomlang.length - 1))],
            city: randomcity[Math.floor(Math.random() * (randomcity.length - 1))],
            isManager: (Math.random() > 0.5) ? true : false
        })
        await employ.save();
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})