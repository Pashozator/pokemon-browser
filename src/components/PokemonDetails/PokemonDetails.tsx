import React from 'react';
import './PokemonDetails.scss';
import Card from '../Card/Card';
import { Pokemon } from '../../types/pokemon';
import PokemonEvolutionList from '../PokemonEvolutionList/PokemonEvolutionList';
import SkeletonCardLoading from '../SkeletonCardLoading/SkeletonCardLoading';
import SkeletonLoading from '../SkeletonLoading/SkeletonLoading';

interface PokemonDetailsProps {
	pokemon: Pokemon;
	loading?: boolean;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon, loading = false }) => {
	return (
		<div className="pokemon-details">
			{loading ? <SkeletonCardLoading /> : (
				<Card>
					<div className="image">
						<img src={pokemon?.image} alt={pokemon?.name}/>
					</div>
				</Card>
			)}
			<div className="description">
				<h1>{loading ? <SkeletonLoading style={{ width: 200 }}/> : pokemon?.name}</h1>
				<ul>
					{(loading || pokemon?.maxHP) && <li>
			  <span className="label">Max HP</span> {loading ? <SkeletonLoading style={{ width: 100 }}/> : pokemon?.maxHP}
		  </li>}
					{(loading || pokemon?.maxCP) && <li>
			  <span className="label">Max CP</span> {loading ? <SkeletonLoading style={{ width: 100 }}/> : pokemon?.maxCP}
		  </li>}
					{(loading || pokemon?.fleeRate) && <li>
			  <span className="label">Flee rate</span> {loading ? <SkeletonLoading style={{ width: 100 }}/> : pokemon?.fleeRate}
		  </li>}
					{(loading || pokemon?.classification) && <li>
			  <span className="label">Classification</span> {loading ? <SkeletonLoading style={{ width: 150 }}/> : pokemon?.classification}
		  </li>}
					{(loading || pokemon?.types) && <li>
			  <span className="label">Types</span> {loading ? <SkeletonLoading style={{ width: 100 }}/> : pokemon?.types.toString()}
		  </li>}
					{(loading || pokemon?.resistant) && <li>
			  <span className="label">Resistant</span> {loading ? <SkeletonLoading style={{ width: 150 }}/> : pokemon?.resistant.toString()}
		  </li>}
					{(loading || pokemon?.weaknesses) && <li>
			  <span className="label">Weaknesses</span> {loading ? <SkeletonLoading style={{ width: 150 }}/> : pokemon?.weaknesses.toString()}
		  </li>}
					{(loading || pokemon?.evolutions) && <li>
			  <span className="label">Evolutions</span>
						{loading ? <SkeletonLoading style={{ width: 150 }}/> : <PokemonEvolutionList evolutions={pokemon?.evolutions}/>}
		  </li>}
				</ul>
			</div>
		</div>
	);
};

export default PokemonDetails;
