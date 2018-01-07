import React, { Component } from "react";

import { generateBoard, takePlayerTurn, calculatePlayerTurn } from "../lib";
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

  // @Cleanup - rename this to onPlayerTurn
  onTileClick = (rowIndex, columnIndex) => {
    const { isGameActive, board, currentPlayerToken } = this.state;

    if (!isGameActive) {
      return;
    }

    const newBoard = takePlayerTurn(
      board,
      currentPlayerToken,
      rowIndex,
      columnIndex
    );

    this.setState({
      board: newBoard,
      currentPlayerToken: calculatePlayerTurn(currentPlayerToken)
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
        <Board gameState={this.state.board} onTileClick={this.onTileClick} />
      </div>
    );
  }
}

export default App;
