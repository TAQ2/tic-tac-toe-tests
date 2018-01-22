import React, { Component } from "react";
import styled from "styled-components";

import Header from "../header";
import GameContainer from "../gameContainer";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;
  max-width: 1024px;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <GameContainer />
        </Container>
      </div>
    );
  }
}

export default App;
