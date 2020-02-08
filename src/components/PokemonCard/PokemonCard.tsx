import React from 'react';
import './PokemonCard.scss';
import { Pokemon } from '../../types/pokemon';
import { Link } from 'react-router-dom';

interface PokemonCardProps {
	pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
	return (
		<Link to={`/${pokemon.id}${pokemon.number}`}>
			<button className="card">
				{pokemon.name}
				<img src={pokemon.image} alt=""/>
			</button>
		</Link>
	)
};

export default PokemonCard;
