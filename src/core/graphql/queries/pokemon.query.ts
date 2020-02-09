import { gql } from 'apollo-boost';

export const pokemonQuery = gql`
	query pokemon($name: String) {
			pokemon(name: $name) {
          id
          name
          image
          classification
          maxHP
          classification
          types
          fleeRate
          maxCP
          resistant
          weaknesses
          evolutions {
              id
              name
							image
					}
			}
	}
`;
