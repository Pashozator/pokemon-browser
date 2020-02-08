import gql from 'graphql-tag';

export const pokemonsQuery = gql`
    query pokemons {
        pokemons(first: 10) {
            id
            number
            name
            image
        }
		}
`;
