import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './core/graphql/client';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const DetailsView = lazy(() => import('./views/DetailsView/DetailsView'));

const App = () => {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<ScrollToTop/>
				<Suspense fallback={<>Loading</>}>
					<Switch>
						<Route path="/:name">
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
