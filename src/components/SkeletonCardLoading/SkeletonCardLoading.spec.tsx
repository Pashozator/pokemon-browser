import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SkeletonCardLoading from './SkeletonCardLoading';

describe('SkeletonCardLoading component', () => {
	it('should render', () => {
		const wrapper = shallow(<SkeletonCardLoading/>);

		expect(wrapper.exists()).toBeTruthy();
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
