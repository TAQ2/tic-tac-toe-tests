import React, { Component } from "react";

// @Incomplete - test this
const generateMessage = isGameActive => {
  return isGameActive ? "Reset" : "Start";
};

class Controls extends Component {
  render() {
    return (
      <button className="startButton" onClick={this.props.onStartGame}>
        {generateMessage(this.props.isGameActive)}
      </button>
    );
  }
}

export default Controls;
