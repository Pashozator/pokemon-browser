import React from 'react';
import './PokemonEvolutionCard.scss';
import Card from '../Card/Card';
import { Pokemon } from '../../types/pokemon';
import { Link } from 'react-router-dom';

interface PokemonEvolutionCardProps {
	evolution: Pokemon;
}

const PokemonEvolutionCard: React.FC<PokemonEvolutionCardProps> = ({ evolution }) => {
	return (
		<Link to={`/${evolution.name}`} className="pokemon-evolution">
			<button>
				<Card className="pokemon-evolution-card">
					<img src={evolution.image} alt={evolution.name}/>
					{evolution.name}
				</Card>
			</button>
		</Link>
	)
};

export default PokemonEvolutionCard;
