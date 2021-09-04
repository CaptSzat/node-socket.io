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
let Result = document.getElementById("Result");
// let ShowInterlude = false;
let TRWins = 0;
let TLWins = 0;
let ScoreR = 0;
let ScoreL = 0;
localStorage.setItem('TLWins', TLWins);
localStorage.setItem('TRWins', TRWins);
localStorage.setItem('ScoreL', ScoreL);
localStorage.setItem('ScoreR', ScoreR);
localStorage.setItem('Result',false);

let G1 = document.getElementById("G1");
let G2 = document.getElementById("G2");
let G3 = document.getElementById("G3");
let G4 = document.getElementById("G4");

var results = {
  game1: {
    done: true,
    left: 0,
    right: 0
  },
  game2: {
    done: false,
    left: 0,
    right: 0
  },
  game3: {
    done: false,
    left: 0,
    right: 0
  },
  game4: {
    done: false,
    left: 0,
    right: 0
  }
};
G1.addEventListener('click', function() {
  let left = document.getElementById("G1L").value;
  let right = document.getElementById("G1R").value;
  results.game1.left = left;
  results.game1.right = right;
  if(localStorage.getItem('G1') === "true"){
    socket.emit('G1', false);
    localStorage.setItem('G1',false);
    results.game1.done = false;
    socket.emit('results', results);
  }else{
    socket.emit('G1', true);
    localStorage.setItem('G1', true);
    results.game1.done = true;
    socket.emit('results', results);
  }
});

G2.addEventListener('click', function() {
  let left = document.getElementById("G2L").value;
  let right = document.getElementById("G2R").value;
  results.game2.left = left;
  results.game2.right = right;
  if(localStorage.getItem('G2') === "true"){
    socket.emit('G2', false);
    localStorage.setItem('G2',false);
    results.game2.done = false;
    socket.emit('results', results);
  }else{
    socket.emit('G2', true);
    localStorage.setItem('G2', true);
    results.game2.done = true;
    socket.emit('results', results);
  }
});

G3.addEventListener('click', function() {
  let left = document.getElementById("G3L").value;
  let right = document.getElementById("G3R").value;
  results.game3.left = left;
  results.game3.right = right;
  if(localStorage.getItem('G3') === "true"){
    socket.emit('G3', false);
    localStorage.setItem('G3',false);
    results.game3.done = false;
    socket.emit('results', results);
  }else{
    socket.emit('G3', true);
    localStorage.setItem('G3', true);
    results.game3.done = true;
    socket.emit('results', results);
  }
});

G4.addEventListener('click', function() {
  let left = document.getElementById("G4L").value;
  let right = document.getElementById("G4R").value;
  results.game4.left = left;
  results.game4.right = right;
  if(localStorage.getItem('G4') === "true"){
    socket.emit('G4', false);
    localStorage.setItem('G4',false);
    results.game4.done = false;
    socket.emit('results', results);
  }else{
    socket.emit('G4', true);
    localStorage.setItem('G4', true);
    results.game4.done = true;
    socket.emit('results', results);
  }
});

Result.addEventListener('click', function() {
  if(localStorage.getItem('Result') === "true"){
    socket.emit('Result', false);
    localStorage.setItem('Result',false);
  }else{
    socket.emit('Result', true);
    localStorage.setItem('Result', true);
  }
});
Interlude.addEventListener('click', function() {
  // console.log("Used");
  document.getElementById('interlude').classList.add('show');
  document.getElementById('interlude').classList.remove('hide');
  // if(localStorage.getItem('ShowInterlude') === "true"){
    socket.emit('ShowInterlude', false);
    localStorage.setItem('ShowInterlude',false);
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
      socket.emit('ShowInterlude', true);
      localStorage.setItem('ShowInterlude',true);
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