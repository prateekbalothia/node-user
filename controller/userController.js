const user = require('../models/usermodel');




const addUser=async (req,res)=>{
    const {name, password, email} = req.body;
    if(!name || !password || !email){
        console.log("fields required!!")
    }
    const newUser = new user({name, password, email});
    const result = await newUser.save();
    console.log(result);
    res.send(result);
    console.log(req.body);
}

const getuser=async (req,res) => {
    let data = await user.find();
    res.send(data)
}

module.exports = { addUser,getuser }