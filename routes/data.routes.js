const express=require("express")
const router=express.Router()
const controller=require("../controllers/data.controller")

router.get("/api/v1/All",controller.findAll)


module.exports=router