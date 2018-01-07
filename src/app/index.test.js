import React from "react";
import { mount } from "enzyme";

import App from "./";

describe("start game", () => {
  it("the game should not start until the start game is clicked", () => {
    const wrapper = mount(<App />);
    expect(wrapper.state().isPlaying).toEqual(false);

    wrapper
      .find(".startButton")
      .first()
      .simulate("click");

    expect(wrapper.state().isPlaying).toEqual(true);
  });
});

describe("shows a board when the start game button is clicked", () => {});
