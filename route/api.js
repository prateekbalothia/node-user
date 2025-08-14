const express=require('express')
const app=express()
const router=express.Router()

const {addUser,getuser,updateUser,deleteUser,login,jtoken}=require('../controller/userController')

router.get("/find-user",getuser)
router.post('/add-user', addUser)
router.put('/update-user/:_id', updateUser)
router.delete('/delete-user/:_id',deleteUser)
router.post('/log-in',login)
router.post('/jwtoken',jtoken)
module.exports=router