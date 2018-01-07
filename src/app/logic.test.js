const {
  generateBoard,
  takePlayerTurn,
  playGame,
  canPlayerTakeTurn,
  checkWin,
  checkVerticalWin,
  checkHorizontalWin,
  checkDiagonalWin,
  isDraw
} = require("./logic");

describe("generateBoard - initialising the board", () => {
  const board = generateBoard();

  it("starts with a board", () => {
    expect(board.length).toEqual(3);
  });

  it("board must have three rows", () => {
    board.forEach(row => {
      expect(row.length).toEqual(3);
    });
  });

  it("each tile in the board must be empty", () => {
    board.forEach(row =>
      row.forEach(tile => {
        expect(tile).toEqual(null);
      })
    );
  });
});

describe("check player takes a valid turn", () => {
  it("return false if the target tile is not null", () => {
    let board = [["xx", null, null], [null, null, null], [null, null, null]];
    expect(canPlayerTakeTurn(board, 0, 0)).toEqual(false);

    board = [["xx", null, null], [null, null, null], [null, "oo", null]];
    expect(canPlayerTakeTurn(board, 2, 1)).toEqual(false);
  });

  it("return true if the target tile is null", () => {
    let board = [[null, null, null], [null, null, null], [null, null, null]];
    expect(canPlayerTakeTurn(board, 0, 0)).toEqual(true);

    board = [["xx", null, null], [null, null, null], [null, "oo", null]];
    expect(canPlayerTakeTurn(board, 1, 1)).toEqual(true);
  });
});

describe("allow user to take a turn", () => {
  it("the board is changed with the users tile", () => {
    let board = [[null, null, null], [null, null, null], [null, null, null]];
    let playerTile = "X";
    let newBoard = [
      [playerTile, null, null],
      [null, null, null],
      [null, null, null]
    ];
    expect(takePlayerTurn(board, playerTile, 0, 0)).toEqual(newBoard);

    board = [[null, null, null], [null, null, null], [null, null, null]];
    playerTile = "zzz";
    newBoard = [
      [null, null, null],
      [null, null, null],
      [null, playerTile, null]
    ];
    expect(takePlayerTurn(board, playerTile, 2, 1)).toEqual(newBoard);
  });
});

describe("check a horizonal win", () => {
  it("should return false if there are no rows with full entries", () => {
    const board1 = [[null, null, null], [null, null, null], [null, null, null]];
    expect(checkHorizontalWin(board1)).toEqual(false);

    const board2 = [["X", null, "X"], ["X", null, null], ["X", null, null]];
    expect(checkHorizontalWin(board2)).toEqual(false);

    const board3 = [["X", null, null], [null, "X", null], [null, null, "X"]];
    expect(checkHorizontalWin(board3)).toEqual(false);
  });

  it("should return false if there is no row with identical values", () => {
    const board1 = [["X", "X", "O"], [null, "X", null], [null, null, "X"]];
    expect(checkHorizontalWin(board1)).toEqual(false);

    const board2 = [["X", "O", "X"], ["O", "X", null], [null, "X", "X"]];
    expect(checkHorizontalWin(board2)).toEqual(false);
  });

  it("should return true if there is horizonal win", () => {
    const board1 = [["X", "X", "X"], ["X", null, null], ["X", null, null]];
    expect(checkHorizontalWin(board1)).toEqual(true);

    const board2 = [[null, null, null], ["O", "O", "O"], [null, null, "X"]];
    expect(checkHorizontalWin(board2)).toEqual(true);

    const board3 = [[null, null, null], [null, null, null], ["z", "z", "z"]];
    expect(checkHorizontalWin(board3)).toEqual(true);
  });
});

describe("check a vertical win", () => {
  it("should return false if there are no columns with full entries", () => {
    const board1 = [[null, null, null], [null, null, null], [null, null, null]];
    expect(checkVerticalWin(board1)).toEqual(false);

    const board2 = [["X", null, "X"], ["X", "X", "X"], [null, null, null]];
    expect(checkVerticalWin(board2)).toEqual(false);

    const board3 = [["X", null, null], [null, "X", null], [null, null, "X"]];
    expect(checkVerticalWin(board3)).toEqual(false);
  });

  it("should return false if there is no row with identical values", () => {
    const board1 = [["X", "X", "O"], [null, "X", "X"], [null, null, "X"]];
    expect(checkVerticalWin(board1)).toEqual(false);

    const board2 = [["X", "O", "X"], ["O", "X", null], ["X", "X", "X"]];
    expect(checkVerticalWin(board2)).toEqual(false);
  });

  it("should return true if there is vertical win", () => {
    const board1 = [["X", "O", "O"], ["X", null, null], ["X", null, null]];
    expect(checkVerticalWin(board1)).toEqual(true);

    const board2 = [[null, null, "X"], [null, null, "X"], [null, null, "X"]];
    expect(checkVerticalWin(board2)).toEqual(true);

    const board3 = [
      [null, "zzz", null],
      [null, "zzz", null],
      [null, "zzz", null]
    ];
    expect(checkVerticalWin(board3)).toEqual(true);
  });
});

// @Cleanup - check these test
describe("check a diagonal win", () => {
  it("should return false if there are no diagonals with full entries", () => {
    const board1 = [[null, null, null], [null, null, null], [null, null, null]];
    expect(checkDiagonalWin(board1)).toEqual(false);

    const board2 = [["X", null, "X"], ["X", "X", "X"], [null, null, null]];
    expect(checkDiagonalWin(board2)).toEqual(false);

    const board3 = [["X", null, null], [null, null, null], [null, null, "X"]];
    expect(checkDiagonalWin(board3)).toEqual(false);
  });

  it("should return false if there is no row with identical values", () => {
    const board = [["X", "O", "O"], ["X", "O", null], ["X", null, "X"]];
    expect(checkDiagonalWin(board)).toEqual(false);
  });

  it("should return true if there is vertical win", () => {
    const board1 = [["X", "X", "O"], [null, "X", "X"], [null, null, "X"]];
    expect(checkDiagonalWin(board1)).toEqual(true);

    const board2 = [[null, null, "X"], [null, "X", null], ["X", null, null]];
    expect(checkDiagonalWin(board2)).toEqual(true);

    const board3 = [
      ["zzz", null, null],
      [null, "zzz", null],
      [null, null, "zzz"]
    ];
    expect(checkDiagonalWin(board3)).toEqual(true);
  });
});

describe("check for a draw", () => {
  it("should return false if there are no empty tiles on the board", () => {
    const board1 = [["zz", "zz", "zz"], ["zz", "zz", "zz"], ["zz", "zz", "zz"]];
    expect(isDraw(board1)).toEqual(true);
  });

  it("should return false if there are any empty tiles on the board", () => {
    const board1 = [["zz", "zz", "zz"], [null, "zz", "zz"], ["zz", "zz", "zz"]];
    expect(isDraw(board1)).toEqual(false);
  });
});
