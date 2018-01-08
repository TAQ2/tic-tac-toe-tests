import React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";

import Tile from "../tile";

describe("Tile component", () => {
  it("displays a token", () => {
    const token = "bob";
    const wrapper = shallow(<Tile token={token} />);

    expect(wrapper.contains(token)).toEqual(true);
  });

  it("Tile has an onClick", () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<Tile onTileClick={mockFunction} />);

    wrapper.simulate("click");

    expect(mockFunction).toBeCalled();

    expect(wrapper).toMatchSnapshot();
  });
});
