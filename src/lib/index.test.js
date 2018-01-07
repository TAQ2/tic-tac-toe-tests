const {
  generateBoard,
  takePlayerTurn,
  playGame,
  canPlayerTakeTurn
} = require("./");

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
