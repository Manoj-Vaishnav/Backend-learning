const express = require('express');
const router = express.Router();
const Mensdb = require('../models/mens');

router.use(express.json());

router.post('/add', async (req, res) => {
    try {
        const mens100 = new Mensdb(req.body);
        const insert = await mens100.save();
        res.status(201).send(insert);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get('/', async (req, res) => {
    const getdata = await Mensdb.find({}).sort({ranking:1});
    res.status(200).send(getdata);
})

router.get('/men/:ranking', async (req, res) => {
    try {
        const onedata = await Mensdb.find({ ranking: req.params.ranking });
        res.status(200).send(onedata);
    } catch (error) {
        res.status(404).send(error);
    }
})

router.patch('/update/:ranking',async(req,res)=>{
      const updatedata=await Mensdb.findOneAndUpdate({ranking:req.params.ranking},req.body);
      res.status(201).send(updatedata);
})

router.delete('/delete/:ranking',async(req,res)=>{
    const deletedata=await Mensdb.deleteOne({ranking:req.params.ranking});
     res.status(201).send(deletedata);
})

module.exports = router;