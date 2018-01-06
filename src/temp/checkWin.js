const checkWin = board => {
  // takes a board a calculates whether the game has been won
  // must check vertical win, horizontal win and diagonal win

  return (
    checkVerticalWin(board) &&
    checkHorizontalWin(board) &&
    checkDiagonalWin(board)
  );
};

const checkVerticalWin = board => {
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

const checkHorizontalWin = board => {
  let isWin = false;

  board.forEach(row => {
    let isRowWin = row.every(tile => tile != null && tile === row[0]);

    if (isRowWin) {
      isWin = isRowWin;
    }
  });

  return isWin;
};

const checkDiagonalWin = board => {
  // @Cleanup - better names

  const diagonal1 = [board[0][0], board[1][1], board[2][2]];

  const bob1 = diagonal1.every(tile => tile != null && tile === diagonal1[0]);

  const diagonal2 = [board[0][2], board[1][1], board[2][0]];

  const bob2 = diagonal2.every(tile => tile != null && tile === diagonal2[0]);

  return bob1 || bob2;
};

module.exports = {
  checkWin,
  checkVerticalWin,
  checkHorizontalWin,
  checkDiagonalWin
};
