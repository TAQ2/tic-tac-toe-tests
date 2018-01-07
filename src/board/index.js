import React, { Component } from "react";

import Tile from "../tile";

class Board extends Component {
  render() {
    return (
      <div>
        {this.props.gameState.map((row, rowIndex) =>
          row.map((tile, columnIndex) => (
            <Tile
              key={`${rowIndex} + ${columnIndex}`}
              rowIndex={rowIndex}
              columnIndex={columnIndex}
              token={tile}
            />
          ))
        )}
      </div>
    );
  }
}

export default Board;
