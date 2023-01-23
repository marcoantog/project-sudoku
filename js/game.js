class Game {
  constructor() {
    this.boardSize = 81;
    this.numbers = [];
  }

  genGame(gameBoard) {
    for (let i = 0; i < this.boardSize; i++) {
      const square = document.createElement("div");
      square.classList.add("square");

      gameBoard.appendChild(square);
    }
  }

  positionNumbers() {
    for (let i = 0; i < this.boardSize / 9; i++) {
      this.numbers.push(i + 1);
      this.numbers.push(i + 1);
      this.numbers.push(i + 1);
      this.numbers.push(i + 1);
      this.numbers.push(i + 1);
      this.numbers.push(i + 1);
      this.numbers.push(i + 1);
      this.numbers.push(i + 1);
      this.numbers.push(i + 1);
    }
    // this.randomizeNumbers(this.numbers);
    // console.log(this.numbers);
  }

  //   randomizeNumbers(arr) {
  //     let index = arr.length,
  //       randomIndex;

  //     while (index != 0) {
  //       randomIndex = Math.floor(Math.random() * index);
  //       index--;

  //       [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]];
  //     }
  //     return arr;
  //   }

  includeNumbers(board) {
    let numbers = [];
    for (let i = 0; i < board.children.length; i++) {
      let number = [Math.floor(Math.random() * this.numbers.length)];
      numbers.push(this.numbers[number]);

      board.children[i].innerHTML = `
        <span id="number">${this.numbers[number]}</span>
        `;

      const index = this.numbers.indexOf(this.numbers[number]);
      if (index > -1) {
        this.numbers.splice(index, 1);
      }
    }
    console.log(numbers);
  }
}
