import React, { Component } from "react";

class Controls extends Component {
  render() {
    return (
      <button className="startButton" onClick={this.props.onStartGame}>
        Reset
      </button>
    );
  }
}

export default Controls;
