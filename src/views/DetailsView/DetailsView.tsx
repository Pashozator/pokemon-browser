import React from 'react';
import './DetailsView.scss';
import { useQuery } from '@apollo/react-hooks';
import { pokemonQuery } from '../../core/graphql/queries/pokemon.query';
import { useParams, } from 'react-router-dom';
import PokemonDetails from '../../components/PokemonDetails/PokemonDetails';
import Button from '../../components/Button/Button';

const DetailsView: React.FC = props => {
	const params = useParams<any>();
	const { loading, error, data } = useQuery(pokemonQuery, {
		variables: {
			name: params.name
		}
	});

	if (loading) {
		return <>Loading</>;
	}

	if (error) {
		return <>Error</>;
	}

	const { pokemon } = data;

	return (
		<section className="details-view">
			<Button link="/">Back to list</Button>
			<PokemonDetails pokemon={pokemon}/>
		</section>
	);
};

export default DetailsView;
