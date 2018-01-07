import React, { Component } from "react";
import { Box } from "rebass";
import styled from "styled-components";

const StyledTile = styled(Box)`
  min-height: 200px;
  max-width: 200px;
`;

class Tile extends Component {
  render() {
    const { token, rowIndex, columnIndex, onTileClick } = this.props;
    return (
      <StyledTile
        width={1 / 3}
        bg="papayawhip"
        className={`tile${rowIndex}${columnIndex}`}
        onClick={() => onTileClick(rowIndex, columnIndex, "X")}
      >
        {token}
      </StyledTile>
    );
  }
}

export default Tile;
