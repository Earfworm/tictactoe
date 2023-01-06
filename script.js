"use strict";

const gameClock = document.querySelector(".clock");
const playerTitle = document.querySelector(".player-title");
const ticTacToeBoard = document.querySelector(".tic-tac-toe-container");
const cells = document.querySelectorAll(".cell");
const startPauseBtn = document.querySelector("start-btn");
const resetBtn = document.querySelector(".resetBtn");

const playerOne = "X";
const playerTwo = "O";
//functions

const playerMove = () => {
  if (playerTitle.innerHTML === "Player: 1") {
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        cell.append(playerOne);
      });
    });
  } else if (playerTitle.innerHTML === "Player: 2") {
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        cell.append(playerTwo);
      });
    });
  }
};

const playerTurn = () => {
  playerMove();
};

playerTurn();
