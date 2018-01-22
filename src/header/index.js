import React, { Component } from "react";
import { Box, Toolbar } from "rebass";
import styled from "styled-components";

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
`;

class Header extends Component {
  render() {
    return (
      <Toolbar bg="primary" px={4}>
        <h2>Tic Tac Toe</h2>
        <Box ml="auto" />
        <StyledLink href="https://github.com/TAQ2/tic-tac-toe" target="_blank">
          GitHub
        </StyledLink>
      </Toolbar>
    );
  }
}

export default Header;
