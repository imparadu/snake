const boardDivSelector = document.getElementById("board");

function createBoardView() {
  let a = 0;
  for (let row of BOARD) {
    let b = 0;

    for (let cell of row) {
      let cellElement = document.createElement("div");
      if (cell === null) {
        cellElement.classList.add("cell");
      }
      boardDivSelector.appendChild(cellElement);
      b += 1;
    }
    a += 1;
  }
}
createBoardView();

const indexOfFood = generateRandomInRange(FOOD_GOOD.length);

function updateBoardView() {
  let i = 0;
  const elCells = boardDivSelector.children;
  // console.log(elCells);
  for (let row of BOARD) {
    for (let cell of row) {
      const elCell = elCells[i];
      // Remove all classes
      while (elCell.classList.length > 0) {
        elCell.classList.remove(elCell.classList.item(0));
      }
      if (cell === null) {
        elCell.classList.add("cell");
      } else if (cell === SNAKE_ID) {
        elCell.classList.add("snake");
      } else {
        elCell.classList.add("food");
        elCell.innerHTML = FOOD_GOOD[indexOfFood];
      }
      i += 1;
    }
  }
}
// updateBoardView();
// setInterval(
//   updateBoardView, 100
// )
