const express = require('express');
const app=express()
require('./config/mongoose');
const user = require('./models/usermodel');

app.use(express.json());

app.post('/',async (req,res)=>{
    const {name, password, email} = req.body;
    if(!name || !password || !email){
        console.log("fields required!!")
    }
    const newUser = new user({name, password, email});
    const result = await newUser.save();
    console.log(result);
    res.send(result);
    console.log(req.body);
})

app.listen(4500);