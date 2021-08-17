import React from "React";
import Enzyme, { shallow, mount } from "enzyme";
import WeatherContainer from ".";

describe("Weather Container", () => {
	test("renders", () => {
		const wrapper = shallow(<WeatherContainer />);
		expect(wrapper.exists().toBe(true));
	});
});
