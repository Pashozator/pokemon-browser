import React from 'react';
import './PokemonList.scss';
import PokemonCard from '../PokemonCard/PokemonCard';
import { Pokemon } from '../../types/pokemon';

interface PokemonListProps {
	pokemons: Pokemon[]
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons = [] }) => {
	return (
		<section className="pokemon-list">
			{pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)}
		</section>
	);
};

export default PokemonList;
