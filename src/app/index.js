import React, { Component } from "react";

import { generateBoard, takePlayerTurn } from "../lib";
import Controls from "../controls";
import Message from "../message";
import Board from "../board";

class App extends Component {
  state = { isGameActive: false, board: generateBoard(), playerToken: "X" };

  onStartGame = () => {
    this.setState({ isGameActive: true, board: generateBoard() });
  };

  onTileClick = (rowIndex, columnIndex, playerToken) => {
    if (!this.state.isGameActive) {
      return;
    }

    const newBoard = takePlayerTurn(
      this.state.board,
      playerToken,
      rowIndex,
      columnIndex
    );

    this.setState({ board: newBoard });
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
