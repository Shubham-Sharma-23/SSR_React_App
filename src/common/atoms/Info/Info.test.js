import React from "react";
import { mount } from "enzyme";

import Info from "./index";

describe("<Info />", () => {
    it("renders Info", () => {
        const componentWrapper = mount(<Info name="name" text="text" />);
        expect(componentWrapper.find("span").length).toBe(3);
        expect(componentWrapper).toMatchSnapshot();
    });
});
