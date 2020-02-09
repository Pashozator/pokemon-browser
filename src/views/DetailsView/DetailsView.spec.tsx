import React from 'react'
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import DetailsView from './DetailsView';
import { client } from '../../core/graphql/client';
import { ApolloProvider } from '@apollo/react-hooks';
import { StaticRouter } from 'react-router-dom';

describe('DetailsView component', () => {
	it('should render', () => {
		const wrapper = mount(
			<ApolloProvider client={client}>
				<StaticRouter>
					<DetailsView/>
				</StaticRouter>
			</ApolloProvider>
		);

		expect(wrapper.exists()).toBeTruthy();
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
