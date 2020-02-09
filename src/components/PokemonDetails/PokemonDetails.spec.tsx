import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PokemonDetails from './PokemonDetails';
import { Pokemon } from '../../types/pokemon';

describe('PokemonDetails component', () => {
	it('should render', () => {
		const pokemon: Pokemon = {
			id: 'test',
			name: 'Pikachu',
			image: 'image'
		};
		const wrapper = shallow(<PokemonDetails pokemon={pokemon}/>);

		expect(wrapper.exists()).toBeTruthy();
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
