import React from "react";
import { shallow } from "enzyme";

import Tile from "../Tile";

it("displays a token", () => {
  const token = "bob";
  const wrapper = shallow(<Tile token={token} />);

  expect(wrapper.text()).toEqual(token);
});
