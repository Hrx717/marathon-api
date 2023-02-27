const express = require('express');
const router = new express.Router();
const Ranking = require("../models/schema")

// handling get request (read)
router.get('/ranks', async (req,res)=> {
    try {
        const getData = await Ranking.find({}).sort({ranking:1});
        res.send(getData);
    }catch(err) {res.status(400).send(err)};
});

// get individual data using id 
router.get('/ranks/:id', async (req,res)=> {
    try {
        const _id = req.params.id;
        const getDataById = await Ranking.findById(_id);
        res.send(getDataById);
    }catch(err) {res.status(400).send(err)}
});

// handling post request 
router.post('/ranks', async (req,res)=> {
    try {
        const addRecord = new Ranking(req.body);

        const result = await addRecord.save();
        console.log(result);
        res.status(201).send("Ranks Inserted");
    }catch(err) {res.status(400).send(err)};
});

// update data of individual
router.patch('/ranks/:id', async (req,res)=> {
    try {
        const _id = req.params.id;
        const updateData = await Ranking.findByIdAndUpdate(_id,req.body,{new: true});
        res.send(updateData);
    }catch(err) {res.status(500).send(err)}
});


// delete data by id
router.delete('/ranks/:id', async (req,res)=> {
    try {
        const _id = req.params.id;
        const deleteData = await Ranking.findByIdAndDelete(_id);
        res.send(deleteData);
    }catch(err) {res.status(500).send(err)}
});

module.exports = router;