import Component from "../Component/Component.js";

import type Pokemon from "./types";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

class PokemonListComponent extends Component {
  private pokeData: Pokemon[] = [];

  constructor(parentElement: HTMLElement) {
    super(parentElement, "poke-list", "ul");

    (async () => this.getPokemons())();
  }

  async getPokemons(): Promise<void> {
    const response = await fetch(apiUrl);
    const pokemons = (await response.json()) as Pokemon[];

    this.pokeData = pokemons;
    this.renderHtml();
  }

  renderHtml(): void {}
}

export default PokemonListComponent;
