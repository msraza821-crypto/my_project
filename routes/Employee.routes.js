const express=require("express")
const router=express.Router()
const controller=require("./../controllers/employee.controller")

router.get("/api/v1/allEmployee",controller.findAll)


module.exports=router