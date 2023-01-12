"use strict";

const gameClock = document.querySelector(".clock");
const playerTitle = document.querySelector(".player-title");
const ticTacToeBoard = document.querySelector(".tic-tac-toe-container");
const cells = document.querySelectorAll(".cell");
const startPauseBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".resetBtn");
const playerXClicked = [];
const playerOClicked = [];
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

const playerClicked = (playerClickInput) => {
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
  }
};
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
        playerXClicked.push(cell.getAttribute("id"));
        console.log(playerXClicked);
        playerClicked(playerXClicked);
      } else {
        let currentPlayer = document.createElement("p");
        currentPlayer.classList.add("player-2");
        currentPlayer.innerHTML = "O";
        cell.append(currentPlayer);
        playerTitle.innerHTML = "Player: 1";
        ticTacToeBoard.classList.toggle("player-turn");
        playerOClicked.push(cell.getAttribute("id"));
        console.log(playerOClicked);
        playerClicked(playerOClicked);
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

// for (let i = 0; i < playerOClicked.length; i++) {
//   console.log(playerOClicked[0].getAttribute("id"));
//   console.log(playerOClicked[i].getAttribute("id") === winningMoves[0]);
//   if (
//     // horizontal 1st row
//     playerOClicked[i].getAttribute("id") === winningMoves[0] &&
//     playerOClicked[i].getAttribute("id") === winningMoves[0] &&
//     playerOClicked[i].getAttribute("id") === winningMoves[0]
//   ) {
//     gameOver += gameOver.push(playerOClicked[i].getAttribute("id"));
//     console.log(gameOver);
//   } else if (
//     // horizontal 2nd row
//     playerOClicked[i].getAttribute("id") === winningMoves[3] &&
//     playerOClicked[i].getAttribute("id") === winningMoves[4] &&
//     playerOClicked[i].getAttribute("id") === winningMoves[5]
//   ) {
//     gameOver.push(playerOClicked[i].getAttribute("id"));
//   } else if (
//     // horizontal 3rd row
//     playerOClicked[i].getAttribute("id") === winningMoves[6] &&
//     playerOClicked[i].getAttribute("id") === winningMoves[7] &&
//     playerOClicked[i].getAttribute("id") === winningMoves[8]
//   ) {
//     gameOver.push(playerOClicked[i]);
//   } else if (
//     // vertical 1st row
//     playerOClicked[i].getAttribute("id") === winningMoves[0] &&
//     playerOClicked[i].getAttribute("id") === winningMoves[4] &&
//     playerOClicked[i].getAttribute("id") === winningMoves[6]
//   ) {
//     gameOver.push(playerOClicked[i]);
//   } else if (
//     // vertical 2nd row
//     playerOClicked[i].getAttribute("id") === winningMoves[1] &&
//     playerOClicked[i].getAttribute("id") === winningMoves[4] &&
//     playerOClicked[i].getAttribute("id") === winningMoves[7]
//   ) {
//     gameOver.push(playerOClicked[i]);
//   } else if (
//     // vertical 3rd row
//     playerOClicked[i].getAttribute("id") === winningMoves[2] &&
//     playerOClicked[i].getAttribute("id") === winningMoves[5] &&
//     playerOClicked[i].getAttribute("id") === winningMoves[8]
//   ) {
//     gameOver.push(playerOClicked[i]);
//   } else if (
//     // cells 1-5-9
//     playerOClicked[i].getAttribute("id") === winningMoves[0] &&
//     playerOClicked[i].getAttribute("id") === winningMoves[4] &&
//     playerOClicked[i].getAttribute("id") === winningMoves[8]
//   ) {
//     gameOver.push(playerOClicked[i]);
//   } else if (
//     // cells 3-5-7
//     playerOClicked[i].getAttribute("id") === winningMoves[2] &&
//     playerOClicked[i].getAttribute("id") === winningMoves[4] &&
//     playerOClicked[i].getAttribute("id") === winningMoves[6]
//   ) {
//     gameOver.push(playerOClicked[i]);
//   }
//   {
//   }
// }

// // const clickedCell = playerOClicked.filter((cellClicked) => {
// //   return (
// //     // horizontal 1st row
// (playerOClicked.includes("box-1") &&
// playerOClicked.includes("box-2") &&
// playerOClicked.includes("box-3")) ||
// //       // horizontal 2nd row
// (playerOClicked.includes("box-4") &&
// playerOClicked.includes("box-5") &&
// playerOClicked.includes("box-6")) ||
// //       // horizontal 3rd row
// (playerOClicked.includes("box-7") &&
//             playerOClicked.includes("box-8") &&
//             playerOClicked.includes("box-9")) ||
// //       // vertical 1st row
// (playerOClicked.includes("box-1") &&
//             playerOClicked.includes("box-4") &&
//             playerOClicked.includes("box-7")) ||
// //       // vertical 2nd row
// (playerOClicked.includes("box-2") &&
//             playerOClicked.includes("box-5") &&
//             playerOClicked.includes("box-8")) ||
// //       // vertical 3rd row
// (playerOClicked.includes("box-3") &&
//             playerOClicked.includes("box-6") &&
//             playerOClicked.includes("box-9")) ||
// //       // cells 1-5-9
// (playerOClicked.includes("box-1") &&
//             playerOClicked.includes("box-5") &&
//             playerOClicked.includes("box-9")) ||
// //       // cells 3-5-7
// (playerOClicked.includes("box-3") &&
//             playerOClicked.includes("box-5") &&
//             playerOClicked.includes("box-7")) ||
//   );
// // });
