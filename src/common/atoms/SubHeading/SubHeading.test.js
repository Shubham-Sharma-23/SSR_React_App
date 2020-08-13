import React from "react";
import { mount } from "enzyme";

import SubHeading from "./index";

describe("<SubHeading />", () => {
    it("renders SubHeading", () => {
        const componentWrapper = mount(<SubHeading>test sub heading</SubHeading>);
        expect(componentWrapper.find("span").length).toBe(1);
        expect(componentWrapper).toMatchSnapshot();
    });
});
