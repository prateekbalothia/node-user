const user = require('../models/usermodel');
const bcrypt = require('bcrypt')



const getuser=async (req,res) => {
    let data = await user.find();
    res.send(data)
}

const addUser=async (req,res)=>{
    const {name, password, email} = req.body;
    if(!name || !password || !email){
        console.log("fields required!!")
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new user({name, password:hashedPassword, email});
    const result = await newUser.save();
    console.log(result);
    res.send(result);
    console.log(req.body);
}

const updateUser = async (req,res) => {
        let data = await user.updateOne(
        req.params,
        {$set: req.body}
    )
    res.send(data)
}

const deleteUser = async (req,res) => {
    console.log(req.params);
    let data = await user.deleteOne(req.params);
    res.send(data);
}


module.exports = { addUser,getuser,updateUser,deleteUser }