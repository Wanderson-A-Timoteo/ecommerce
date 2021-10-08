require('dontenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileupload = require('express-fileupload');

mongosse.connect(process.env.DATABASE, {
  UseNewUrlParse: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
mongosse.connection.on('error', (error) => {
  console.log("Erro: ", error.message);
});

const server = express();

server.use(cors());
server.use(express.json());
server.use(fileupload());

server.use(express.static(__dirname+'/public'));

server.get('/ping', (req, res) => {
  res.json({pong: true});
});

server.listem(process.env.PORT, ()=>{
  console.log(`- Rodando no endereço: ${process.env.BASE}`);
});
