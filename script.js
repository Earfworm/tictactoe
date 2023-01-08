"use strict";

const gameClock = document.querySelector(".clock");
const playerTitle = document.querySelector(".player-title");
const ticTacToeBoard = document.querySelector(".tic-tac-toe-container");
const cells = document.querySelectorAll(".cell");
const startPauseBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".resetBtn");
let count = 0;
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
        count++;
        if (
          (count >= 3 &&
            cells[0].getAttribute("id") === "box-1" &&
            cells[1].getAttribute("id") === "box-2" &&
            cells[2].getAttribute("id") === "box-3") ||
          (count >= 3 &&
            cells[3].getAttribute("id") === "box-4" &&
            cells[4].getAttribute("id") === "box-5" &&
            cells[5].getAttribute("id") === "box-6") ||
          (count >= 3 &&
            cells[6].getAttribute("id") === "box-7" &&
            cells[7].getAttribute("id") === "box-8" &&
            cells[8].getAttribute("id") === "box-9") ||
          (count >= 3 &&
            cells[0].getAttribute("id") === "box-1" &&
            cells[3].getAttribute("id") === "box-4" &&
            cells[6].getAttribute("id") === "box-7") ||
          (count >= 3 &&
            cells[1].getAttribute("id") === "box-2" &&
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

playerMove();
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
