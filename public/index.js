let socket = io();
// let el;

// socket.on('time', (timeString) => {
//   el = document.getElementById('server-time');
//   el.innerHTML = 'Server time: ' + timeString;
// });
/* <div class="result">Hello</div> */

// document.getElementById('sideResult').innerHTML = "gi";
var LName = "Joe";
var RName = "Tim"

socket.on('results', data => {
    if(data.game1.done === true){
      document.getElementById('sideResult').innerHTML += '<div class="result" id="gm1">' +
'<p class="LR">' + data.game1.left + '</p><p class="LRName">' + LName + '</p>'
+
'<p class="RRName">' + RName + '</p><p class="RR">' + data.game1.right + '</p>' +
'</div><br>';
     data.game1.done = false;
    }
    if(data.game2.done === true){
      document.getElementById('sideResult').innerHTML += '<div class="result" id="gm2">' +
'<p class="LR">' + data.game2.left + '</p><p class="LRName">' + LName + '</p>'
+
'<p class="RRName">' + RName + '</p><p class="RR">' + data.game2.right + '</p>' +
'</div><br>';
      data.game2.done = false;
    }
    if(data.game3.done === true){
      document.getElementById('sideResult').innerHTML += '<div class="result" id="gm3">' +
'<p class="LR">' + data.game3.left + '</p><p class="LRName">' + LName + '</p>'
+
'<p class="RRName">' + RName + '</p><p class="RR">' + data.game3.right + '</p>' +
'</div><br>';
      data.game3.done = false;
    }
    if(data.game4.done === true){
      document.getElementById('sideResult').innerHTML += '<div class="result" id="gm4">' +
'<p class="LR">' + data.game4.left + '</p><p class="LRName">' + LName + '</p>'
+
'<p class="RRName">' + RName + '</p><p class="RR">' + data.game4.right + '</p>' +
'</div><br>';
      data.game4.done = false;
    }
    if(data.clear === true){
      document.getElementById('sideResult').innerHTML = "";
      data.clear = false;
      socket.emit('results', data.clear)
    }
    socket.emit('results', data);
    console.log(data);
});


socket.on('Result', data => {
if(data === true){
  document.getElementById('sideResult').classList.remove('hideThing');
  document.getElementById('sideResult').classList.add('showThing');
}
if(data === false){
  document.getElementById('sideResult').classList.add('hideThing');
  document.getElementById('sideResult').classList.remove('showThing');
}
});

socket.on('ShowInterlude', data => {
  console.log("check" + data);
  if(data === true){
    document.getElementById('interlude').classList.remove('ShowInterlude');
    document.getElementById('interlude').classList.add('HideInterlude');
    console.log(data);
  }
  if(data === false){
    document.getElementById('interlude').classList.add('ShowInterlude');
    document.getElementById('interlude').classList.remove('HideInterlude');
  }
});
socket.on('LName', data => {
  console.log(data);
  document.getElementById('LName').innerHTML = data;
  LName = data;
});

socket.on('RName', data => {
  console.log(data);
  document.getElementById('RName').innerHTML = data;
  RName = data;
});

socket.on('text', (text) => {
  document.getElementById('welcome').innerHTML = text;
});

socket.on('ShowTextBot', (data) => {
  if(data === true){
    document.getElementById('welcome').classList.add('showbot');
    document.getElementById('welcome').classList.remove('hidebot');
}
if(data === false){
  document.getElementById('welcome').classList.add('hidebot');
  document.getElementById('welcome').classList.remove('showbot');
}
});

socket.on('HideScoreboard', (data) => {
  if(data === true){
    document.getElementById('scoreboard').classList.add('showscore');
    document.getElementById('scoreboard').classList.remove('hidden');
    document.getElementById('ribbon').classList.add('showscore');
    document.getElementById('ribbon').classList.remove('hidden');
}
if(data === false){
  document.getElementById('scoreboard').classList.remove('showscore');
  document.getElementById('scoreboard').classList.add('hidden');
  document.getElementById('ribbon').classList.remove('showscore');
  document.getElementById('ribbon').classList.add('hidden');
}
});

socket.on('TLWins', (data) => {
  if(data === 0){
    console.log("Seen");
    document.getElementById('LTeam1').style.backgroundColor = " rgba(206, 202, 202, 0.25)";
}
if(data === 1){
  document.getElementById('LTeam1').style.backgroundColor = "rgba(206, 202, 202, 1)";
}
});

socket.on('TRWins', (data) => {
  if(data === 0){
    document.getElementById('RTeam1').style.backgroundColor = " rgba(206, 202, 202, 0.25)";
}
if(data === 1){
  document.getElementById('RTeam1').style.backgroundColor = "rgba(206, 202, 202, 1)";
}
});

socket.on('ScoreL', (data) => {
  document.getElementById('LScore').innerHTML = data;
});

socket.on('ScoreR', (data) => {
  document.getElementById('RScore').innerHTML = data;
});

socket.on('CommentBox', (data) => {
  if(data === true){
    document.getElementById('commbox').classList.add('show');
    document.getElementById('commbox').classList.remove('hide');
}
if(data === false){
  document.getElementById('commbox').classList.add('hide');
  document.getElementById('commbox').classList.remove('show');
}
});

socket.on('ShowL', (data) => {
  if(data === true){
    document.getElementById('LTR').classList.add('ShowL');
}
if(data === false){
  document.getElementById('LTR').classList.remove('ShowL');
}
});

socket.on('ShowR', (data) => {
  if(data === true){
    document.getElementById('RTR').classList.add('ShowR');
}
if(data === false){
  document.getElementById('RTR').classList.remove('ShowR');
}
});

// document.getElementById('LScore').innerHTML = localStorage.getItem('ScoreL');
// document.getElementById('RScore').innerHTML = localStorage.getItem('ScoreR');
// if(localStorage.getItem('TLWins') === "0"){
//     console.log("Seen");
//     document.getElementById('LTeam1').style.backgroundColor = " rgba(206, 202, 202, 0.25)";
// }
// if(localStorage.getItem('TRWins') === "0"){
//     document.getElementById('RTeam1').style.backgroundColor = " rgba(206, 202, 202, 0.25)";
// }
// if(localStorage.getItem('TLWins') === "1"){
//     document.getElementById('LTeam1').style.backgroundColor = "rgba(206, 202, 202, 1)";
// }
// if(localStorage.getItem('TRWins') === "1"){
//     document.getElementById('RTeam1').style.backgroundColor = "rgba(206, 202, 202, 1)";
// }
// if(localStorage.getItem('CommentBox') === "true"){
//     document.getElementById('commbox').classList.add('show');
//     document.getElementById('commbox').classList.remove('hide');
// }
// if(localStorage.getItem('CommentBox') === "false"){
//     document.getElementById('commbox').classList.add('hide');
//     document.getElementById('commbox').classList.remove('show');
// }
// if(localStorage.getItem('ShowL') === "true"){
//     document.getElementById('LTR').classList.add('ShowL');
// }
// if(localStorage.getItem('ShowL') === "false"){
//     document.getElementById('LTR').classList.remove('ShowL');
// }
// if(localStorage.getItem('ShowR') === "true"){
//     document.getElementById('RTR').classList.add('ShowR');
// }
// if(localStorage.getItem('ShowR') === "false"){
//     document.getElementById('RTR').classList.remove('ShowR');
// }
// if(localStorage.getItem('ShowTextBot') === "true"){
//     document.getElementById('welcome').classList.add('showbot');
//     document.getElementById('welcome').classList.remove('hidebot');
// }
// if(localStorage.getItem('ShowTextBot') === "false"){
//     document.getElementById('welcome').classList.add('hidebot');
//     document.getElementById('welcome').classList.remove('showbot');
// }
// if(localStorage.getItem('HideScoreboard') === "true"){
//     document.getElementById('scoreboard').classList.add('showscore');
//     document.getElementById('scoreboard').classList.remove('hidden');
//     document.getElementById('ribbon').classList.add('showscore');
//     document.getElementById('ribbon').classList.remove('hidden');
// }
// if(localStorage.getItem('HideScoreboard') === "false"){
//     document.getElementById('scoreboard').classList.remove('showscore');
//     document.getElementById('scoreboard').classList.add('hidden');
//     document.getElementById('ribbon').classList.remove('showscore');
//     document.getElementById('ribbon').classList.add('hidden');
// }


// if(localStorage.getItem('TLWins') === "2"){
//     document.getElementById('LTeam1').style.backgroundColor = "rgba(206, 202, 202, 1)";
//     document.getElementById('LTeam2').style.backgroundColor = "rgba(206, 202, 202, 1)";
    // document.getElementById('LTeam3').style.backgroundColor = " rgba(206, 202, 202, 0.25)";
// }
// if(localStorage.getItem('TRWins') === "2"){
//     document.getElementById('RTeam1').style.backgroundColor = "rgba(206, 202, 202, 1)";
//     document.getElementById('RTeam2').style.backgroundColor = "rgba(206, 202, 202, 1)";
//     // document.getElementById('RTeam3').style.backgroundColor = " rgba(206, 202, 202, 0.25)";
// }
// if(localStorage.getItem('TLWins') === "3"){
//     document.getElementById('LTeam1').style.backgroundColor = "rgba(206, 202, 202, 1)";
//     document.getElementById('LTeam2').style.backgroundColor = "rgba(206, 202, 202, 1)";
//     document.getElementById('LTeam3').style.backgroundColor = "rgba(206, 202, 202, 1)";
// }
// if(localStorage.getItem('TRWins') === "3"){
//     document.getElementById('RTeam1').style.backgroundColor = "rgba(206, 202, 202, 1)";
//     document.getElementById('RTeam2').style.backgroundColor = "rgba(206, 202, 202, 1)";
//     document.getElementById('RTeam3').style.backgroundColor = "rgba(206, 202, 202, 1)";
// }