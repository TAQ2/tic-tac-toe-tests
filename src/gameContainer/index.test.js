import React from "react";
import { shallow } from "enzyme";

import GameContainer from "./";
import { generateBoard } from "./logic";
import { PLAYER_X, PLAYER_O } from "../constants";

const emptyBoard = generateBoard();

describe("GameContainer", () => {
  describe("start game", () => {
    it("the game should not start until the start game is clicked", () => {
      const wrapper = shallow(<GameContainer />);
      expect(wrapper.state().isGameActive).toEqual(false);

      wrapper.instance().onStartGame();
      expect(wrapper.state().isGameActive).toEqual(true);
    });

    it("the board should be initialised when the start game is clicked", () => {
      const wrapper = shallow(<GameContainer />);
      expect(wrapper.state().board).toEqual(emptyBoard);

      wrapper.setState({ board: null });
      expect(wrapper.state().board).toEqual(null);

      wrapper.instance().onStartGame();
      expect(wrapper.state().board).toEqual(emptyBoard);
    });
  });

  describe("play a turn", () => {
    it("player X should always go first", () => {
      const wrapper = shallow(<GameContainer />);
      expect(wrapper.state().currentPlayerToken).toEqual(PLAYER_X);
    });

    it("should not be allow to take a turn if the game is not active", () => {
      const wrapper = shallow(<GameContainer />);

      const rowIndex = 0;
      const columnIndex = 0;

      wrapper.instance().onPlayerTurn(rowIndex, columnIndex);
      expect(wrapper.state().board).toEqual(emptyBoard);
    });

    it("onPlayerTurn should update the board state", () => {
      const wrapper = shallow(<GameContainer />);
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
      const wrapper = shallow(<GameContainer />);
      expect(wrapper.state().currentPlayerToken).toEqual(PLAYER_X);
      wrapper.setState({ isGameActive: true });

      const rowIndex = 0;
      const columnIndex = 0;

      wrapper.instance().onPlayerTurn(rowIndex, columnIndex);
      expect(wrapper.state().currentPlayerToken).toEqual(PLAYER_O);
    });

    it("player cannot put token in a non-empty tile", () => {
      const wrapper = shallow(<GameContainer />);
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
      const wrapper = shallow(<GameContainer />);
      const board = generateBoard();

      board[0][0] = PLAYER_X;
      board[0][1] = PLAYER_O;
      board[1][1] = PLAYER_X;
      board[0][2] = PLAYER_O;

      wrapper.setState({
        isGameActive: true,
        board,
        currentPlayerToken: PLAYER_X
      });
      wrapper.instance().onPlayerTurn(2, 2);
      expect(wrapper.state().isGameActive).toEqual(false);
    });

    it("game should not be active when the game is a draw", () => {
      const wrapper = shallow(<GameContainer />);
      const board = generateBoard();

      board[0][0] = PLAYER_O;
      board[0][1] = PLAYER_X;
      board[0][2] = PLAYER_O;
      board[1][0] = PLAYER_X;
      board[1][1] = PLAYER_X;
      board[1][2] = PLAYER_O;
      board[2][0] = PLAYER_O;
      board[2][1] = PLAYER_O;

      wrapper.setState({
        isGameActive: true,
        board,
        currentPlayerToken: PLAYER_X
      });
      wrapper.instance().onPlayerTurn(2, 2);
      expect(wrapper.state().isGameActive).toEqual(false);
    });

    it("player token should be reset to X", () => {
      const wrapper = shallow(<GameContainer />);
      const board = generateBoard();

      board[0][0] = PLAYER_X;
      board[0][1] = PLAYER_O;
      board[1][1] = PLAYER_X;
      board[0][2] = PLAYER_O;

      wrapper.setState({
        isGameActive: true,
        board,
        currentPlayerToken: PLAYER_X
      });
      wrapper.instance().onPlayerTurn(2, 2);
      expect(wrapper.state().currentPlayerToken).toEqual(PLAYER_X);
    });
  });
});
