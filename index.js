//console.log("Hello there");

//bolier plate code of express
const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.get('/',(req,res)  =>{
   res.send("Ola from node API Server ✌🏻"); // coming from node API
   });

// Connecting to the database   
mongoose.connect("mongodb+srv://Tan:6VVspGGqVAAEcQCP@backenddb.zukks.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
  .then(() => {
   console.log('Connected To database!');
   //running it 
   app.listen(3000, ( ) =>{
   console.log('Server is running on port 3000');
   }); // coming from console screen 
})
.catch(() => {
   console.log('Connection falied!');
});