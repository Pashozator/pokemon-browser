import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Pokemon } from '../../types/pokemon';
import PokemonEvolutionList from './PokemonEvolutionList';

describe('PokemonEvolutionList component', () => {
	it('should render', () => {
		const evolutions: Pokemon[] = [{
			id: 'test',
			name: 'Pikachu',
			image: 'image'
		}];

		const wrapper = shallow(<PokemonEvolutionList evolutions={evolutions}/>);

		expect(wrapper.exists()).toBeTruthy();
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
