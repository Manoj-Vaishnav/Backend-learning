const express = require('express')
const router = express.Router();

const Student = require("../models/student")

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.get('/', (req, res) => {
    res.render('home');
})

router.get('/home', (req, res) => {
    res.render('home');
})

router.get('/login', (req, res) => {
    res.render('login');
})
router.post('/login', async (req, res) => {
    try {
        const id = req.body.email;
        const password = req.body.password;
        const getdata = await Student.findOne({ email: id });
        console.log(getdata);
        if (getdata[0].password == password) {
            res.status(200).send(getdata);
        } else {
            res.status(400).send("Something went wrong");
        }
    } catch (error) {
        res.status(404).send(error);
    }

})

router.get('/register', (req, res) => {
    res.render('signup');
})
router.post('/registeration', async (req, res) => {
    if (req.body.password === req.body.cpassword) {
        try {
            const student = new Student({
                fname: req.body.fname,
                lname: req.body.lname,
                email: req.body.email,
                gender: req.body.gender,
                phoneno: req.body.phoneno,
                age: req.body.age,
                password: req.body.password,
                cpassword: req.body.cpassword
            })
            const data = await student.save();
            console.log(data);
            res.status(201).render("home");
        } catch (error) {
            res.status(400).send(error);
        }
    } else {
        console.log("password are not matching");
    }
})

module.exports = router;