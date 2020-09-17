const model=require("../models/data.model")
exports.findAll=(req,res)=>{
    model.findAll((err,data)=>
    {
        if(err)
        res.json(err)
        else{
            res.json({data:data})
        }
    })
}