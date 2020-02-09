import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PokemonEvolutionCard from './PokemonEvolutionCard';
import { Pokemon } from '../../types/pokemon';

describe('PokemonEvolutionCard component', () => {
	it('should render', () => {
		const pokemon: Pokemon = {
			id: 'test',
			name: 'Pikachu',
			image: 'image'
		};
		const wrapper = shallow(<PokemonEvolutionCard evolution={pokemon}/>);

		expect(wrapper.exists()).toBeTruthy();
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
