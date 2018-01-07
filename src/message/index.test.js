import React from "react";
import { shallow } from "enzyme";

import Message from "./";

it("message should change depending on whether the game is active or not", () => {
  // @Incomplete - how to check that the two snapshots are not identical
  const wrapper = shallow(<Message isGameActive={true} />);
  expect(wrapper).toMatchSnapshot();

  const wrapper2 = shallow(<Message isGameActive={false} />);
  expect(wrapper2).toMatchSnapshot();
});
