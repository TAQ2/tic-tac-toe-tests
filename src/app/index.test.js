import React from "react";
import { mount } from "enzyme";

import App from "./";
import { generateBoard } from "../lib";

describe("start game", () => {
  it("the game should not start until the start game is clicked", () => {
    const wrapper = mount(<App />);
    expect(wrapper.state().isGameActive).toEqual(false);

    wrapper
      .find(".startButton")
      .first()
      .simulate("click");

    expect(wrapper.state().isGameActive).toEqual(true);
  });

  it("the board should be initialised when the start game is clicked", () => {
    const wrapper = mount(<App />);
    expect(wrapper.state().board).toEqual(generateBoard());

    wrapper.setState({ board: null });
    expect(wrapper.state().board).toEqual(null);

    wrapper
      .find(".startButton")
      .first()
      .simulate("click");

    expect(wrapper.state().board).toEqual(generateBoard());
  });
});
