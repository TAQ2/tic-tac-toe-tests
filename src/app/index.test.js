import React from "react";
import { shallow } from "enzyme";

import App from "./";
import { generateBoard } from "../lib";

describe("start game", () => {
  it("the game should not start until the start game is clicked", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().isGameActive).toEqual(false);

    wrapper.instance().onStartGame();
    expect(wrapper.state().isGameActive).toEqual(true);
  });

  it("the board should be initialised when the start game is clicked", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().board).toEqual(generateBoard());

    wrapper.setState({ board: null });
    expect(wrapper.state().board).toEqual(null);

    wrapper.instance().onStartGame();
    expect(wrapper.state().board).toEqual(generateBoard());
  });
});
