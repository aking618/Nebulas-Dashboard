export interface Pokemon {
  abilities: any[];
  forms: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  name: string;
  order: number;
  past_types: any[];
  species: any;
  sprites: any;
  stats: any[];
  types: any[];
  weight: number;
}

export const Convert = {
  toPokemon(json: any): Pokemon {
    return {
      abilities: json.abilities,
      forms: json.forms,
      height: json.height,
      held_items: json.held_items,
      id: json.id,
      is_default: json.is_default,
      name: json.name,
      order: json.order,
      past_types: json.past_types,
      species: json.species,
      sprites: json.sprites,
      stats: json.stats,
      types: json.types,
      weight: json.weight,
    };
  },
};
