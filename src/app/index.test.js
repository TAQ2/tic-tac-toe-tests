import React from "react";
import { mount, shallow } from "enzyme";

import App from "./";
import { generateBoard } from "./logic";

const emptyBoard = generateBoard();

describe("App", () => {
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

      wrapper.instance().onPlayerTurn(rowIndex, columnIndex);
      expect(wrapper.state().board).toEqual(emptyBoard);
    });

    it("onPlayerTurn should update the board state", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.state().board).toEqual(emptyBoard);

      wrapper.setState({ isGameActive: true });

      const rowIndex = 0;
      const columnIndex = 0;
      const { currentPlayerToken } = wrapper.state();

      wrapper.instance().onPlayerTurn(rowIndex, columnIndex);
      expect(wrapper.state().board[rowIndex][columnIndex]).toEqual(
        currentPlayerToken
      );
    });

    it("player token should change once a move has been entered", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.state().currentPlayerToken).toEqual("X");
      wrapper.setState({ isGameActive: true });

      const rowIndex = 0;
      const columnIndex = 0;

      wrapper.instance().onPlayerTurn(rowIndex, columnIndex);
      expect(wrapper.state().currentPlayerToken).toEqual("O");
    });

    it("player cannot put token in a non-empty tile", () => {
      const wrapper = shallow(<App />);
      wrapper.setState({ isGameActive: true });

      const rowIndex = 0;
      const columnIndex = 0;
      const player1Token = wrapper.state().currentPlayerToken;

      wrapper.instance().onPlayerTurn(rowIndex, columnIndex);
      expect(wrapper.state().board[rowIndex][columnIndex]).toEqual(
        player1Token
      );
      wrapper.instance().onPlayerTurn(rowIndex, columnIndex);
      expect(wrapper.state().board[rowIndex][columnIndex]).toEqual(
        player1Token
      );
    });
  });

  describe("end game", () => {
    it("game should not be active when the game is won", () => {
      const wrapper = shallow(<App />);
      const board = generateBoard();

      board[0][0] = "X";
      board[0][1] = "O";
      board[1][1] = "X";
      board[0][2] = "O";

      wrapper.setState({ isGameActive: true, board, currentPlayerToken: "X" });
      wrapper.instance().onPlayerTurn(2, 2);
      expect(wrapper.state().isGameActive).toEqual(false);
    });

    it("game should not be active when the game is a draw", () => {
      const wrapper = shallow(<App />);
      const board = generateBoard();

      board[0][0] = "O";
      board[0][1] = "X";
      board[0][2] = "O";
      board[1][0] = "X";
      board[1][1] = "X";
      board[1][2] = "O";
      board[2][0] = "O";
      board[2][1] = "O";

      wrapper.setState({ isGameActive: true, board, currentPlayerToken: "X" });
      wrapper.instance().onPlayerTurn(2, 2);
      expect(wrapper.state().isGameActive).toEqual(false);
    });
  });
});
