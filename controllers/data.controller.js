const model=require("../models/data.model")
exports.findAll=(req,res)=>{
    model.findAll((err,data)=>
    {
        if(err)
        res.json(err)
        else{
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
            res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
            res.json({data:data})
        }
    })
}