"use strict";

const gameClock = document.querySelector(".clock");
const playerTitle = document.querySelector(".player-title");
const ticTacToeBoard = document.querySelector(".tic-tac-toe-container");
const cells = document.querySelectorAll(".cell");
const startPauseBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".resetBtn");
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
        if (
          (cells[0].classList.contains("player-1") &&
            cells[0].getAttribute("id") === "box-1" &&
            cells[1].classList.contains("player-1") &&
            cells[1].getAttribute("id") === "box-2" &&
            cells[2].getAttribute("id") === "box-3") ||
          (cells[3].getAttribute("id") === "box-4" &&
            cells[4].getAttribute("id") === "box-5" &&
            cells[5].getAttribute("id") === "box-6") ||
          (cells[6].getAttribute("id") === "box-7" &&
            cells[7].getAttribute("id") === "box-8" &&
            cells[8].getAttribute("id") === "box-9") ||
          (cells[0].getAttribute("id") === "box-1" &&
            cells[3].getAttribute("id") === "box-4" &&
            cells[6].getAttribute("id") === "box-7") ||
          (cells[1].getAttribute("id") === "box-2" &&
            cells[4].getAttribute("id") === "box-5" &&
            cells[7].getAttribute("id") === "box-8")
        ) {
          console.log(true);
        }
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

const startGame = () => {
  startPauseBtn.addEventListener("click", () => {
    if (startPauseBtn.textContent === "Start Game") {
      startPauseBtn.textContent = "Pause";
    } else {
      startPauseBtn.textContent = "Start Game";
    }
  });
};

startGame();

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
  } else {
    clearInterval(interval);
    stopWatchStatus = "stopped";
  }
};
startStop();
