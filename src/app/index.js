import React, { Component } from "react";

import { generateBoard } from "../lib";
import Controls from "../controls";
import Message from "../message";

class App extends Component {
  state = { isGameActive: false, board: generateBoard() };

  onStartGame = () => {
    this.setState({ isGameActive: true, board: generateBoard() });
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
      </div>
    );
  }
}

export default App;
