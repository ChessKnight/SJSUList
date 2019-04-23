const express = require('express')
const server = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();   


//connecting with database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {console.log('database connected')});
mongoose.connection.on("error", err => {
  console.log(`error message: ${err.message}`)});


server.get('/', (req, res)=>{
  res.send('test from new server')
})


const port = 5000
server.listen(port);