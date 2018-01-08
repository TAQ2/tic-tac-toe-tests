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

class App extends Component {
  state = {
    isGameActive: false,
    board: generateBoard(),
    currentPlayerToken: "X"
  };

  onStartGame = () => {
    this.setState({ isGameActive: true, board: generateBoard() });
  };

  // @Question - should this logic be abstracted out
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

    this.setState({
      board: newBoard,
      currentPlayerToken: calculatePlayerTurn(currentPlayerToken),
      isGameActive: !isGameOver
    });
  };

  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
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

export default App;
