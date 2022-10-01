// button click handler  button.addEventListener('click', function)
let flag = 1;
let moves = 8;
//const replay = document.getElementById('replay');
//replay.onclick = replayMode;

const reset = document.getElementById('reset');
reset.onclick = restartGame;

const b1 = document.getElementById('box-1');
b1.onclick = fill1;
const b2 = document.getElementById('box-2');
b2.onclick = fill2;
const b3 = document.getElementById('box-3');
b3.onclick = fill3;
const b4 = document.getElementById('box-4');
b4.onclick = fill4;
const b5 = document.getElementById('box-5');
b5.onclick = fill5;
const b6 = document.getElementById('box-6');
b6.onclick = fill6;
const b7 = document.getElementById('box-7');
b7.onclick = fill7;
const b8 = document.getElementById('box-8');
b8.onclick = fill8;
const b9 = document.getElementById('box-9');
b9.onclick = fill9;

document.getElementById("field").onclick = turnText;

//const play = (event) => {

//apply event to generate new game state


// game state renderer renders the generated game state

// renders text on button clicked with X or O
// disable the button clicked
function fill1() {
    const newText = document.createElement('a');
      
    if (flag == 1) {
         newText.innerText = "X";
          flag = 0;
      }
      else {
        newText.innerText = "0";   
          flag = 1;
      }
   b1.disabled = true;
    b1.append(newText);
    checkWin();
  }
  function fill2() {
    const newText = document.createElement('a');
      
    if (flag == 1) {
         newText.innerText = "X";
          flag = 0;
      }
      else {
        newText.innerText = "0";   
          flag = 1;
      }
   b2.disabled = true;
    b2.append(newText);
    checkWin();
  }
  function fill3() {
    const newText = document.createElement('a');
      
    if (flag == 1) {
         newText.innerText = "X";
          flag = 0;
      }
      else {
        newText.innerText = "0";   
          flag = 1;
      }
   b3.disabled = true;
    b3.append(newText);
    checkWin();
  }
  function fill4() {
    const newText = document.createElement('a');
      
    if (flag == 1) {
         newText.innerText = "X";
          flag = 0;
      }
      else {
        newText.innerText = "0";   
          flag = 1;
      }
   b4.disabled = true;
    b4.append(newText);
    checkWin();
  }
  function fill5() {
    const newText = document.createElement('a');
      
    if (flag == 1) {
         newText.innerText = "X";
          flag = 0;
      }
      else {
        newText.innerText = "0";   
          flag = 1;
      }
   b5.disabled = true;
    b5.append(newText);
    checkWin();
  }
  function fill6() {
    const newText = document.createElement('a');
      
    if (flag == 1) {
         newText.innerText = "X";
          flag = 0;
      }
      else {
        newText.innerText = "0";   
          flag = 1;
      }
   b6.disabled = true;
    b6.append(newText);
    checkWin();
  }
  function fill7() {
    const newText = document.createElement('a');
      
    if (flag == 1) {
         newText.innerText = "X";
          flag = 0;
      }
      else {
        newText.innerText = "0";   
          flag = 1;
      }
   b7.disabled = true;
    b7.append(newText);
    checkWin();
  }
  function fill8() {
    const newText = document.createElement('a');
      
    if (flag == 1) {
         newText.innerText = "X";
          flag = 0;
      }
      else {
        newText.innerText = "0";   
          flag = 1;
      }
   b8.disabled = true;
    b8.append(newText);
    checkWin();
  }
  function fill9() {
    const newText = document.createElement('a');
      
    if (flag == 1) {
         newText.innerText = "X";
          flag = 0;
      }
      else {
        newText.innerText = "0";   
          flag = 1;
      }
   b9.disabled = true;
    b9.append(newText);
    checkWin();
  }

// update panel values such as Turn Played By and Moves Left
function turnText() {
    if (flag == 1) {
    document.getElementById("next-player").textContent = "Turn Played By: O";
    } else {
    document.getElementById('next-player').textContent = "Turn Played By: X";
    }

    document.getElementById('move-count').innerText = (`Moves Left: ${moves}`);
  moves--;
  }
// reset panel values to default values

// implement logic to get the winner
function checkWin() {
  if ((b1.textContent == 'X') && (b2.textContent == 'X') && (b3.textContent == 'X')) {           
            b4.disabled = true;
            b5.disabled = true;
            b6.disabled = true;
            b7.disabled = true;
            b8.disabled = true;
            b9.disabled = true;
        window.alert('Player X won');
    } else if ((b1.textContent == '0') && (b2.textContent == '0') && (b3.textContent == '0')) {           
            b4.disabled = true;
            b5.disabled = true;
            b6.disabled = true;
            b7.disabled = true;
            b8.disabled = true;
            b9.disabled = true;
        window.alert('Player O won');
    } else if ((b1.textContent == 'X') && (b4.textContent == 'X') && (b7.textContent == 'X')) {           
            b2.disabled = true;
            b3.disabled = true;
            b5.disabled = true;
            b6.disabled = true;
            b8.disabled = true;
            b9.disabled = true;
        window.alert('Player X won');
    } else if ((b1.textContent == '0') && (b4.textContent == '0') && (b7.textContent == '0')) {           
            b2.disabled = true;
            b3.disabled = true;
            b5.disabled = true;
            b6.disabled = true;
            b8.disabled = true;
            b9.disabled = true;
        window.alert('Player O won');
    } else if ((b7.textContent == 'X') && (b8.textContent == 'X') && (b9.textContent == 'X')) {           
            b1.disabled = true;
            b2.disabled = true;
            b3.disabled = true;
            b4.disabled = true;
            b5.disabled = true;
            b6.disabled = true;
        window.alert('Player X won');
    } else if ((b7.textContent == '0') && (b8.textContent == '0') && (b9.textContent == '0')) {           
            b1.disabled = true;
            b2.disabled = true;
            b3.disabled = true;
            b4.disabled = true;
            b5.disabled = true;
            b6.disabled = true;
        window.alert('Player O won');
    } else if ((b3.textContent == 'X') && (b6.textContent == 'X') && (b9.textContent == 'X')) {           
            b1.disabled = true;
            b2.disabled = true;
            b4.disabled = true;
            b5.disabled = true;
            b7.disabled = true;
            b8.disabled = true;
        window.alert('Player X won');
    } else if ((b3.textContent == '0') && (b6.textContent == '0') && (b9.textContent == '0')) {           
            b1.disabled = true;
            b2.disabled = true;
            b4.disabled = true;
            b5.disabled = true;
            b7.disabled = true;
            b8.disabled = true;
        window.alert('Player O won');
    } else if ((b1.textContent == 'X') && (b5.textContent == 'X') && (b9.textContent == 'X')) {           
            b2.disabled = true;
            b3.disabled = true;
            b4.disabled = true;
            b6.disabled = true;
            b7.disabled = true;
            b8.disabled = true;
        window.alert('Player X won');
    } else if ((b1.textContent == '0') && (b5.textContent == '0') && (b9.textContent == '0')) {           
            b2.disabled = true;
            b3.disabled = true;
            b4.disabled = true;
            b6.disabled = true;
            b7.disabled = true;
            b8.disabled = true;
        window.alert('Player O won');
    } else if ((b3.textContent == 'X') && (b5.textContent == 'X') && (b7.textContent == 'X')) {           
            b1.disabled = true;
            b2.disabled = true;
            b4.disabled = true;
            b6.disabled = true;
            b8.disabled = true;
            b9.disabled = true;
        window.alert('Player X won');
    } else if ((b3.textContent == '0') && (b5.textContent == '0') && (b7.textContent == '0')) {           
            b1.disabled = true;
            b2.disabled = true;
            b4.disabled = true;
            b6.disabled = true;
            b8.disabled = true;
            b9.disabled = true;
        window.alert('Player O won');
    } else if ((b2.textContent == 'X') && (b5.textContent == 'X') && (b8.textContent == 'X')) {           
            b1.disabled = true;
            b3.disabled = true;
            b4.disabled = true;
            b6.disabled = true;
            b7.disabled = true;
            b9.disabled = true;
        window.alert('Player X won');
    } else if ((b2.textContent == '0') && (b5.textContent == '0') && (b8.textContent == '0')) {           
            b1.disabled = true;
            b3.disabled = true;
            b4.disabled = true;
            b6.disabled = true;
            b7.disabled = true;
            b9.disabled = true;
        window.alert('Player O won');
    } else if ((b4.textContent == 'X') && (b5.textContent == 'X') && (b6.textContent == 'X')) {           
            b1.disabled = true;
            b2.disabled = true;
            b3.disabled = true;
            b7.disabled = true;
            b8.disabled = true;
            b9.disabled = true;
        window.alert('Player X won');
    } else if ((b4.textContent == '0') && (b5.textContent == '0') && (b6.textContent == '0')) {           
            b1.disabled = true;
            b2.disabled = true;
            b3.disabled = true;
            b7.disabled = true;
            b8.disabled = true;
            b9.disabled = true;
        window.alert('Player O won');
    } 
}
// announce winner
//}

// REPLAY-MODE :: replay-game-button-clicked->fetches events recorded->apply event->generates new game state->render game state


// reset game to start a new
function restartGame() {
    b1.textContent = '';
    b1.disabled = false;
    b2.textContent = '';
    b2.disabled = false;
    b3.textContent = '';
    b3.disabled = false;
    b4.textContent = '';
    b4.disabled = false;
    b5.textContent = '';
    b5.disabled = false;
    b6.textContent = '';
    b6.disabled = false;
    b7.textContent = '';
    b7.disabled = false;
    b8.textContent = '';
    b8.disabled = false;
    b9.textContent = '';
    b9.disabled = false;

    document.getElementById("next-player").textContent = "Turn Played By: -----";
    flag = 1;
    document.getElementById('move-count').innerText = 'Moves Left:9';
  moves = 8;
}


// bind events to clickable buttons
//function enableButtons() {}

module.exports = play;
