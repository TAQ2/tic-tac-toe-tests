import React, { Component } from "react";

import Tile from "../tile";

class Board extends Component {
  render() {
    const { onPlayerTurn, gameState } = this.props;
    const width = 600;
    const height = 600;

    return (
      <svg width={width} height={height}>
        {gameState.map((row, rowIndex) =>
          row.map((tile, columnIndex) => (
            <Tile
              // @Cleanup - props need renaming
              key={`${rowIndex}${columnIndex}`}
              rowIndex={rowIndex}
              columnIndex={columnIndex}
              token={tile}
              onTileClick={onPlayerTurn}
              width={width}
              height={height}
            />
          ))
        )}
      </svg>
    );
  }
}

export default Board;
