const user = require('../models/usermodel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const getuser = async (req, res) => {
    let data = await user.find();
    res.send(data)
}

const addUser = async (req, res) => {
    const { name, password, email } = req.body;
    if (!name || !password || !email) {
        console.log("fields required!!")
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new user({ name, password: hashedPassword, email });
    const result = await newUser.save();
    console.log(result);
    res.send(result);
    console.log(req.body);
}

const updateUser = async (req, res) => {
    let dataToUpdate = { ...req.body };
     let token = req.cookies.token
     if(token){
    if (dataToUpdate.password) {
        dataToUpdate.password = await bcrypt.hash(dataToUpdate.password, 10);
    }
    let data = await user.updateOne(
        req.params,
        { $set: dataToUpdate }
    )
    res.send(data)
}else{
    res.send("invalid user!!")
}
}

const deleteUser = async (req, res) => {
    console.log(req.params);
    let data = await user.deleteOne(req.params);
    res.send(data);
}

const login = async (req, res) => {
    // let token = req.headers.username;
    // let token = req.cookies.token
    // console.log(token)
    // return false
    const { email, password } = req.body;
    if (!email || !password) {
        res.send("email and password are required")
    }
    const nuser = await user.findOne({ email });
    if (!nuser) {
        res.send("invalid email or password")
    }
    // return false
    const pass = bcrypt.compare(password, nuser.password, (error, result) => {
        console.log(result)
        if (result == false) {
            res.send("Invalid email or password")
        }
        else {
            let token = jwt.sign({email},"secret")
            let dataString = {
                status:"successful",
                token:token
            }
            res.send(dataString)
            // console.log(token);
            
        }
    });
    // console.log(pass)
}

const jtoken = async (req,res) => {
}


module.exports = { addUser, getuser, updateUser, deleteUser, login, jtoken }