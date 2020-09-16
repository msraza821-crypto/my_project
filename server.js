const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const db=require("./config/db.config")
// const MongoClient = require("mongodb").MongoClient;

db.then((message)=>{
  console.log(message)
})


// const client = new MongoClient(uri, { useNewUrlParser: true });
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

app.listen(3001, ()=>{
    console.log("app is listing on port 30000")
})