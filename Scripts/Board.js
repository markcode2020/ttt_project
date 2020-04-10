//to write some function about the board
var board = {
  move : 0,
  start : 0,
  win : false
}
let players=[];

const playerFactory = (name) => {
  var move = 0;
  greet = () => console.log("hello, this is " + name +". I play Tic Tac Toe.");
  return {name, move, greet};
}

const squareFactory = (id) => {
  var id_num = Number(id);
  var curChar = document.getElementById(id).innerHTML;
  var col = ((id_num - 1)  % 3) +1;

  //in this implementation row is assigned based on className
  //it is also possible to assign an integer (1 to 3) to row based on id_num
  if (document.getElementById(id).className === "top") {
    var row = 1;
  }
  if (document.getElementById(id).className === "middle") {
    var row = 2;
  }
  if (document.getElementById(id).className === "bottom") {
    var row = 3;
  }
  return {row, col, id_num, curChar};
}

function test_fac (){
  var i = 1;
  var square = [];
  for ( i=1; i<=9; i++) {
    square.push(squareFactory(i));
  }
    var n = 1;
    for (n=1; n<=3; n++) {
      //check each row
      if ((square[n*3-3].curChar===square[n*3-2].curChar) && (square[n*3-2].curChar===square[n*3-1].curChar)){
        if (square[n*3-3].curChar ==="X") {
          document.getElementById('Board_Status').innerHTML = players[0].name + " wins.";
          board.win = true;
          board.start = 0;
        }
        else if (square[n*3-3].curChar ==="O") {
          document.getElementById('Board_Status').innerHTML = players[1].name + " wins.";
          board.win = true;
          board.start = 0;
        }
      }
      //check each column
      if ((square[(n-1)].curChar===square[(n-1)+3].curChar) && (square[(n-1)+3].curChar===square[(n-1)+6].curChar)){
          if (square[(n-1)].curChar ==="X") {
            document.getElementById('Board_Status').innerHTML = players[0].name + " wins.";
            board.win = true;
            board.start = 0;
          }
          else if (square[(n-1)].curChar ==="O") {
            document.getElementById('Board_Status').innerHTML = players[1].name + " wins.";
            board.win = true;
            board.start = 0;
          }
        }
    }

    //check diagnal lines
    if ((square[0].curChar===square[4].curChar) && (square[4].curChar===square[8].curChar)){
        if (square[0].curChar ==="X") {
          document.getElementById('Board_Status').innerHTML = players[0].name + " wins.";
          board.win = true;
          board.start = 0;
        }
        else if (square[0].curChar ==="O") {
          document.getElementById('Board_Status').innerHTML = players[1].name + " wins.";
          board.win = true;
          board.start = 0;
        }
    }

    if ((square[3].curChar===square[4].curChar) && (square[4].curChar===square[6].curChar)){
          if (square[3] ==="X") {
            document.getElementById('Board_Status').innerHTML = players[0].name + " wins.";
            board.win = true;
            board.start = 0;
          }
          else if (square[3] ==="O") {
            document.getElementById('Board_Status').innerHTML = players[1].name + " wins.";
            board.win = true;
            board.start = 0;
          }
    }
}

function play(square_id) {
  let curChar = document.getElementById(square_id).innerHTML;
  if ((curChar!=="X")&&(curChar!=="O")&&(board.start === true)){
    if (board.move % 2 === 0){
      document.getElementById(square_id).innerHTML = "X";
      document.getElementById('Board_Status').innerHTML = "Next it is " + players[0].name + "'s move.";
    }
    if (board.move % 2 === 1){
      document.getElementById(square_id).innerHTML = "O";
      document.getElementById('Board_Status').innerHTML = "Next it is " + players[1].name + "'s move.";
    }
    board.move += 1;
  }
  test_fac();

  if ((board.move === 9) && (board.win === false)) {
    document.getElementById('Board_Status').innerHTML = "It is a draw.";
    board.start = 0;
  }
}

function start() {
  board.move = 0 ;
  board.win = false;
  board.start = true;
  player=[];
  var i = 1;
  for (i = 1; i <=9; i++) {
    document.getElementById(i).innerHTML="";
  }
  players.push(playerFactory(document.getElementById('player1').value));
  if (document.getElementById('single').checked) {
    players.push(playerFactory("AI"));
  }
  if (document.getElementById('double').checked) {
    players.push(playerFactory(document.getElementById('player2').value));
  }
  document.getElementById('Board_Status').innerHTML = "Game Start. It is " + players[0].name + "'s move.";
}

/*console.log("the first player is: " + p1.name + ", playing X.");
console.log("the second player is: " + p2.name +", playing O.");
console.log("p1's move:" +  p1.move);
console.log(Object.keys(p1));*/
