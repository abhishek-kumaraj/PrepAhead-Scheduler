const mongoose = require('mongoose');

const databaseConnect = (url)=>{
    return mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = databaseConnect;