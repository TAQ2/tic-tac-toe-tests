const {generateBoard, takePlayerTurn, playGame} = require('./');

describe('generateBoard - initialising the board', () => {
  const board = generateBoard();

  it('starts with a board', () => {
    expect(board.length).toEqual(3);
  });

  it('board must have three rows', () => {
    board.forEach(row => {
      expect(row.length).toEqual(3);
    });
  });

  it('each tile in the board must be empty', () => {
    board.forEach(row =>
      row.forEach(tile => {
        expect(tile).toEqual(null);
      })
    );
  });
});

describe('takePlayerTurn - allow user to take a turn', () => {
  it();
});
