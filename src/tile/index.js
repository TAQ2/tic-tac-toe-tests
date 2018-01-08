import React, { Component } from "react";
import { Flex, Text } from "rebass";
import styled from "styled-components";

const StyledTile = styled(Flex)`
  min-height: 200px;
  max-width: 200px;
  border: 5px solid white;
  border-radius: 50px;
`;

class Tile extends Component {
  render() {
    const { token, rowIndex, columnIndex, onTileClick } = this.props;
    return (
      <StyledTile
        width={1 / 3}
        bg="secondary"
        className={`tile${rowIndex}${columnIndex}`}
        align="center"
        justify="center"
        onClick={() => onTileClick(rowIndex, columnIndex, "X")}
      >
        <Text fontSize={5}>{token}</Text>
      </StyledTile>
    );
  }
}

export default Tile;
