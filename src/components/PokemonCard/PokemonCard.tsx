import React from 'react';
import './PokemonCard.scss';
import { Pokemon } from '../../types/pokemon';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

interface PokemonCardProps {
	pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
	return (
		<Link to={`/${pokemon.name}`}>
			<button>
				<Card className="pokemon-card">
					{pokemon.name}
					<img src={pokemon.image} alt={pokemon.name} />
				</Card>
			</button>
		</Link>
	)
};

export default PokemonCard;
