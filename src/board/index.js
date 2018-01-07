import React, { Component } from "react";
import { Flex } from "rebass";

import Tile from "../tile";

class Board extends Component {
  render() {
    const { onTileClick, gameState } = this.props;
    return (
      <Flex wrap width={600}>
        {gameState.map((row, rowIndex) =>
          row.map((tile, columnIndex) => (
            <Tile
              key={`${rowIndex} + ${columnIndex}`}
              rowIndex={rowIndex}
              columnIndex={columnIndex}
              token={tile}
              onTileClick={onTileClick}
            />
          ))
        )}
      </Flex>
    );
  }
}

export default Board;
