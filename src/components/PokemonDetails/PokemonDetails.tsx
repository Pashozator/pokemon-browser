import React from 'react';
import './PokemonDetails.scss';
import Card from '../Card/Card';
import { Pokemon } from '../../types/pokemon';
import PokemonEvolutionCard from '../PokemonEvolutionCard/PokemonEvolutionCard';

interface PokemonDetailsProps {
	pokemon: Pokemon;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon }) => {
	return (
		<div className="pokemon-details">
			<Card>
				<div className="image">
					<img src={pokemon.image} alt={pokemon.name}/>
				</div>
			</Card>
			<div className="description">
				<h1>{pokemon.name}</h1>
				<ul>
					{pokemon.maxHP && <li>
			  <span className="label">Max HP</span> {pokemon.maxHP}
		  </li>}
					{pokemon.maxCP && <li>
			  <span className="label">Max CP</span> {pokemon.maxCP}
		  </li>}
					{pokemon.fleeRate && <li>
			  <span className="label">Flee rate</span> {pokemon.fleeRate}
		  </li>}
					{pokemon.classification && <li>
			  <span className="label">Classification</span> {pokemon.classification}
		  </li>}
					{pokemon.types && <li>
			  <span className="label">Types</span> {pokemon.types.toString()}
		  </li>}
					{pokemon.resistant && <li>
			  <span className="label">Resistant</span> {pokemon.resistant.toString()}
		  </li>}
					{pokemon.weaknesses && <li>
			  <span className="label">Weaknesses</span> {pokemon.weaknesses.toString()}
		  </li>}
					{pokemon.evolutions && <li>
			  <span className="label">Evolutions</span>
						{pokemon.evolutions.map((evolution: Pokemon) => <PokemonEvolutionCard key={evolution.id}
																																									evolution={evolution}/>)}
		  </li>}
				</ul>
			</div>
		</div>
	);
};

export default PokemonDetails;
