import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './core/graphql/client';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const DetailsView = lazy(() => import('./views/DetailsView/DetailsView'));

const App = () => {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Suspense fallback={<>Loading</>}>
					<Switch>
						<Route path="/:pokemon">
							<DetailsView/>
						</Route>
						<Route path="/">
							<HomeView/>
						</Route>
					</Switch>
				</Suspense>
			</BrowserRouter>
		</ApolloProvider>
	);
};

export default App;
