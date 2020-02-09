import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Pokemon } from '../../types/pokemon';
import PokemonList from './PokemonList';

describe('PokemonList component', () => {
	it('should render', () => {
		const pokemons: Pokemon[] = [{
			id: 'test',
			name: 'Pikachu',
			image: 'image'
		}];

		const wrapper = shallow(<PokemonList pokemons={pokemons}/>);

		expect(wrapper.exists()).toBeTruthy();
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
