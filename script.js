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
        cellsClicked.push(cell.getAttribute("id"));
        if (
          (cellsClicked[0] === winningMoves[0] &&
            cellsClicked[1] === winningMoves[1] &&
            cellsClicked[2] === winningMoves[2]) ||
          (cellsClicked[0] === winningMoves[3] &&
            cellsClicked[1] === winningMoves[4] &&
            cellsClicked[2] === winningMoves[5]) ||
          (cellsClicked[0] === winningMoves[6] &&
            cellsClicked[1] === winningMoves[7] &&
            cellsClicked[2] === winningMoves[8])
        ) {
          console.log("game over");
        } else {
          console.log(false);
          console.log(cellsClicked, winningMoves);
        }
      } else {
        let currentPlayer = document.createElement("p");
        currentPlayer.classList.add("player-2");
        currentPlayer.innerHTML = "O";
        cell.append(currentPlayer);
        playerTitle.innerHTML = "Player: 1";
        ticTacToeBoard.classList.toggle("player-turn");
        if (
          (cell.contains(currentPlayer) &&
            cell.getAttribute("id") === "box-1" &&
            cell.getAttribute("id") === "box-2" &&
            cell.getAttribute("id") === "box-3") ||
          (cell.contains(currentPlayer) &&
            cell.getAttribute("id") === "box-4" &&
            cell.getAttribute("id") === "box-5" &&
            cell.getAttribute("id") === "box-6") ||
          (cell.contains(currentPlayer) &&
            cell.getAttribute("id") === "box-7" &&
            cell.getAttribute("id") === "box-8" &&
            cell.getAttribute("id") === "box-9") ||
          (cell.contains(currentPlayer) &&
            cell.getAttribute("id") === "box-1" &&
            cell.getAttribute("id") === "box-4" &&
            cell.getAttribute("id") === "box-7") ||
          (cell.contains(currentPlayer) &&
            cell.getAttribute("id") === "box-2" &&
            cell.getAttribute("id") === "box-5" &&
            cell.getAttribute("id") === "box-8") ||
          (cell.contains(currentPlayer) &&
            cell.getAttribute("id") === "box-3" &&
            cell.getAttribute("id") === "box-6" &&
            cell.getAttribute("id") === "box-9") ||
          (cell.contains(currentPlayer) &&
            cell.getAttribute("id") === "box-1" &&
            cell.getAttribute("id") === "box-5" &&
            cell.getAttribute("id") === "box-9") ||
          (cell.contains(currentPlayer) &&
            cell.getAttribute("id") === "box-3" &&
            cell.getAttribute("id") === "box-5" &&
            cell.getAttribute("id") === "box-7")
        ) {
          console.log("game over");
        }
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
