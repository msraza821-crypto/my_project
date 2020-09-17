const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const db=require("./config/db.config")
// const MongoClient = require("mongodb").MongoClient;
let avg;
let i=1;
// db.then((client)=>{
  // console.log(client)
//   var dbo=client.db("first")
//   console.log(dbo)
//   for(myobj of avg)
// {
//   dbo.collection("company").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log(i++," document inserted");
//     // db.close();
//   });
// }
// })


app.use("/",(req,res)=>{
  db.then((client)=>{
    if(client)
    {
      var dbo=client.db("first")

      dbo.collection("company").find({}).toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
        
      });

    }
  })
})




// const clients = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   if(err)
//   {
//   console.log(err)
//   return
//   }
  
//   const collection = client.db("first").collection("devices");
//   // perform actions on the collection object
//   // console.log(collection)
 
//   console.log("after error")
//   client.close();
// })

app.listen(3100, ()=>{
    console.log("app is listing on port 30000")
})


 
