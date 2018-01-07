import React, { Component } from "react";

class Controls extends Component {
  render() {
    return (
      <div>
        <button className="startButton" onClick={this.props.onStartGame}>
          Start
        </button>
      </div>
    );
  }
}

export default Controls;
