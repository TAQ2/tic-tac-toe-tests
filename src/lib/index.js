// @Cleanup - rename this file

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

const takePlayerTurn = (board, playerToken, rowIndex, columnIndex) => {
  // deep copy of multidimentional array
  const newBoard = JSON.parse(JSON.stringify(board));

  newBoard[rowIndex][columnIndex] = playerToken;

  return newBoard;
};

module.exports = {
  generateBoard,
  canPlayerTakeTurn,
  takePlayerTurn,
  playGame
};
