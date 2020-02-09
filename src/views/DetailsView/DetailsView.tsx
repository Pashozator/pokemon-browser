import React from 'react';
import './DetailsView.scss';
import { useQuery } from '@apollo/react-hooks';
import { pokemonQuery } from '../../core/graphql/queries/pokemon.query';
import { useParams, } from 'react-router-dom';
import PokemonDetails from '../../components/PokemonDetails/PokemonDetails';
import Button from '../../components/Button/Button';
import { useDocumentTitle } from '../../core/hooks/use-document-title';

const DetailsView: React.FC = props => {
	const params = useParams<any>();
	const { loading, error, data } = useQuery(pokemonQuery, {
		variables: {
			name: params.name
		}
	});

	useDocumentTitle(params.name);

	if (error) {
		return <>Error</>;
	}

	return (
		<section className="details-view">
			<Button link="/">Back to list</Button>
			<PokemonDetails pokemon={data?.pokemon} loading={loading}/>
		</section>
	);
};

export default DetailsView;
