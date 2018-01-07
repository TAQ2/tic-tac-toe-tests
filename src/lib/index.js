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

// @Incomplete - test this
const calculatePlayerTurn = token => {
  if (token !== "X" && token !== "O") {
    throw new Error(
      `calculatePlayerTurn was called with invalid value: ${token}`
    );
  }

  if (token === "X") {
    return "O";
  } else {
    return "X";
  }
};

module.exports = {
  generateBoard,
  canPlayerTakeTurn,
  takePlayerTurn,
  playGame,
  calculatePlayerTurn
};
