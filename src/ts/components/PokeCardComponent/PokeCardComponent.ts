import Component from "../Component/Component.js";
import { type PokeStructure } from "./types";

class PokeCardComponent extends Component {
  private pokeData: PokeStructure;

  constructor(parentElement: HTMLElement, private readonly pokemon: string) {
    super(parentElement, "poke-card", "li");
    (async () => this.getPokemon())();
  }

  async getPokemon(): Promise<void> {
    const response = await fetch(this.pokemon);
    const pokeData = (await response.json()) as PokeStructure;

    this.pokeData = pokeData;
    this.renderHtml();
  }

  renderHtml(): void {
    this.domElement.innerHTML = `
    <div class = "poke-card__image-container">
    <a href="./poke-detail.html"><img class = "poke-card__image" src="${this.pokeData.sprites.other["official-artwork"].front_default}" alt="" /></a>  
    </div>
    <div class = "poke-card__data-container">
      <h2 class = "poke-card__name">${this.pokeData.name}</h2>
      <ul class = "poke-card__data-list">
        <li class = "poke-card__type">${this.pokeData.types[0].type.name}</li>
      </ul>
    </div>
    `;
  }
}

export default PokeCardComponent;
