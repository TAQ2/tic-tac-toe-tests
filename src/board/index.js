import React, { Component } from "react";
import styled from "styled-components";

import Tile from "../tile";
import { WINNING_LINE_OFFSET, BOARD_WIDTH, BOARD_HEIGHT } from "../constants";
import { PRIMARY } from "../theme";

const WinningLine = styled.line`
  stroke: ${PRIMARY};
  stroke-width: 10;
  stroke-dasharray: 2300;
  stroke-dashoffset: 2300;
  stroke-linecap: round;
  animation: dash 1.5s linear forwards;

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

class Board extends Component {
  render() {
    const { onPlayerTurn, gameState } = this.props;
    const tileWidth = BOARD_WIDTH / 3;
    const tileHeight = BOARD_HEIGHT / 3;
    return (
      <svg width={BOARD_WIDTH} height={BOARD_HEIGHT}>
        {gameState.map((row, rowIndex) =>
          row.map((tile, columnIndex) => (
            <Tile
              // @Cleanup - props need renaming
              key={`${rowIndex}${columnIndex}`}
              rowIndex={rowIndex}
              columnIndex={columnIndex}
              token={tile}
              onTileClick={onPlayerTurn}
              width={BOARD_WIDTH}
              height={BOARD_HEIGHT}
            />
          ))
        )}
        {/* if 00, 22 */}
        {/*
        <WinningLine
          x1={WINNING_LINE_OFFSET}
          y1={WINNING_LINE_OFFSET}
          x2={BOARD_WIDTH - WINNING_LINE_OFFSET}
          y2={BOARD_HEIGHT - WINNING_LINE_OFFSET}
        /> */}
        {/* if 01, 21 */}
        {/* <WinningLine
          x1={tileWidth + tileWidth / 2}
          y1={WINNING_LINE_OFFSET}
          x2={tileWidth + tileWidth / 2}
          y2={BOARD_HEIGHT - WINNING_LINE_OFFSET}
        /> */}
        {/* if 02, 20 */}
        <WinningLine
          x1={BOARD_WIDTH - WINNING_LINE_OFFSET}
          y1={WINNING_LINE_OFFSET}
          x2={WINNING_LINE_OFFSET}
          y2={BOARD_HEIGHT - WINNING_LINE_OFFSET}
        />
      </svg>
    );
  }
}

export default Board;
