const express = require('express')
const server = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
dotenv.config();   


//connecting with database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => 
  {console.log('database connected')});
mongoose.connection.on("error", err =>
  {console.log(`error message: ${err.message}`)});

//routes
const ItemRoute = require('./routes/ItemRoute');
const StudyGroupRoute = require('./routes/StudyGroupRoute');
const RegistrationRoute = require('./routes/RegistrationRoute');
const UserRoute = require('./routes/UserRoute');


//middleware
server.use(bodyParser.json());
server.use(cookieParser())
server.use(cors())

server.use("/", ItemRoute);
server.use("/", RegistrationRoute)
server.use("/",StudyGroupRoute);
server.use("/",UserRoute);

//this code for error handling from https://www.npmjs.com/package/express-jwt
server.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Unauthorized'); //we can use json to send the error message
  }
});

const port = 5000
server.listen(port);