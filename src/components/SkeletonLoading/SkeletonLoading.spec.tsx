import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SkeletonLoading from './SkeletonLoading';

describe('SkeletonLoading component', () => {
	it('should render', () => {
		const wrapper = shallow(<SkeletonLoading/>);

		expect(wrapper.exists()).toBeTruthy();
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
