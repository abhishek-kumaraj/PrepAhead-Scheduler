const express = require('express');
const app = express();
const endpoints = require('./routes/endpoints')


app.use(express.json());

app.use('/api/v1/tasks',endpoints)

app.listen(5000,()=>{
    console.log('app is listening at port 5000');
})
