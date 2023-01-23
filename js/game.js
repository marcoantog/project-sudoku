class Game {
  constructor() {
    this.boardSize = 81;
    this.sudoku = {
      1: [
        5, 3, 4, 6, 7, 8, 9, 1, 2, 6, 7, 2, 1, 9, 5, 3, 4, 8, 1, 9, 8, 3, 4, 2,
        5, 6, 7, 8, 5, 9, 7, 6, 1, 4, 2, 3, 4, 2, 6, 8, 5, 3, 7, 9, 1, 7, 1, 3,
        9, 2, 4, 8, 5, 6, 9, 6, 1, 5, 3, 7, 2, 8, 4, 2, 8, 7, 4, 1, 9, 6, 3, 5,
        3, 4, 5, 2, 8, 6, 1, 7, 9,
      ],
      2: [
        9, 4, 5, 2, 7, 1, 8, 3, 6, 8, 1, 6, 3, 9, 5, 4, 2, 7, 7, 3, 2, 6, 8, 4,
        5, 1, 9, 2, 5, 8, 4, 6, 7, 3, 9, 1, 6, 9, 4, 1, 3, 8, 7, 5, 2, 3, 7, 1,
        5, 2, 9, 6, 4, 8, 4, 6, 7, 9, 5, 2, 1, 8, 3, 1, 2, 3, 8, 4, 6, 9, 7, 5,
        5, 8, 9, 7, 1, 3, 2, 6, 4,
      ],
      3: [
        4, 9, 7, 1, 3, 8, 6, 5, 2, 2, 6, 3, 9, 5, 4, 8, 7, 1, 8, 5, 1, 7, 2, 6,
        3, 9, 4, 3, 1, 9, 4, 6, 7, 5, 2, 8, 7, 2, 6, 8, 1, 5, 9, 4, 3, 5, 8, 4,
        2, 9, 3, 7, 1, 6, 1, 3, 5, 6, 7, 2, 4, 8, 9, 9, 7, 8, 3, 4, 1, 2, 6, 5,
        6, 4, 2, 5, 8, 9, 1, 3, 7,
      ],
    };
  }

  genGame(gameBoard) {
    for (let i = 0; i < this.boardSize; i++) {
      const square = document.createElement("div");
      square.classList.add("square");

      gameBoard.appendChild(square);
    }
  }

  includeNumbers(board) {
    let randomSudoku = this.sudoku[Math.floor(Math.random() * 3) + 1];
    for (let i = 0; i < board.children.length; i++) {
      board.children[i].innerText = `${randomSudoku[i]}`;
    }
  }

  randomDiv(board) {
    for (let i = 0; i < 46; i++) {
      board.children[Math.floor(Math.random() * 35 + i)].classList.add(
        "hidden"
      );
    }
  }

  styleBoard(board) {
    for (let i = 2; i <= 74; i += 9) {
      board.children[i].classList.add("right");
    }

    for (let i = 5; i <= 77; i += 9) {
      board.children[i].classList.add("right");
    }

    for (let i = 8; i <= 80; i += 9) {
      board.children[i].classList.add("right");
    }

    for (let i = 0; i <= 72; i += 9) {
      board.children[i].classList.add("left");
    }

    for (let i = 0; i <= 8; i++) {
      board.children[i].classList.add("top");
    }

    for (let i = 27; i <= 35; i++) {
      board.children[i].classList.add("top");
    }

    for (let i = 54; i <= 62; i++) {
      board.children[i].classList.add("top");
    }

    for (let i = 72; i <= 81; i++) {
      board.children[i].classList.add("bottom");
    }
  }
}
