const express = require('express')
const router = express.Router();
const Task = require('../model/model')

router.get('/',(req,res)=>{
    res.send('All task');
})


router.post('/',async (req,res)=>{
    const singleTask = await Task.create(req.body);
    res.status(201).json({singleTask})
})


router.get('/:id',(req,res)=>{
    res.send('this is the info of a task');
})


router.patch('/:id',(req,res)=>{
    res.send('task updated successfully');
})


router.delete('/:id',(req,res)=>{
    res.send('task deleted successfully');
})

module.exports = router;
