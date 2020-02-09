import React from 'react';
import './PokemonEvolutionList.scss';
import { Pokemon } from '../../types/pokemon';
import PokemonEvolutionCard from '../PokemonEvolutionCard/PokemonEvolutionCard';

interface PokemonEvolutionsProps {
	evolutions: Pokemon[] | undefined;
}

const PokemonEvolutionList: React.FC<PokemonEvolutionsProps> = ({ evolutions = [] }) => {
	return (
		<div className="pokemon-evolution-list">
			{evolutions.map(evolution => <PokemonEvolutionCard key={evolution.id} evolution={evolution}/>)}
		</div>
	);
};

export default PokemonEvolutionList;
