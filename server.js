const express=require("express")
const app=express()
const bodyParser=require("body-parser")
// const db=require("./config/db.config")
const dataRoute=require("./routes/data.routes")
// const MongoClient = require("mongodb").MongoClient;
let avg;
let i=1;
// const db=require("./config/db.config")
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


app.use("/",dataRoute)




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
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
  next();
});

app.listen(3100, ()=>{
    console.log("app is listing on port 30000")
})


 
