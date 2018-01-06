const playGame = () => {
  // initialise board
  // get user input and take a turn
  // if no one has won, do a user input again
};

const generateBoard = () => {
  // generates a new empty board
  return [[null, null, null], [null, null, null], [null, null, null]];
};

const takePlayerTurn = () => {
  // takes a board and co-ordinates of new turn taken
  // check that turn is valid
  // return new board that has the new tile added
};

module.exports = {
  generateBoard,
  takePlayerTurn,
  playGame
};
