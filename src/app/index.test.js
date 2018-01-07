import React from "react";
import { mount, shallow } from "enzyme";

import App from "./";
import { generateBoard } from "../lib";

const emptyBoard = generateBoard();

describe("start game", () => {
  it("the game should not start until the start game is clicked", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().isGameActive).toEqual(false);

    wrapper.instance().onStartGame();
    expect(wrapper.state().isGameActive).toEqual(true);
  });

  it("the board should be initialised when the start game is clicked", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().board).toEqual(emptyBoard);

    wrapper.setState({ board: null });
    expect(wrapper.state().board).toEqual(null);

    wrapper.instance().onStartGame();
    expect(wrapper.state().board).toEqual(emptyBoard);
  });
});

describe("play a turn", () => {
  it("player X should always go first", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().currentPlayerToken).toEqual("X");
  });

  it("should not be allow to take a turn if the game is not active", () => {
    const wrapper = shallow(<App />);

    const rowIndex = 0;
    const columnIndex = 0;

    wrapper.instance().onTileClick(rowIndex, columnIndex);
    expect(wrapper.state().board).toEqual(emptyBoard);
  });

  it("onTileClick should update the board state", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().board).toEqual(emptyBoard);

    wrapper.setState({ isGameActive: true });

    const rowIndex = 0;
    const columnIndex = 0;
    const { currentPlayerToken } = wrapper.state();

    wrapper.instance().onTileClick(rowIndex, columnIndex);
    expect(wrapper.state().board[rowIndex][columnIndex]).toEqual(
      currentPlayerToken
    );
  });

  it("player token should change once a move has been entered", async () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().currentPlayerToken).toEqual("X");
    wrapper.setState({ isGameActive: true });

    const rowIndex = 0;
    const columnIndex = 0;

    await wrapper.instance().onTileClick(rowIndex, columnIndex);
    expect(wrapper.state().currentPlayerToken).toEqual("O");
  });
});
