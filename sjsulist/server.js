const express = require('express')
const server = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
//var cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
dotenv.config();   


//connecting with database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {console.log('database connected')});
mongoose.connection.on("error", err => {
  console.log(`error message: ${err.message}`)});

//routes
const ItemRoute = require('./routes/ItemRoute');
const StudyGroupRoute = require('./routes/StudyGroupRoute');
//const RegistrationRoute = require('./routes/RegistrationRoute')


//middleware
server.use(bodyParser.json());
//server.use(cookieParser())

server.use("/", ItemRoute);
//server.use("/", RegistrationRoute)
server.use("/",StudyGroupRoute);

const port = 5000
server.listen(port);