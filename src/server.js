const express = require('express')

var io = require('socket.io')
  ({
    path: '/webrtc'
  })

const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Hello World !!!'))

const server = app.listen(port, () => console.log('Server Is Listening'))