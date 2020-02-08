import React from 'react';
import './PokemonList.scss';
import PokemonCard from '../PokemonCard/PokemonCard';

const PokemonList: React.FC = props => {
	return (
		<section className="pokemon-list">
			<PokemonCard />
		</section>
	);
};

export default PokemonList;
