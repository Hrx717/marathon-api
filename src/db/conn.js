const mongoose = require('mongoose');

//connect to monogodb
mongoose.set('strictQuery', true)
mongoose.connect("mongodb://localhost:27017/100mOlympics")
.then(()=> {
    console.log('connection successful..');
}).catch((err)=> {
    console.log(err);
})

