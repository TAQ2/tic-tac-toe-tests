const playGame = () => {
  // initialise board
  // get user input and take a turn
  // if no one has won, do a user input again
};

const generateBoard = () => {
  return [[null, null, null], [null, null, null], [null, null, null]];
};

const canPlayerTakeTurn = (board, rowIndex, columnIndex) => {
  return board[rowIndex][columnIndex] == null;
};

const takePlayerTurn = (board, playerTile, rowIndex, columnIndex) => {
  board[rowIndex][columnIndex] = playerTile;

  return board;
};

module.exports = {
  generateBoard,
  canPlayerTakeTurn,
  takePlayerTurn,
  playGame
};
