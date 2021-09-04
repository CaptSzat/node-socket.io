let socket = io();
// let el;

// socket.on('time', (timeString) => {
//   el = document.getElementById('server-time');
//   el.innerHTML = 'Server time LETS GOOO: ' + timeString;
// });

let SR1 = document.getElementById("TRScore1");
let SL1 = document.getElementById("TLScore1");
let TLW = document.getElementById("TLWin");
let TRW = document.getElementById("TRWin");
let Res = document.getElementById("Reset");
let Show = document.getElementById("show");
let ShowL = document.getElementById("showL");
let ShowR = document.getElementById("showR");
let HideScoreboard = document.getElementById("hideScore");
let ShowTextBot = document.getElementById("ShowTextBot");
let Welcome = document.getElementById("welcome");
let RName = document.getElementById("RName");
let SetRName = document.getElementById("SetRName");
let LName = document.getElementById("LName");
let SetLName = document.getElementById("SetLName");
let Interlude = document.getElementById("ShowInterlude");
let InterludeHide = document.getElementById("HideInterlude");
// let ShowInterlude = false;
let TRWins = 0;
let TLWins = 0;
let ScoreR = 0;
let ScoreL = 0;
localStorage.setItem('TLWins', TLWins);
localStorage.setItem('TRWins', TRWins);
localStorage.setItem('ScoreL', ScoreL);
localStorage.setItem('ScoreR', ScoreR);

Interlude.addEventListener('click', function() {
  // console.log("Used");
  document.getElementById('interlude').classList.add('show');
  document.getElementById('interlude').classList.remove('hide');
  // if(localStorage.getItem('ShowInterlude') === "true"){
    // socket.emit('ShowInterlude', false);
    // localStorage.setItem('ShowInterlude',false);
  // }else{
  //   socket.emit('ShowInterlude', true);
  //   localStorage.setItem('ShowInterlude',true);
  // }
});
InterludeHide.addEventListener('click', function() {
    // console.log("Used");
    document.getElementById('interlude').classList.remove('show');
    document.getElementById('interlude').classList.add('hide');
    // if(localStorage.getItem('ShowInterlude') === "true"){
    //   socket.emit('ShowInterlude', false);
    //   localStorage.setItem('ShowInterlude',false);
    // }else{
      // socket.emit('ShowInterlude', true);
      // localStorage.setItem('ShowInterlude',true);
    // }
  // if(ShowInterlude === false){
  //   socket.emit('ShowInterlude', true);
  //   ShowInterlude = true;
  // }else{
  //   socket.emit('ShowInterlude', false);
  //   ShowInterlude = false;
  // }
});
SetRName.addEventListener('click', function() {
  let text = RName.value;
  if(text === ''){
    socket.emit('RName', "Sam");
  }else{
    socket.emit('RName', text);
  }
});
SetLName.addEventListener('click', function() {
  let text = LName.value;
  if(text === ''){
    socket.emit('LName', "Tom");
  }else{
    socket.emit('LName', text);
  }
});




ShowTextBot.addEventListener('click', function() {
    let text = Welcome.value;
    if(text === ''){
      socket.emit('text', "Welcome To RLC3");
    }else{
      socket.emit('text', text);
    }
    if(localStorage.getItem('ShowTextBot') === "true"){
      socket.emit('ShowTextBot', false);
      localStorage.setItem('ShowTextBot', false);
    }else{
      socket.emit('ShowTextBot', true);
      localStorage.setItem('ShowTextBot', true);
    }
});

HideScoreboard.addEventListener('click', function() {
    if(localStorage.getItem('HideScoreboard') === "true"){
      socket.emit('HideScoreboard', false);
      localStorage.setItem('HideScoreboard',false);
    }else{
      socket.emit('HideScoreboard', true);
      localStorage.setItem('HideScoreboard',true);
    }
});

TLW.addEventListener('click', function() {
    TLWins = TLWins + 1;
    if(TLWins === 2){
        TLWins = 0;
    }
    socket.emit('TLWins', TLWins);
});

TRW.addEventListener('click', function() {
    TRWins = TRWins + 1;
    if(TRWins === 2){
        TRWins = 0;
    }
    socket.emit('TRWins', TRWins);
});

SL1.addEventListener('click', function() {
    ScoreL = ScoreL + 1;
    socket.emit('ScoreL', ScoreL);
});

SR1.addEventListener('click', function() {
ScoreR = ScoreR + 1;
socket.emit('ScoreR', ScoreR);
});

Res.addEventListener('click', function() {
    ScoreR = 0;
    ScoreL = 0;
    socket.emit('ScoreL', ScoreL);
    socket.emit('ScoreR', ScoreR);
});

Show.addEventListener('click', function() {
    if(localStorage.getItem('CommentBox') === "true"){
      socket.emit('CommentBox', false);
      localStorage.setItem('CommentBox', false);
    }else{
      socket.emit('CommentBox', true);
      localStorage.setItem('CommentBox', true);
    }
});
ShowL.addEventListener('click', function() {
    if(localStorage.getItem('ShowL') === "true"){
      socket.emit('ShowL', false);
      localStorage.setItem('ShowL',false);
    }else{
      socket.emit('ShowL', true);
      localStorage.setItem('ShowL', true);
    }
});
ShowR.addEventListener('click', function() {
    if(localStorage.getItem('ShowR') === "true"){
      socket.emit('ShowR', false);
      localStorage.setItem('ShowR', false);
    }else{
      socket.emit('ShowR', true);
      localStorage.setItem('ShowR', true);
    }
});