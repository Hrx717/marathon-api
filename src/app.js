const express = require('express');
require("./db/conn");
const router = require('./routes/router');

const app = express();
const port = process.env.PORT || 3000;

//use json data from req.body
app.use(express.json());
app.use(router);


app.listen(port,()=> {
    console.log(`listening at port no. ${port}`);
});