import React from 'react';
import './App.scss';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './core/graphql/client';

const App = () => {
	return (
		<ApolloProvider client={client}>
			<div className="App">

			</div>
		</ApolloProvider>
	);
}

export default App;
