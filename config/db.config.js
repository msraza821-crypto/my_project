'use strict';

const MongoClient=require("mongodb").MongoClient
// const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://shabbir:sabrin99@cluster0.gg3cx.mongodb.net/first?retryWrites=true&w=majority"
let dbconn;
var Db = require('mongodb').Db
 
function getDb(){
 return MongoClient.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((client) => {
  console.log("MongoDB Connected…")
return client

}).catch(error=>
    {console.log(error)
        return error
    })
}
  module.exports=getDb()


//   function getDb() {
//     return MongoClient.connect(yourConnString).then(function (db) {
//         return db;
//     })
// }


// module.exports = getDb();
