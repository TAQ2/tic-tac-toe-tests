import React from "react";
import { shallow } from "enzyme";

import Controls from "./";

describe("start game", () => {
  it("should execute a function when the start button is clicked", () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<Controls onStartGame={mockFunction} />);
    const startButton = wrapper
      .find(".startButton")
      .first()
      .simulate("click");

    expect(mockFunction).toBeCalled();
  });
});
