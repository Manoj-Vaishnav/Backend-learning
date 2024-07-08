const express = require('express')
const  router= express.Router()

router.get('/',(req,res)=>{
    res.send("Hello home");
})
router.get('/about',(req,res)=>{
    res.send("Hello about");
})
router.get('/intro',(req,res)=>{
    res.send("Hello intro");
})

module.exports=router;