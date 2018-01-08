import React, { Component } from "react";

import {
  generateBoard,
  addTokenToBoard,
  calculatePlayerTurn,
  canPlayerTakeTurn,
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

    if (!isGameActive || !canPlayerTakeTurn(board, rowIndex, columnIndex)) {
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

    const newState = {
      board: newBoard,
      currentPlayerToken: newPlayerToken,
      isGameActive: !isGameOver
    };

    this.setState(newState);
  };

  render() {
    return (
      <div>
        <Controls
          onStartGame={this.onStartGame}
          isGameActive={this.state.isGameActive}
        />
        <Message isGameActive={this.state.isGameActive} />
        <Board gameState={this.state.board} onPlayerTurn={this.onPlayerTurn} />
      </div>
    );
  }
}

export default GameContainer;
