const express=require("express")
const router=express.Router()
const controller=require("../controllers/data.controller")

router.get("/",controller.findAll)


module.exports=router