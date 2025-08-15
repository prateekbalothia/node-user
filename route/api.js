const express=require('express')
const app=express()
const router=express.Router()

const {addUser,getuser,updateUser,deleteUser,login,jtoken}=require('../controller/userController')
const verifyToken = require('../middlewares/authMiddleware')

router.get("/find-user",verifyToken,getuser)
router.post('/add-user', addUser)
router.put('/update-user/:_id',verifyToken, updateUser)
router.delete('/delete-user/:_id',verifyToken,deleteUser)
router.post('/log-in',login)
router.post('/jwtoken',jtoken)
module.exports=router