export const generateBoard = () => {
  return [[null, null, null], [null, null, null], [null, null, null]];
};

// @Cleanup - rename this to indicate it is just to do with collisions
export const canPlayerTakeTurn = (board, rowIndex, columnIndex) => {
  return board[rowIndex][columnIndex] == null;
};

export const addTokenToBoard = (board, playerToken, rowIndex, columnIndex) => {
  // deep copy of multidimentional array
  const newBoard = JSON.parse(JSON.stringify(board));

  newBoard[rowIndex][columnIndex] = playerToken;

  return newBoard;
};

// @Incomplete - test this
export const calculatePlayerTurn = token => {
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

export const isDraw = board => {
  return board.every(row => row.every(tile => tile !== null));
};

// @Incomplete - test this
export const isWin = board => {
  return isVerticalWin(board) || isHorizontalWin(board) || isDiagonalWin(board);
};

export const isVerticalWin = board => {
  const columnCount = board[0].length;
  let isWin = false;

  for (let i = 0; i < columnCount; i++) {
    let column = [];
    board.forEach(row => {
      column.push(row[i]);
    });

    const isColumnWin = column.every(
      tile => tile != null && tile === column[0]
    );

    if (isColumnWin) {
      isWin = isColumnWin;
    }
  }

  return isWin;
};

export const isHorizontalWin = board => {
  let isWin = false;

  board.forEach(row => {
    let isRowWin = row.every(tile => tile != null && tile === row[0]);

    if (isRowWin) {
      isWin = isRowWin;
    }
  });

  return isWin;
};

// @Cleanup - is there a more progrommatic to calculate this so that it
// doesn't have to be a 3x3 grid
export const isDiagonalWin = board => {
  const diagonal1 = [board[0][0], board[1][1], board[2][2]];

  const isDiagonalWin1 = diagonal1.every(
    tile => tile != null && tile === diagonal1[0]
  );

  const diagonal2 = [board[0][2], board[1][1], board[2][0]];

  const isDiagonalWin2 = diagonal2.every(
    tile => tile != null && tile === diagonal2[0]
  );

  return isDiagonalWin1 || isDiagonalWin2;
};
