import ButtonPaginationComponent from "../ButtonPaginationComponent/ButtonPaginationComponent.js";
import Component from "../Component/Component.js";
import PokeCardComponent from "../PokeCardComponent/PokeCardComponent.js";

import { type Pokemon } from "./types";
import { type PokemonData } from "./types";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

class PokemonListComponent extends Component {
  public next: string;
  public previous: string;
  private pokemons: Pokemon[] = [];

  constructor(parentElement: HTMLElement) {
    super(parentElement, "poke-list", "ul");

    (async () => this.getPokemons())();
  }

  async getPokemons(): Promise<void> {
    const response = await fetch(apiUrl);
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
    const main: HTMLElement = document.querySelector(".main")!;
    new ButtonPaginationComponent(main, this.previous, this.next);
  }
}

export default PokemonListComponent;
