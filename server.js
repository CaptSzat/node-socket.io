'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const PORT = process.env.PORT || 3000;
const INDEX = '/public/';

const server = express()
  .use(express.static(path.join(__dirname, 'public')))
  // .get('/public', function(req, res) {
  //   res.sendFile('index.html', { root: __dirname })
  // })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server);

var showTextBot = false;
  var text = "Welcome to RLC3";
  var HideScoreboard = false;
  var TLWins = 0;
  var TRWins = 0;
  var ScoreL = 0;
  var ScoreR = 0;
  var CommentBox = "";
  var ShowL = false;
  var ShowR = true;
  var LName = "Jack";
  var RName = "Thomas";


io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
  socket.on('text', (text) => io.emit('text', text));
  socket.on('ShowTextBot', (data) => {
    console.log(data);
    io.emit('ShowTextBot', data)
  });
  socket.on('HideScoreboard', (data) => io.emit('HideScoreboard', (data)));
  socket.on('TLWins', (data) => io.emit('TLWins', (data)));
  socket.on('TRWins', (data) => io.emit('TRWins', (data)));
  socket.on('ScoreL', (data) => io.emit('ScoreL', (data)));
  socket.on('ScoreR', (data) => io.emit('ScoreR', (data)));
  socket.on('CommentBox', (data) => io.emit('CommentBox', (data)));
  socket.on('ShowL', (data) => io.emit('ShowL', (data)));
  socket.on('ShowR', (data) => io.emit('ShowR', (data)));
  socket.on('Result', (data) => io.emit('Result', (data)));
  socket.on('results', (data) => io.emit('results', (data)));
  socket.on('ShowInterlude', (data) => io.emit('ShowInterlude', (data)));
  socket.on('LName', (data) => {
    console.log(data);
    io.emit('LName', (data))});
  socket.on('RName', (data) => {
    console.log(data);
    io.emit('RName', (data))});
    //On Connection
  // io.emit('HideScoreboard', (HideScoreboard));
  // io.emit('TLWins', (TLWins));
  // io.emit('TRWins', (TRWins));
  // io.emit('RName', (RName));
  // io.emit('LName', (LName));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
