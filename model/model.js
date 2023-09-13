const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    completed:{
        type:Boolean,
        default:false
    },
    startTime:{
        type:String,
        required:true
    },
    endTime:{
        type:String,
        required:true
    }
})

const Task = mongoose.model('Task',taskSchema);
// a model allows you to perform CRUD (Create, Read, Update, Delete) operations on MongoDB documents of a particular type (defined by the schema).

module.exports = Task;