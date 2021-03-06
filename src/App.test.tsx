import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

describe('App component', () => {
	it('should render', () => {
		const wrapper = shallow(<App/>);

		expect(wrapper.exists()).toBeTruthy();
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
