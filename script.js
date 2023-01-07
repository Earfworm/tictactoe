"use strict";

const gameClock = document.querySelector(".clock");
const playerTitle = document.querySelector(".player-title");
const ticTacToeBoard = document.querySelector(".tic-tac-toe-container");
const cells = document.querySelectorAll(".cell");
const startPauseBtn = document.querySelector("start-btn");
const resetBtn = document.querySelector(".resetBtn");

let currentPlayer = "X";
ticTacToeBoard.classList.add("player-turn");
//functions

const playerMove = () => {
  cells.forEach((cell) => {
    if (ticTacToeBoard.classList.contains("player-turn")) {
      cell.addEventListener("click", () => {
        cell.append(currentPlayer);
        playerTitle.innerHTML = "Player: 2";
        currentPlayer = "O";
        ticTacToeBoard.classList.toggle("player-turn");
      });
    } else if (ticTacToeBoard.classList.contains("player-turn") === false) {
      cell.addEventListener("click", () => {
        cell.append(currentPlayer);
        playerTitle.innerHTML = "Player: 1";
        currentPlayer = "X";
        ticTacToeBoard.classList.toggle("player-turn");
      });
    }
  });
};

playerMove();

// const playerMove = () => {
//   cells.forEach((cell) => {
//     if (<gamebored.classlist.contains("blah")) {
//       cell.addEventListener("click", () => {
//         cell.append(currentPlayer);
//         playerTitle.innerHTML = "Player: 2";
//         currentPlayer = "O";
//         gamebored.classlist.toggle("blah")
//       });
//     } else if (gamebored.classlist.contains("blah") === false) {
//       cell.addEventListener("click", () => {
//         cell.append(currentPlayer);
//         playerTitle.innerHTML = "Player: 1";
//         currentPlayer = "X";
//         gamebored.classlist.toggle("blah")
//       });
//     }
//   });
// };
// playerMove();
