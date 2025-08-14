const express=require('express')
const app=express()
const router=express.Router()


const {addUser,getuser}=require('../controller/userController')

router.post('/', addUser)
router.get("/find-user",getuser)
module.exports=router