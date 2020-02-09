import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Card from './Card';

describe('Card component', () => {
	it('should render', () => {
		const wrapper = shallow(<Card>Card test</Card>);

		expect(wrapper.exists()).toBeTruthy();
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
