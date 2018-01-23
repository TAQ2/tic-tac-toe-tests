import React, { Component } from "react";
import styled from "styled-components";

import { PLAYER_X } from "../constants";
import { PRIMARY, SECONDARY } from "../theme";

const TileRect = styled.rect`
  fill: ${SECONDARY};
  stroke-width: 40;
  stroke: white;
  rx: 50;
  ry: 50;
`;

const Text = styled.text`
  fill: ${PRIMARY};
  text-anchor: middle;
  alignment-baseline: central;
  font-size: 100px;
`;

class Tile extends Component {
  render() {
    const {
      token,
      rowIndex,
      columnIndex,
      onTileClick,
      width,
      height
    } = this.props;

    // @Cleanup - magic numbers
    const tileWidth = width / 3;
    const tileHeight = height / 3;

    return (
      <g
        className={`tile${rowIndex}${columnIndex}`}
        onClick={() => onTileClick(rowIndex, columnIndex, PLAYER_X)}
      >
        <TileRect
          width={tileWidth}
          height={tileHeight}
          y={rowIndex * tileHeight}
          x={columnIndex * tileWidth}
        />
        <Text
          y={rowIndex * tileHeight + tileHeight / 2}
          x={columnIndex * tileWidth + tileWidth / 2}
        >
          {token}
        </Text>
      </g>
    );
  }
}

export default Tile;
