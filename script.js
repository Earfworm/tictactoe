"use strict";

const gameClock = document.querySelector(".clock");
const playerTitle = document.querySelector(".player-title");
const ticTacToeBoard = document.querySelector(".tic-tac-toe-container");
const cells = document.querySelectorAll(".cell");
const startPauseBtn = document.querySelector("start-btn");
const resetBtn = document.querySelector(".resetBtn");

let currentPlayer = document.createElement("p");
currentPlayer.classList.add("current-player");
currentPlayer.innerHTML = "X";
ticTacToeBoard.classList.add("player-turn");
//functions

const playerMove = () => {
  cells.forEach((cell) => {
    const playerEventListener = () => {
      if (ticTacToeBoard.classList.contains("player-turn")) {
        let currentPlayer = document.createElement("p");
        currentPlayer.classList.add("current-player");
        currentPlayer.innerHTML = "X";
        cell.append(currentPlayer);
        playerTitle.innerHTML = "Player: 2";

        cell.classList.add("player-one-move");
        ticTacToeBoard.classList.toggle("player-turn");
      } else {
        let currentPlayer = document.createElement("p");
        currentPlayer.classList.add("current-player");
        currentPlayer.innerHTML = "O";
        cell.append(currentPlayer);
        playerTitle.innerHTML = "Player: 1";

        cell.classList.add("player-two-move");
        ticTacToeBoard.classList.toggle("player-turn");
      }
    };

    cell.addEventListener("click", playerEventListener, { once: true });
  });
};

playerMove();
