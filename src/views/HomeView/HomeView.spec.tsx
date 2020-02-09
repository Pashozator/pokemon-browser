import React from 'react'
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import HomeView from './HomeView';
import { client } from '../../core/graphql/client';
import { ApolloProvider } from '@apollo/react-hooks';

describe('HomeView component', () => {
	it('should render', () => {
		const wrapper = mount(
			<ApolloProvider client={client}>
				<HomeView/>
			</ApolloProvider>
		);

		expect(wrapper.exists()).toBeTruthy();
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
