import React from "react";
import { shallow } from "enzyme";

import Controls from "./";

describe("start button", () => {
  it("should execute a function when the start button is clicked", () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<Controls onStartGame={mockFunction} />);
    wrapper
      .find(".startButton")
      .first()
      .simulate("click");

    expect(mockFunction).toBeCalled();
  });
});
