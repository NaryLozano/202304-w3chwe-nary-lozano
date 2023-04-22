import Component from "../Component/Component.js";
import PokeCardComponent from "../PokeCardComponent/PokeCardComponent.js";

import { type Pokemon } from "./types";
import { type PokemonData } from "./types";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

class PokemonListComponent extends Component {
  private pokemons: Pokemon[] = [];

  constructor(parentElement: HTMLElement) {
    super(parentElement, "poke-list", "ul");

    (async () => this.getPokemons())();
  }

  async getPokemons(): Promise<void> {
    const response = await fetch(apiUrl);
    const pokeData = (await response.json()) as PokemonData;

    this.pokemons = pokeData.results;
    this.renderHtml();
  }

  renderHtml(): void {
    this.pokemons.forEach((pokemon) => {
      new PokeCardComponent(this.domElement, pokemon.url);
    });
  }
}

export default PokemonListComponent;
