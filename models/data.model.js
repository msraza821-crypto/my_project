const dbconn=require("./../config/db.config")
let db;
var Data=[]
dbconn.then(client=>
    {
        db=client.db('first');
        // console.log(db)
    })



    Data.findAll=function(result){
        
    
        db.collection("company").find({$where:function(){return (this.topic="gas")}}).limit(5).toArray(function(err, data) {
            if (err) 
            result(err, null)
          else
          result(null, data)
          });
        }
    

    module.exports=Data