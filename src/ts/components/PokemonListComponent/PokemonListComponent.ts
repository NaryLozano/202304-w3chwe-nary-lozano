import ButtonPaginationComponent from "../ButtonPaginationComponent/ButtonPaginationComponent.js";
import Component from "../Component/Component.js";
import PokeCardComponent from "../PokeCardComponent/PokeCardComponent.js";

import { type Pokemon } from "./types";
import { type PokemonData } from "./types";

let apiUrl = "https://pokeapi.co/api/v2/pokemon/";

class PokemonListComponent extends Component {
  public next = "";
  public previous = "";
  private pokemons: Pokemon[] = [];

  constructor(parentElement: HTMLElement) {
    super(parentElement, "poke-list", "ul");

    (async () => this.getPokemons())();
  }

  async getPokemons(): Promise<void> {
    const response = await fetch(`${apiUrl}`);
    const pokeData = (await response.json()) as PokemonData;

    this.pokemons = pokeData.results;
    this.next = pokeData.next;
    this.previous = pokeData.previous;

    this.renderHtml();
  }

  renderHtml(): void {
    this.pokemons.forEach((pokemon) => {
      new PokeCardComponent(this.domElement, pokemon.url);
    });
  }

  getNextPage(): void {
    this.domElement.innerHTML = "";
    apiUrl = this.next;
    void this.getPokemons();
  }

  getPreviousPage(): void {
    if (this.previous) {
      this.domElement.innerHTML = "";
      apiUrl = this.previous;
      void this.getPokemons();
    }
  }
}

export default PokemonListComponent;
