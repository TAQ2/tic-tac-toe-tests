const {checkWin, checkVerticalWin, checkHorizontalWin, checkDiagonalWin} = require('./checkWin');

describe('check a horizonal win', () => {
  it('should return false if there are no rows with full entries', () => {
    const board1 = [[null, null, null], [null, null, null], [null, null, null]];
    expect(checkHorizontalWin(board1)).toEqual(false);

    const board2 = [['X', null, 'X'], ['X', null, null], ['X', null, null]];
    expect(checkHorizontalWin(board2)).toEqual(false);

    const board3 = [['X', null, null], [null, 'X', null], [null, null, 'X']];
    expect(checkHorizontalWin(board3)).toEqual(false);
  });

  it('should return false if there is no row with identical values', () => {
    const board1 = [['X', 'X', 'O'], [null, 'X', null], [null, null, 'X']];
    expect(checkHorizontalWin(board1)).toEqual(false);

    const board2 = [['X', 'O', 'X'], ['O', 'X', null], [null, 'X', 'X']];
    expect(checkHorizontalWin(board2)).toEqual(false);
  });

  it('should return true if there is horizonal win', () => {
    const board1 = [['X', 'X', 'X'], ['X', null, null], ['X', null, null]];
    expect(checkHorizontalWin(board1)).toEqual(true);

    const board2 = [[null, null, null], ['O', 'O', 'O'], [null, null, 'X']];
    expect(checkHorizontalWin(board2)).toEqual(true);

    const board3 = [[null, null, null], [null, null, null], ['z', 'z', 'z']];
    expect(checkHorizontalWin(board3)).toEqual(true);
  });
});

describe('check a vertical win', () => {
  it('should return false if there are no columns with full entries', () => {
    const board1 = [[null, null, null], [null, null, null], [null, null, null]];
    expect(checkVerticalWin(board1)).toEqual(false);

    const board2 = [['X', null, 'X'], ['X', 'X', 'X'], [null, null, null]];
    expect(checkVerticalWin(board2)).toEqual(false);

    const board3 = [['X', null, null], [null, 'X', null], [null, null, 'X']];
    expect(checkVerticalWin(board3)).toEqual(false);
  });

  it('should return false if there is no row with identical values', () => {
    const board1 = [['X', 'X', 'O'], [null, 'X', 'X'], [null, null, 'X']];
    expect(checkVerticalWin(board1)).toEqual(false);

    const board2 = [['X', 'O', 'X'], ['O', 'X', null], ['X', 'X', 'X']];
    expect(checkVerticalWin(board2)).toEqual(false);
  });

  it('should return true if there is vertical win', () => {
    const board1 = [['X', 'O', 'O'], ['X', null, null], ['X', null, null]];
    expect(checkVerticalWin(board1)).toEqual(true);

    const board2 = [[null, null, 'X'], [null, null, 'X'], [null, null, 'X']];
    expect(checkVerticalWin(board2)).toEqual(true);

    const board3 = [[null, 'zzz', null], [null, 'zzz', null], [null, 'zzz', null]];
    expect(checkVerticalWin(board3)).toEqual(true);
  });
});

// @Cleanup - check these test
describe('check a diagonal win', () => {
  it('should return false if there are no diagonals with full entries', () => {
    const board1 = [[null, null, null], [null, null, null], [null, null, null]];
    expect(checkDiagonalWin(board1)).toEqual(false);

    const board2 = [['X', null, 'X'], ['X', 'X', 'X'], [null, null, null]];
    expect(checkDiagonalWin(board2)).toEqual(false);

    const board3 = [['X', null, null], [null, null, null], [null, null, 'X']];
    expect(checkDiagonalWin(board3)).toEqual(false);
  });

  it('should return false if there is no row with identical values', () => {
    const board = [['X', 'O', 'O'], ['X', 'O', null], ['X', null, 'X']];
    expect(checkDiagonalWin(board)).toEqual(false);
  });

  it('should return true if there is vertical win', () => {
    const board1 = [['X', 'X', 'O'], [null, 'X', 'X'], [null, null, 'X']];
    expect(checkDiagonalWin(board1)).toEqual(true);

    const board2 = [[null, null, 'X'], [null, 'X', null], ['X', null, null]];
    expect(checkDiagonalWin(board2)).toEqual(true);

    const board3 = [['zzz', null, null], [null, 'zzz', null], [null, null, 'zzz']];
    expect(checkDiagonalWin(board3)).toEqual(true);
  });
});
