import React, { Component } from "react";

class Tile extends Component {
  render() {
    const { token, rowIndex, columnIndex } = this.props;
    return <div className={`tile${rowIndex}${columnIndex}`}>{token}</div>;
  }
}

export default Tile;
