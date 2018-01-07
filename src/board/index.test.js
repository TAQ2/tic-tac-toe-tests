import React from "react";
import { mount } from "enzyme";

import Board from "./";
import Tile from "../tile";
import { generateBoard } from "../lib/";

describe("displays a tic tac toe board", () => {
  it("displays an empty board", () => {
    const emptyBoard = generateBoard();

    const wrapper = mount(<Board gameState={emptyBoard} />);

    const tiles = wrapper.find(Tile);

    expect(tiles.length).toEqual(9);

    tiles.forEach(tile => {
      expect(tile.text()).toEqual("");
    });
  });

  it("displays the tokens in the game state", () => {
    const board = generateBoard();
    const playerToken = "ZZ";
    board[0][0] = playerToken;

    const wrapper = mount(<Board gameState={board} />);

    const tiles = wrapper.find(Tile);

    tiles.forEach((tile, index) => {
      if (index === 0) {
        expect(tile.text()).toEqual(playerToken);
      } else {
        expect(tile.text()).toEqual("");
      }
    });
  });
});
