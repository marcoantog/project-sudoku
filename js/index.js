const btn = document.getElementById("btn-start");
const fullContent = document.getElementById("full-content");
const gameBoard = document.getElementById("game-board");

btn.addEventListener("click", () => {
  fullContent.classList.add("hide");

  const game = new Game();

  game.genGame(gameBoard);
  game.includeNumbers(gameBoard);
  game.randomDiv(gameBoard);

  game.styleBoard(gameBoard);
});
