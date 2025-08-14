const express = require('express');
const app=express()
// require('./config/mongoose');
// const user = require('./models/usermodel');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/admin");


app.use(express.json());


// app.post('/')
const userRouter=require('./route/api')
app.use(userRouter)


app.listen(4500);