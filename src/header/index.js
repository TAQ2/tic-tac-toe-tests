import React, { Component } from "react";
import { Toolbar } from "rebass";

class Header extends Component {
  render() {
    return (
      <Toolbar bg="purple">
        <h2>Tic Tac Toe</h2>
      </Toolbar>
    );
  }
}

export default Header;
