import React, { Component } from "react";
import styled from "styled-components";

import Tile from "../tile";

const WinningLine = styled.line`
  stroke: red;
  stroke-width: 10;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: offset 2s linear forwards;

  @keyframes offset {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

class Board extends Component {
  render() {
    const { onPlayerTurn, gameState } = this.props;
    const width = 600;
    const height = 600;

    const lineOffset = 30;

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
        <WinningLine
          x1={lineOffset}
          y1={lineOffset}
          x2={width - lineOffset}
          y2={height - lineOffset}
        />
      </svg>
    );
  }
}

export default Board;
