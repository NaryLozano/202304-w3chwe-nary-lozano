export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonData {
  results: Pokemon[];
  next: string;
  previous: string;
}
