import React from 'react';
import './PokemonList.scss';
import PokemonCard from '../PokemonCard/PokemonCard';
import { Pokemon } from '../../types/pokemon';

interface PokemonListProps {
	pokemons: Pokemon[];
	className?: string;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons = [], className = '' }) => {
	return (
		<section className={`pokemon-list ${className}`}>
			{pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)}
		</section>
	);
};

export default PokemonList;
