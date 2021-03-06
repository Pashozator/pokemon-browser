import React from 'react';
import PokemonList from '../../components/PokemonList/PokemonList';
import { useQuery } from '@apollo/react-hooks';
import { pokemonsQuery } from '../../core/graphql/queries/pokemons.query';
import { useDocumentTitle } from '../../core/hooks/use-document-title';

const HomeView: React.FC = props => {
	const { loading, error, data } = useQuery(pokemonsQuery);

	useDocumentTitle('Home');

	if (error) {
		return <>Error</>;
	}

	return (
		<main>
			<h1>Pokemon browser</h1>
			<PokemonList pokemons={data?.pokemons} loading={loading}/>
		</main>
	);
};

export default HomeView;
