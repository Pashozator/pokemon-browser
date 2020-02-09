import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ScrollToTop from './ScrollToTop';
import { StaticRouter } from 'react-router-dom';

describe('ScrollToTop component', () => {
	it('should render', () => {
		const wrapper = shallow(
			<StaticRouter>
				<ScrollToTop/>
			</StaticRouter>
		);

		expect(wrapper.exists()).toBeTruthy();
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
