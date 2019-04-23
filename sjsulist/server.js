const express = require('express')
const server = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config();   


//connecting with database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {console.log('database connected')});
mongoose.connection.on("error", err => {
  console.log(`error message: ${err.message}`)});



//routes
const ItemRoute = require('./routes/ItemRoute')


//middleware
server.use(bodyParser.json());

server.use("/", ItemRoute)
 






const port = 5000
server.listen(port);