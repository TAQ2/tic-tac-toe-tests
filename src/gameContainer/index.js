import React, { Component } from "react";
import { Flex } from "rebass";

import { PLAYER_X } from "../constants";
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
    currentPlayerToken: PLAYER_X
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
      ? PLAYER_X
      : calculatePlayerTurn(currentPlayerToken);

    this.setState({
      board: newBoard,
      currentPlayerToken: newPlayerToken,
      isGameActive: !isGameOver
    });
  };

  render() {
    return (
      <Flex column align="center">
        <Board gameState={this.state.board} onPlayerTurn={this.onPlayerTurn} />
        <Controls
          onStartGame={this.onStartGame}
          isGameActive={this.state.isGameActive}
        />
        <Message isGameActive={this.state.isGameActive} />
      </Flex>
    );
  }
}

export default GameContainer;
