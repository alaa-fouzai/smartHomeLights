const express = require('express');
require('dotenv/config');
const app = express();
const server = require('http').createServer(app);
var cors = require('cors')
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
      origin: "*"
    }
  });
const bodyParser= require('body-parser');

app.use(cors());
app.use(bodyParser.json());



io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('create', async function(room) {
      

      
    });
    socket.on('deviceEmit', async function(chat) {
      console.log('deviceEmit');

      
    });
    socket.on('appEmit', async function(chat) {
      try {
        //save to DB
        console.log("appEmit")

      } catch(e) {
        console.log(e)
        console.log("AdminEmit:could not save message")
      }
      
    });

});
server.listen(4000, () => {
    console.log('listening on *:4000');
  });




