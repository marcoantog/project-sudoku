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
      4: [
        2, 5, 6, 8, 3, 7, 1, 4, 9, 7, 1, 9, 4, 2, 5, 8, 3, 6, 8, 4, 3, 6, 1, 9,
        2, 5, 7, 4, 6, 7, 1, 5, 8, 9, 2, 3, 3, 9, 2, 7, 6, 4, 5, 1, 8, 5, 8, 1,
        3, 9, 2, 6, 7, 4, 1, 7, 8, 2, 4, 6, 3, 9, 5, 6, 3, 5, 9, 7, 1, 4, 8, 2,
        9, 2, 4, 5, 8, 3, 7, 6, 1,
      ],
      5: [
        1, 7, 9, 4, 3, 2, 5, 6, 8, 6, 5, 3, 8, 9, 7, 1, 2, 4, 8, 2, 4, 5, 1, 6,
        9, 3, 7, 9, 1, 5, 6, 8, 3, 7, 4, 2, 2, 4, 6, 1, 7, 5, 8, 9, 3, 3, 8, 7,
        2, 4, 9, 6, 1, 5, 5, 6, 1, 7, 2, 4, 3, 8, 9, 4, 9, 8, 3, 5, 1, 2, 7, 6,
        7, 3, 2, 9, 6, 8, 4, 5, 1,
      ],
      6: [
        8, 2, 7, 1, 5, 4, 3, 9, 6, 9, 6, 5, 3, 2, 7, 1, 4, 8, 3, 4, 1, 6, 8, 9,
        7, 5, 2, 5, 9, 3, 4, 6, 8, 2, 7, 1, 4, 7, 2, 5, 1, 3, 6, 8, 9, 6, 1, 8,
        9, 7, 2, 4, 3, 5, 7, 8, 6, 2, 3, 5, 9, 1, 4, 1, 5, 4, 7, 9, 6, 8, 2, 3,
        2, 3, 9, 8, 4, 1, 5, 6, 7,
      ],
      7: [
        7, 4, 2, 5, 8, 9, 6, 1, 3, 9, 8, 6, 3, 2, 1, 7, 4, 5, 1, 5, 3, 6, 4, 7,
        8, 9, 2, 8, 9, 1, 2, 3, 4, 5, 6, 7, 4, 6, 7, 1, 5, 8, 2, 3, 9, 2, 3, 5,
        9, 7, 6, 4, 8, 1, 3, 7, 8, 4, 1, 5, 9, 2, 6, 5, 2, 9, 8, 6, 3, 1, 7, 4,
        6, 1, 4, 7, 9, 2, 3, 5, 8,
      ],
      8: [
        4, 5, 3, 8, 2, 6, 1, 9, 7, 8, 9, 2, 5, 7, 1, 6, 3, 4, 1, 6, 7, 4, 9, 3,
        5, 2, 8, 7, 1, 4, 9, 5, 2, 8, 6, 3, 5, 8, 6, 1, 3, 7, 2, 4, 9, 3, 2, 9,
        6, 8, 4, 7, 5, 1, 9, 3, 5, 2, 1, 8, 4, 7, 6, 6, 7, 1, 3, 4, 5, 9, 8, 2,
        2, 4, 8, 7, 6, 9, 3, 1, 5,
      ],
    };
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.selectNumber = null;
    this.hiddenElements = [];
    this.counter = 3;
    this.value = null;
  }

  genGame(board) {
    for (let i = 0; i < this.boardSize; i++) {
      const square = document.createElement("div");
      square.classList.add("square");

      board.appendChild(square);
    }
  }

  includeNumbers(board) {
    let randomSudoku = this.sudoku[Math.floor(Math.random() * 8) + 1];
    for (let i = 0; i < board.children.length; i++) {
      board.children[i].innerText = `${randomSudoku[i]}`;
    }
  }

  randomDiv(board, value) {
    if (value === "Easy") {
      for (let i = 0; i < 23; i++) {
        let randomNum = Math.floor(Math.random() * 58 + i);
        if (!this.hiddenElements.includes(randomNum)) {
          board.children[randomNum].classList.add("hidden");
          this.hiddenElements.push(randomNum);
        }
      }
    } else if (value === "Normal") {
      for (let i = 0; i < 46; i++) {
        let randomNum = Math.floor(Math.random() * 35 + i);
        if (!this.hiddenElements.includes(randomNum)) {
          board.children[randomNum].classList.add("hidden");
          this.hiddenElements.push(randomNum);
        }
      }
    } else if (value === "Hard") {
      for (let i = 0; i < 70; i++) {
        let randomNum = Math.floor(Math.random() * 11 + i);
        if (!this.hiddenElements.includes(randomNum)) {
          board.children[randomNum].classList.add("hidden");
          this.hiddenElements.push(randomNum);
        }
      }
    }
    return (this.value = value);
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

  testValue(board, text) {
    for (let i = 0; i < board.children.length; i++) {
      board.children[i].addEventListener("click", () => {
        if (
          this.selectNumber === board.children[i].innerHTML &&
          board.children[i].classList[1] === "hidden" &&
          this.selectNumber !== null
        ) {
          board.children[i].classList.remove("hidden");
          board.children[i].classList.add("right-value");
          this.hiddenElements.pop();
        } else if (
          this.selectNumber !== board.children[i].innerHTML &&
          board.children[i].classList[1] === "hidden" &&
          this.selectNumber !== null
        ) {
          board.children[i].classList.add("wrong-value");
          this.errorCounter(text);
        }
        this.winCheck();
      });
    }
  }

  errorCounter(text) {
    if (this.value === "Normal") {
      let counter = `Miss: ${this.counter - 3}`;
      text.innerText = counter;
      text.classList.add("counter");
      this.counter += 1;
      this.normalLife();
    }
    if (this.value === "Hard") {
      let counter = `Lifes: ${this.counter}`;
      text.innerText = counter;
      text.classList.add("lifes");
      this.counter -= 1;
      console.log(this.counter);
      this.hardLife();
    }
  }

  normalLife() {
    if (this.counter === 19) {
      setTimeout(() => {
        window.alert("I know you can do better!");
      }, 100);
    } else if (this.counter === 34) {
      setTimeout(() => {
        window.alert("Are we trying?! 🤔");
      }, 100);
    } else if (this.counter === 54) {
      window.alert("Let's try again! Shall we? 🥲");
      location.reload();
    }
  }

  hardLife() {
    if (this.counter === -1) {
      setTimeout(() => {
        window.alert("You lost! 😭");
        location.reload();
      }, 100);
    }
  }

  winCheck() {
    if (this.hiddenElements.length === 0) {
      setTimeout(() => {
        if (this.counter > 1) {
          window.alert("Congratulations! Keep improving");
        } else {
          window.alert("Well done! You are SMART 😎");
        }
      }, 400);
    }
  }
}
