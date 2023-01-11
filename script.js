"use strict";

const gameClock = document.querySelector(".clock");
const playerTitle = document.querySelector(".player-title");
const ticTacToeBoard = document.querySelector(".tic-tac-toe-container");
const cells = document.querySelectorAll(".cell");
const startPauseBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".resetBtn");
const cellsClicked = [];
const winningMoves = [
  "box-1",
  "box-2",
  "box-3",
  "box-4",
  "box-5",
  "box-6",
  "box-7",
  "box-8",
  "box-9",
];
let seconds = 0;
let minutes = 0;
let displaySeconds = 0;
let displayMinutes = 0;
let interval = null;
let stopWatchStatus = "stopped";

ticTacToeBoard.classList.add("player-turn");
//functions

const playerMove = () => {
  cells.forEach((cell) => {
    const playerEventListener = () => {
      if (ticTacToeBoard.classList.contains("player-turn")) {
        let currentPlayer = document.createElement("p");
        currentPlayer.classList.add("player-1");
        currentPlayer.innerHTML = "X";
        cell.append(currentPlayer);
        playerTitle.innerHTML = "Player: 2";
        ticTacToeBoard.classList.toggle("player-turn");

        cellsClicked.push(cell);
        console.log(cellsClicked);
        let gameOver = [];
        for (let i = 0; i < cellsClicked.length; i++) {
          if (
            // horizontal 1st row
            cellsClicked[i].getAttribute("id") === winningMoves[0] &&
            cellsClicked[i].getAttribute("id") === winningMoves[1] &&
            cellsClicked[i].getAttribute("id") === winningMoves[2]
          ) {
            gameOver.push(cellsClicked[i]);
          } else if (
            // horizontal 2nd row
            cellsClicked[i].getAttribute("id") === winningMoves[3] &&
            cellsClicked[i].getAttribute("id") === winningMoves[4] &&
            cellsClicked[i].getAttribute("id") === winningMoves[5]
          ) {
            gameOver.push(cellsClicked[i]);
          } else if (
            // horizontal 3rd row
            cellsClicked[i].getAttribute("id") === winningMoves[6] &&
            cellsClicked[i].getAttribute("id") === winningMoves[7] &&
            cellsClicked[i].getAttribute("id") === winningMoves[8]
          ) {
            gameOver.push(cellsClicked[i]);
          } else if (
            // vertical 1st row
            cellsClicked[i].getAttribute("id") === winningMoves[0] &&
            cellsClicked[i].getAttribute("id") === winningMoves[4] &&
            cellsClicked[i].getAttribute("id") === winningMoves[6]
          ) {
            gameOver.push(cellsClicked[i]);
          } else if (
            // vertical 2nd row
            cellsClicked[i].getAttribute("id") === winningMoves[1] &&
            cellsClicked[i].getAttribute("id") === winningMoves[4] &&
            cellsClicked[i].getAttribute("id") === winningMoves[7]
          ) {
            gameOver.push(cellsClicked[i]);
          } else if (
            // vertical 3rd row
            cellsClicked[i].getAttribute("id") === winningMoves[2] &&
            cellsClicked[i].getAttribute("id") === winningMoves[5] &&
            cellsClicked[i].getAttribute("id") === winningMoves[8]
          ) {
            gameOver.push(cellsClicked[i]);
          } else if (
            // cells 1-5-9
            cellsClicked[i].getAttribute("id") === winningMoves[0] &&
            cellsClicked[i].getAttribute("id") === winningMoves[4] &&
            cellsClicked[i].getAttribute("id") === winningMoves[8]
          ) {
            gameOver.push(cellsClicked[i]);
          } else if (
            // cells 3-5-7
            cellsClicked[i].getAttribute("id") === winningMoves[2] &&
            cellsClicked[i].getAttribute("id") === winningMoves[4] &&
            cellsClicked[i].getAttribute("id") === winningMoves[6]
          ) {
            gameOver.push(cellsClicked[i]);
          }
          {
          }
        }
        // const clickedCell = cellsClicked.filter((cellClicked) => {
        //   return (
        //     // horizontal 1st row
        //     ((cellClicked.getAttribute("id") === winningMoves[0] &&
        //       cellClicked.getAttribute("id") === winningMoves[1] &&
        //       cellClicked.getAttribute("id") === winningMoves[2]) ||
        //       // horizontal 2nd row
        //       cellClicked.getAttribute("id") === winningMoves[3]) &&
        //     cellClicked.getAttribute("id") === winningMoves[4] &&
        //     (cellClicked.getAttribute("id") === winningMoves[5] ||
        //       // horizontal 3rd row
        //       cellClicked.getAttribute("id") === winningMoves[6]) &&
        //     cellClicked.getAttribute("id") === winningMoves[7] &&
        //     (cellClicked.getAttribute("id") === winningMoves[8] ||
        //       // vertical 1st row
        //       cellClicked.getAttribute("id") === winningMoves[0]) &&
        //     cellClicked.getAttribute("id") === winningMoves[4] &&
        //     (cellClicked.getAttribute("id") === winningMoves[6] ||
        //       // vertical 2nd row
        //       cellClicked.getAttribute("id") === winningMoves[1]) &&
        //     cellClicked.getAttribute("id") === winningMoves[5] &&
        //     (cellClicked.getAttribute("id") === winningMoves[7] ||
        //       // vertical 3rd row
        //       cellClicked.getAttribute("id") === winningMoves[2]) &&
        //     cellClicked.getAttribute("id") === winningMoves[5] &&
        //     (cellClicked.getAttribute("id") === winningMoves[8] ||
        //       // cells 1-5-9
        //       cellClicked.getAttribute("id") === winningMoves[0]) &&
        //     cellClicked.getAttribute("id") === winningMoves[4] &&
        //     (cellClicked.getAttribute("id") === winningMoves[8] ||
        //       // cells 3-5-7
        //       cellClicked.getAttribute("id") === winningMoves[2]) &&
        //     cellClicked.getAttribute("id") === winningMoves[4] &&
        //     cellClicked.getAttribute("id") === winningMoves[6]
        //   );
        // });
        console.log(gameOver);
      } else {
        let currentPlayer = document.createElement("p");
        currentPlayer.classList.add("player-2");
        currentPlayer.innerHTML = "O";
        cell.append(currentPlayer);
        playerTitle.innerHTML = "Player: 1";
        ticTacToeBoard.classList.toggle("player-turn");
      }
    };

    cell.addEventListener("click", playerEventListener, { once: true });
  });
};
const stopWatch = () => {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
    }
  }
  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }
  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }
  gameClock.innerHTML = `${displayMinutes}:${displaySeconds}`;
};

const startStop = () => {
  if (stopWatchStatus === "stopped") {
    interval = setInterval(stopWatch, 1000);
    stopWatchStatus = "started";
    startPauseBtn.textContent = "Pause";
  } else {
    clearInterval(interval);
    stopWatchStatus = "stopped";
    startPauseBtn.textContent = "Start Game";
  }
};

const startGame = () => {
  startPauseBtn.addEventListener("click", () => {
    if (startPauseBtn.textContent === "Start Game") {
      startPauseBtn.textContent = "Pause";
      startStop();
    } else if ((startPauseBtn.textContent = "Pause")) {
      startPauseBtn.textContent = "Start Game";
      startStop();
    }
  });
};

startGame();
playerMove();

// if (
//   (cellsClicked[0] === winningMoves[0] &&
//     cellsClicked[1] === winningMoves[1] &&
//     cellsClicked[2] === winningMoves[2]) ||
//   (cellsClicked[0] === winningMoves[3] &&
//     cellsClicked[1] === winningMoves[4] &&
//     cellsClicked[2] === winningMoves[5]) ||
//   (cellsClicked[0] === winningMoves[6] &&
//     cellsClicked[1] === winningMoves[7] &&
//     cellsClicked[2] === winningMoves[8])
// ) {
//   console.log("game over");
// } else {
//   console.log(false);
//   console.log(cellsClicked, winningMoves);
// }
