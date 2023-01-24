const btn = document.getElementById("btn-start");
const fullContent = document.getElementById("full-content");
const gameBoard = document.getElementById("game-board");
const numbersMenu = document.getElementById("numbers-menu");
const errorDiv = document.getElementById("counter");

btn.addEventListener("click", () => {
  fullContent.classList.add("hide");

  const game = new Game();

  // gerando tabuleiro
  game.genGame(gameBoard);
  game.includeNumbers(gameBoard);
  // criando lugares em branco
  game.randomDiv(gameBoard);

  // estilizando
  game.styleBoard(gameBoard);

  // criando menu de numeros
  game.genNumberMenu(numbersMenu);
  game.getNumbers(numbersMenu);
  game.selectNumbers(numbersMenu, gameBoard);

  // interações tabuleiro
  game.boardInteraction(gameBoard);
  game.testValue(gameBoard, errorDiv);

  // contador de erros
  game.errorCounter(errorDiv);
});
