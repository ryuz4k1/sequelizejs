"use strict";
const express         = require('express');
const app             = express();
const db              = require('./src/db')
const userController  = require('./src/controller/user.controller')
require("dotenv").config();


db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });


app.get('/',(req,res) => {
    return res.send('Hello World');
});


let router = express.Router();
app.use("/", router);
new userController(router);




const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listening on port ${port}...`));