"use strict";

const gameClock = document.querySelector(".clock");
const playerTitle = document.querySelector(".player-title");
const ticTacToeBoard = document.querySelector(".tic-tac-toe-container");
const cells = document.querySelectorAll(".cell");
const startPauseBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");
let playerXClicked = [];
let playerOClicked = [];
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
    startPauseBtn.textContent = "Start";
  }
};

const playerClicked = (playerClickInput, playerTitleInput) => {
  if (
    //     // horizontal 1st row
    (playerClickInput.includes("box-1") &&
      playerClickInput.includes("box-2") &&
      playerClickInput.includes("box-3")) ||
    //       // horizontal 2nd row
    (playerClickInput.includes("box-4") &&
      playerClickInput.includes("box-5") &&
      playerClickInput.includes("box-6")) ||
    //       // horizontal 3rd row
    (playerClickInput.includes("box-7") &&
      playerClickInput.includes("box-8") &&
      playerClickInput.includes("box-9")) ||
    //       // vertical 1st row
    (playerClickInput.includes("box-1") &&
      playerClickInput.includes("box-4") &&
      playerClickInput.includes("box-7")) ||
    //       // vertical 2nd row
    (playerClickInput.includes("box-2") &&
      playerClickInput.includes("box-5") &&
      playerClickInput.includes("box-8")) ||
    //       // vertical 3rd row
    (playerClickInput.includes("box-3") &&
      playerClickInput.includes("box-6") &&
      playerClickInput.includes("box-9")) ||
    //       // cells 1-5-9
    (playerClickInput.includes("box-1") &&
      playerClickInput.includes("box-5") &&
      playerClickInput.includes("box-9")) ||
    //       // cells 3-5-7
    (playerClickInput.includes("box-3") &&
      playerClickInput.includes("box-5") &&
      playerClickInput.includes("box-7"))
  ) {
    console.log("game over");
    playerTitle.textContent = `Player ${playerTitleInput} Wins`;
    startStop();
  }
  // else if () {
  //   console.log("game over");
  //   playerTitle.textContent = `Game Tied`;
  //   startStop();
  // }
};
const playerMove = () => {
  cells.forEach((cell) => {
    const playerEventListener = () => {
      if (
        ticTacToeBoard.classList.contains("player-turn") &&
        startPauseBtn.textContent === "Pause"
      ) {
        let currentPlayer = document.createElement("p");
        currentPlayer.classList.add("player-1");
        currentPlayer.innerHTML = "X";
        cell.append(currentPlayer);
        playerTitle.innerHTML = "Player 2";
        ticTacToeBoard.classList.toggle("player-turn");
        playerXClicked.push(cell.getAttribute("id"));
        console.log(playerXClicked);
        playerClicked(playerXClicked, 1);
        if (cell.lastChild === currentPlayer) {
          cell.removeEventListener("click", playerEventListener);
        }
      } else if (
        !ticTacToeBoard.classList.contains("player-turn") &&
        startPauseBtn.textContent === "Pause"
      ) {
        let currentPlayer = document.createElement("p");
        currentPlayer.classList.add("player-2");
        currentPlayer.innerHTML = "O";
        cell.append(currentPlayer);
        playerTitle.innerHTML = "Player 1";
        ticTacToeBoard.classList.toggle("player-turn");
        playerOClicked.push(cell.getAttribute("id"));
        console.log(playerOClicked);
        playerClicked(playerOClicked, 2);
        if (cell.lastChild === currentPlayer) {
          cell.removeEventListener("click", playerEventListener);
        }
      }
    };
    cell.addEventListener("click", playerEventListener);
  });
};

const startGame = () => {
  startPauseBtn.addEventListener("click", (e) => {
    console.log(startPauseBtn);
    if (e.target || e.target.textContent === "Start") {
      console.log(e.target.textContent);
      startPauseBtn.textContent = "Pause";
      startStop();
    } else if (e.target.textContent === "Pause") {
      startPauseBtn.textContent = "Start";
    }
  });
};
const resetGame = () => {
  resetBtn.addEventListener("click", () => {
    startPauseBtn.textContent = "Start Game";
    gameClock.textContent = "0:00";
    clearInterval(interval);
    seconds = 0;
    minutes = 0;

    stopWatchStatus = "stopped";
    playerTitle.textContent = "Player 1";
    cells.forEach((cell) => {
      if (cell.lastElementChild) {
        console.log(cell, cell.lastElementChild);
        cell.removeChild(cell.lastElementChild);
      }
    });
  });
};
startGame();
playerMove();
resetGame();
