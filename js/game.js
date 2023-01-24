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
    this.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.selectNumber = null;
  }

  genGame(board) {
    for (let i = 0; i < this.boardSize; i++) {
      const square = document.createElement("div");
      square.classList.add("square");

      board.appendChild(square);
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

    for (let i = 72; i <= 80; i++) {
      board.children[i].classList.add("bottom");
    }
  }

  genNumberMenu(menu) {
    for (let i = 0; i < this.numbers.length; i++) {
      const square = document.createElement("div");
      square.classList.add("square-menu");

      menu.appendChild(square);
    }
  }

  getNumbers(menu) {
    for (let i = 0; i < menu.children.length; i++) {
      menu.children[i].innerText = `${this.numbers[i]}`;
    }
  }

  selectNumbers(menu, board) {
    for (let i = 0; i < menu.children.length; i++) {
      menu.children[i].addEventListener("click", () => {
        this.selectNumber = menu.children[i].innerText;
        menu.children[i].classList.add("number-clicked");
        for (let j = 0; j < menu.children.length; j++) {
          if (menu.children[j].innerText !== menu.children[i].innerText) {
            menu.children[j].classList.remove("number-clicked");
          }
        }
        for (let h = 0; h < board.children.length; h++) {
          board.children[h].classList.remove("wrong-value");
        }
      });
      menu.children[i].addEventListener("mouseover", () => {
        menu.children[i].classList.add("number-over");
      });

      menu.children[i].addEventListener("mouseout", () => {
        menu.children[i].classList.remove("number-over");
      });
    }
  }

  boardInteraction(board) {
    for (let i = 0; i < board.children.length; i++) {
      board.children[i].addEventListener("click", () => {
        board.children[i].classList.add("board-clicked");
        for (let j = 0; j < board.children.length; j++) {
          if (board.children[j] !== board.children[i]) {
            board.children[j].classList.remove("board-clicked");
          }
        }
      });
      board.children[i].addEventListener("mouseover", () => {
        board.children[i].classList.add("board-over");
      });
      board.children[i].addEventListener("mouseout", () => {
        board.children[i].classList.remove("board-over");
      });
    }
  }

  testValue(board) {
    for (let i = 0; i < board.children.length; i++) {
      board.children[i].addEventListener("click", () => {
        if (
          this.selectNumber === board.children[i].innerHTML &&
          board.children[i].classList[1] === "hidden" &&
          this.selectNumber !== null
        ) {
          board.children[i].classList.remove("hidden");
          board.children[i].classList.add("right-value");
        } else if (
          this.selectNumber !== board.children[i].innerHTML &&
          board.children[i].classList[1] === "hidden" &&
          this.selectNumber !== null
        ) {
          board.children[i].classList.add("wrong-value");
          //adicionar contador de erros aqui
        }
      });
    }
  }
}
