const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('All task');
})


router.post('/',(req,res)=>{
    res.send('A new task has been created');
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
