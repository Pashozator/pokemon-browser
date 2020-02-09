import React from 'react';
import './PokemonList.scss';
import { Pokemon } from '../../types/pokemon';
import SkeletonCardLoading from '../SkeletonCardLoading/SkeletonCardLoading';
import PokemonCard from '../PokemonCard/PokemonCard';

interface PokemonListProps {
	pokemons: Pokemon[];
	loading?: boolean;
	className?: string;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons = [], loading = false, className = '' }) => {
	return (
		<section className={`pokemon-list ${className}`}>
			{loading && (
				<>
					<SkeletonCardLoading/>
					<SkeletonCardLoading/>
					<SkeletonCardLoading/>
					<SkeletonCardLoading/>
				</>
			)}
			{pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)}
		</section>
	);
};

export default PokemonList;
