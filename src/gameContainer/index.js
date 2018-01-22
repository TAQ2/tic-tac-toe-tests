import React, { Component, Fragment } from "react";

import {
  generateBoard,
  addTokenToBoard,
  calculatePlayerTurn,
  isPlayerTurnValid,
  isWin,
  isDraw
} from "./logic";
import Controls from "../controls";
import Message from "../message";
import Board from "../board";

class GameContainer extends Component {
  state = {
    isGameActive: false,
    board: generateBoard(),
    currentPlayerToken: "X"
  };

  onStartGame = () => {
    this.setState({ isGameActive: true, board: generateBoard() });
  };

  // @Cleanup - can we make this method more readable
  onPlayerTurn = (rowIndex, columnIndex) => {
    const { isGameActive, board, currentPlayerToken } = this.state;

    if (!isGameActive || !isPlayerTurnValid(board, rowIndex, columnIndex)) {
      return;
    }

    const newBoard = addTokenToBoard(
      board,
      currentPlayerToken,
      rowIndex,
      columnIndex
    );

    const isGameOver = isWin(newBoard) || isDraw(newBoard);

    const newPlayerToken = isGameOver
      ? "X"
      : calculatePlayerTurn(currentPlayerToken);

    this.setState({
      board: newBoard,
      currentPlayerToken: newPlayerToken,
      isGameActive: !isGameOver
    });
  };

  render() {
    return (
      <Fragment>
        <Controls
          onStartGame={this.onStartGame}
          isGameActive={this.state.isGameActive}
        />
        <Message isGameActive={this.state.isGameActive} />
        <Board gameState={this.state.board} onPlayerTurn={this.onPlayerTurn} />
      </Fragment>
    );
  }
}

export default GameContainer;
