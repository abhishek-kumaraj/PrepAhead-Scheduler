const express = require('express');
const app = express();
const endpoints = require('./routes/endpoints')
const databaseConnect = require('./db/connection');
require('dotenv').config();


app.use(express.json());

app.use('/api/v1/tasks',endpoints)
const start = async ()=>{
    try {
        await databaseConnect(process.env.DATA_BASE_URL)
        app.listen(5000,()=>{
            console.log('app is listening at port 5000');
        })
    } catch (error) {
        console.log(error)
    }
}

start();

