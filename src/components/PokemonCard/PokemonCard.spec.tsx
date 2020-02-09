import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PokemonCard from './PokemonCard';
import { Pokemon } from '../../types/pokemon';

describe('PokemonCard component', () => {
	it('should render', () => {
		const pokemon: Pokemon = {
			id: 'test',
			name: 'Pikachu',
			image: 'image'
		};

		const wrapper = shallow(<PokemonCard pokemon={pokemon} />);

		expect(wrapper.exists()).toBeTruthy();
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
