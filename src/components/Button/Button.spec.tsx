import React from 'react'
import { shallow } from 'enzyme';
import Button from './Button';
import toJson from 'enzyme-to-json';

describe('Button component', () => {
	it('should render', () => {
		const wrapper = shallow(<Button>Button test</Button>);

		expect(wrapper.exists()).toBeTruthy();
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
