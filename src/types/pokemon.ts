export interface Pokemon {
	id: string;
	name: string;
	image: string;
	maxHP?: number;
	fleeRate?: number;
	maxCP?: number;
	classification?: string;
	types?: string[];
	resistant?: string[];
	weaknesses?: string[];
	evolutions?: Pokemon[];
}
