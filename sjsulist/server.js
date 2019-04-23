const express = require('express')
const server = express()

server.get('/', (req, res)=>{
  res.send('test from new server')
})


const port = 5000
server.listen(port);