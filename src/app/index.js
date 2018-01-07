import React, { Component } from "react";

import { generateBoard } from "../lib";
import Controls from "../controls";

class App extends Component {
  state = { isPlaying: false };

  startGame = () => {
    this.setState({ isPlaying: true });
  };

  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <Controls onStartGame={this.startGame} />
      </div>
    );
  }
}

export default App;
